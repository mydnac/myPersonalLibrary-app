import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'mpl-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  book: Book;

  constructor() { }

  ngOnInit(): void {

  }

  array(n: number) {
    return Array(n);
  }

}
