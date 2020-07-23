import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book.service';
import { Book } from '../../shared/models/book';

@Component({
  selector: 'mpl-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  books: Book[];

  allBooks: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.allBooks = this.bookService.getAllBooks().subscribe(book => {
      this.books = book;
    });
  }

  sendIdBookToDelete(idBook) {
    this.bookService.deleteBook(idBook).subscribe();
    this.allBooks();
  }
}
