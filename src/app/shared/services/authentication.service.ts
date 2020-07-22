import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {User} from '../models/user';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: User;
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  public clearAuthData() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User());
    this.currentUser = new User();
  }

  public get currentUserValue(): User {
    return this.currentUser;
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.apiUrl + '/login', {email, password})
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
    return this.http.get<any>(this.apiUrl + '/logout')
      .pipe(map(result => {
        // login successful if there's a jwt token in the response
        if (result) {
          this.clearAuthData();
        }
        return true;
      }));
  }
}
