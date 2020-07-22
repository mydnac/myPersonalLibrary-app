import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';
import { ListBooksComponent } from './pages/list-books/list-books.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { DetailBookComponent } from './pages/detail-book/detail-book.component';
import { BooksComponent } from './pages/list-books/books/books.component';
import { FormComponent } from './pages/edit-book/form/form.component';
import { NavComponent } from './shared/component/nav/nav.component';
import { SearchComponent } from './shared/component/search/search.component';
import { BookComponent } from './shared/component/book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListBooksComponent,
    EditBookComponent,
    DetailBookComponent,
    BooksComponent,
    FormComponent,
    NavComponent,
    SearchComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
