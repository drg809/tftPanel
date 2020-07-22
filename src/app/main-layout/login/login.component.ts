import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail: string;
  password: string;

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.mail, this.password).subscribe(_data1 => {
      this.router.navigate(['dashboard']);
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
