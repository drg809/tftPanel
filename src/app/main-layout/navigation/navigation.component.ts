import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthGuard } from 'src/app/shared/helpers/auth.guard';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;
  logged: boolean;
  clicked: boolean;

  constructor(private authGuard: AuthGuard,private authService: AuthenticationService) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
    this.logged = this.authGuard.canActivate();
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  logout() {
    this.authService.logout();
  }
}
