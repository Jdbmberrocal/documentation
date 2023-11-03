import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICES } from 'src/app/config/config';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  token:any = "";

  constructor(
    private http: HttpClient,
    private router: Router) 
  {
    this.loadStorage();
  }

  loadStorage()
  {
    if(localStorage.getItem('token'))
    {
      this.token = localStorage.getItem("token");
      this.user = JSON.parse(localStorage.getItem("user") ?? '');
    }else{
      this.token = "";
      this.user = null;

    }
  }

  login(email: string, password: string) 
  {
    let url = 'http://192.168.0.105:8000/api/login';
    return this.http.post(url, {email,password}).pipe(
        map((resp:any) => {
          if(resp.success)
          {
            console.log(resp)
            //almacena el token en local
            return this.saveLocalStorageResponse(resp);
          }else{
            return resp;
          }
        }),
        catchError((err:any) => {
          return of(err);
        })
      );
  }

  saveLocalStorageResponse(resp: any)
  {
    if(resp.success && resp.data)
    {
      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("user", JSON.stringify(resp.data.user));
      this.user = resp.data.user;
      this.token = resp.data.token;
      return true;
    }
    return false;
  }

  registro(email: string, password: string) 
  {
    let url = 'http://192.168.0.105:8000/api/register';
    return this.http.post(url, {email,password})
  }

  logout()
  {
    this.user = null;
    this.token = "";
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    this.router.navigate(["auth/login"]);
  }

}

