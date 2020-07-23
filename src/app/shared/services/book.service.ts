import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  path = '/books';
  URL = environment.Url + this.path;

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.URL);
  }
}
