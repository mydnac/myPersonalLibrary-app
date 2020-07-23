import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book.service';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mpl-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  id: number;
  book: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });
    this.getOneBook();
  }

  getOneBook() {
    this.bookService.getOneBook(this.id).subscribe((book) => {
      this.book = book;
      console.log(this.book);
    });
  }

  createNewBook(book) {
    this.bookService.generateNewBook(book).subscribe(data =>
      console.log(data));
  }

  editBook(book) {
    this.bookService.editBook(this.id, this.book).subscribe(data => {
      data = this.book;
      console.log(data);
    });
  }

}
