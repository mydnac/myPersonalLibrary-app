import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'mpl-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @Input()
  books: Book[];

  constructor() { }

  ngOnInit(): void {
  }

}
