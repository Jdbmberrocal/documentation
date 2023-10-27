import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:any = null;
  password:any = null;

  constructor(
    public authService:AuthService,){}

  login()
  {
    if(!this.email || !this.password)
    {
      alert('campos vacios')
      return;
    }
    this.authService.login(this.email, this.password).subscribe((resp:any) => {
      console.log(resp);
    })
  }

}
