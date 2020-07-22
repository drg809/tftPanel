import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  canActivate() {
    if (this.authenticationService.currentUserValue.token) {
      // authorised so return true
      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login']);
      return false;
    }
  }
}
