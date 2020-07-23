import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addBook.emit(this.book);
    console.log(this.book);
    this.route.navigateByUrl('/list-books');
  }


}
