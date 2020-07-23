import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'mpl-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @Input()
  books: Book[];

  @Output() idBook: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendIdBookToDelete(idBook) {
    this.idBook.emit(idBook);
  }

}
