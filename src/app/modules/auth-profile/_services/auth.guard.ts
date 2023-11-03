import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (route, state) => {

  constructor(
    public authService: AuthService,
    public router: Router,
    ){}

  if(!this.authService.user && !this.authService.token)
  {
    this.router.navigate(["auth/login"]);
    return false;
  }
  return true;
};
