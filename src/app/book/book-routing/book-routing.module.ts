import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookItemComponent } from '../components/book-item/book-item.component';

const routes: Routes = [
  { path: 'book', 
  component: BookItemComponent,
  loadChildren: () => import('./../book.module').then(m => m.BookModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }