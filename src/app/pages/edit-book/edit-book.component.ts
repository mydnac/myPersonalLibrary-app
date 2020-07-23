import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book.service';

@Component({
  selector: 'mpl-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  createNewBook(book) {
    this.bookService.generateNewBook(book).subscribe(data =>
      console.log(data));
  }

}
