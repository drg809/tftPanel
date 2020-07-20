import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Summoner} from '../models/summoner';


@Injectable({providedIn: 'root'})
export class UserService {
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Summoner[]>(this.apiUrl + '/summoners');
  }

  getById(id: string) {
    return this.http.get<Summoner>(this.apiUrl + '/summoners/' + id);
  }

  create(data: Summoner) {
    return this.http.post<Summoner>(this.apiUrl + '/summoners/', data);
  }

  update(data: Summoner) {
    return this.http.put<Summoner>(this.apiUrl + '/summoners/', data);
  }

  remove(id: string) {
    return this.http.delete<any>(this.apiUrl + '/summoners/' + id);
  }
}
