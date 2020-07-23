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

  generateNewBook(book: Book) {
    return this.http.post(this.URL, book);
  }

  getOneBook(id: number) {
    return this.http.get(this.URL + `/${id}`);
  }

  editBook(id, book: Book) {
    return this.http.put(this.URL + `/${id}`, book);
  }

  deleteBook(book: Book) {
    return this.http.delete(this.URL + `/${book}`);
  }
}
