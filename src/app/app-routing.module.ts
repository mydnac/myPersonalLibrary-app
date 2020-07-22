import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListBooksComponent } from './pages/list-books/list-books.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-books', component: ListBooksComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
