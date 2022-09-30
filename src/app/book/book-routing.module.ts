import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookFormComponent } from './pages/book-form/book-form.component';

const routes: Routes = [
  { path: 'book', 
  component: BookItemComponent},
  { path: 'book/form',
    component: BookFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }