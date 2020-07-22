import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = '/users';
  URL = environment.Url + this.path;

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User> {
    return this.http.get<User>(this.URL);
  }

}
