import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from '../../../shared/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'mpl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  book: Book = { title: '', readingDate: new Date(), img: '', summary: '', rating: 0, personalSummary: '' };
  @Output() addBook: EventEmitter<Book> = new EventEmitter();
  @Input() currentBook: Book;
  @Output() editedBook: EventEmitter<Book> = new EventEmitter();

  constructor(public route: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.addBook.emit(this.book);
    console.log(this.book);
    this.route.navigateByUrl('/list-books');
  }

  editBook() {
    this.book.title = this.currentBook.title;
    this.book.summary = this.currentBook.summary;
    this.book.readingDate = this.currentBook.readingDate;
    this.book.rating = this.currentBook.rating;
    this.book.img = this.currentBook.img;
    this.book.personalSummary = this.currentBook.personalSummary;
    console.log(this.book);
    this.editedBook.emit(this.book);
    this.route.navigateByUrl('/list-books');
  }


}
