import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'mpl-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  book: Book;

  @Output() idBook: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  array(n: number) {
    return Array(n);
  }

  sendIdBookToDelete(idBook) {
    this.idBook.emit(idBook);
    window.location.reload();
  }

}
