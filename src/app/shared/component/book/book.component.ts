import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'mpl-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  book: Book;

  @Input() oneBook: Book;

  @Output() idBook: EventEmitter<number> = new EventEmitter();

  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  array(n: number) {
    return Array(n);
  }

  sendIdBookToDelete(idBook) {
    this.idBook.emit(idBook);
    window.location.reload();
  }

  bookToDelete(idBook) {
    this.idBook.emit(idBook);
    // window.location.reload();
  }

}
