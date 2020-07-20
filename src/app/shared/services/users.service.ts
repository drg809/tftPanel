import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../models/user';


@Injectable({providedIn: 'root'})
export class UserService {
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.apiUrl + '/users');
  }

  getById(id: string) {
    return this.http.get<User>(this.apiUrl + '/users/' + id);
  }

  create(data: User) {
    return this.http.post<User>(this.apiUrl + '/users/', data);
  }

  update(data: User) {
    return this.http.put<User>(this.apiUrl + '/users/', data);
  }

  remove(id: string) {
    return this.http.delete<any>(this.apiUrl + '/users/' + id);
  }
}
