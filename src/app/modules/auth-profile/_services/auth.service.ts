import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICES } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  token:any = "";

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login(email: string, password: string) 
  {
    let url = 'http://127.0.0.1:8000/api/users/login';
    return this.http.post(url, {email,password});
  }
}

