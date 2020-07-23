import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/helpers/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail: string;
  password: string;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private authGuard: AuthGuard) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-unused-expression
    this.authGuard.canActivate() ? this.router.navigate(['/']) : null ;
  }

  login() {
    this.authService.login(this.mail, this.password).subscribe(_data1 => {
      this.router.navigate(['/']);
      location.reload();
    },
    error => {
      console.log(error);
      if (error === 'Not Found') {
        alert('Usuario o contraseña incorrectos');
      } else {
        alert(error);
      }
    });
  }

}
