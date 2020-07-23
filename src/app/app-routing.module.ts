import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListBooksComponent } from './pages/list-books/list-books.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { DetailBookComponent } from './pages/detail-book/detail-book.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-books', component: ListBooksComponent },
  { path: 'edit-book', component: EditBookComponent },
  { path: 'detail-book/:id', component: DetailBookComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
