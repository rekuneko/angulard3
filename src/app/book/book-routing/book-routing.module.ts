import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookItemComponent } from '../components/book-item/book-item.component';
import { BookFormComponent } from '../pages/book-form/book-form.component';

const routes: Routes = [
  { path: 'book', 
  component: BookItemComponent,
  loadChildren: () => import('./../book.module').then(m => m.BookModule),
  children: [
    { path: 'book/form',
    component: BookFormComponent,
    loadChildren: () => import('./../book.module').then(m => m.BookModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }