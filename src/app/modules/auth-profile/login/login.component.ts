import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email:any = null;
  password:any = null;

  constructor(
    public authService: AuthService, 
    public router: Router,
    ){}

  ngOnInit(): void {
    if(this.authService.token && this.authService.user)
    {
      this.router.navigate(["/"]);
    }
  }

  login()
  {
    if(!this.email || !this.password)
    {
      alert('campos vacios')
      return;
    }
    this.authService.login(this.email, this.password).subscribe((resp:any) => {
      console.log('resp: '+resp);

      if(resp)
      {
        // document.location.reload()
        location.href ='/';
      }else{
        if(resp.message == "Unauthorised.")
        {
          alert('El usuario o contraseña con incorrectos')
          return;
        }
      }
    })
  }

}
