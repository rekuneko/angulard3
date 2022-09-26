import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { ProfileComponent } from './user/pages/profile/profile.component';

const routes: Routes = [
  { path: 'book', 
  component: BookListComponent,
  loadChildren: () => import('./book/book.module').then(m => m.BookModule)
 },
  { path: 'blog', 
  component: BlogItemComponent,
  loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
 },
  { path: 'profile', 
  component: ProfileComponent,
  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
