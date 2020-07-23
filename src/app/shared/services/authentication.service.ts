import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {User} from '../models/user';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public currentUser: User;
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  public clearAuthData() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser = new User();
  }

  public get currentUserValue(): User {
    return this.currentUser;
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.apiUrl + '/users/login', {email, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser = user;
        }
        return user;
      }));
  }

  logout() {
    this.clearAuthData();
    location.reload();
  }
}
