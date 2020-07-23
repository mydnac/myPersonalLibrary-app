import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from '../../shared/services/book.service';
import { Book } from '../../shared/models/book';

@Component({
  selector: 'mpl-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  id: number;
  book: any;

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

  bookToDelete(idBook) {
    this.bookService.deleteBook(idBook).subscribe();
    this.router.navigateByUrl('/list-books');
  }



}
