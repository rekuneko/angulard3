import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BookFormComponent } from './book/pages/book-form/book-form.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { ProfileComponent } from './user/pages/profile/profile.component';

const routes: Routes = [
  { path: '',
  component: AppComponent,
  children: [
    {path: '', redirectTo: '/blog', pathMatch: 'full'},
    {path: 'blog',component: BlogItemComponent,loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
    {path: 'book',component: BookListComponent,loadChildren: () => import('./book/book.module').then(m => m.BookModule)},
    {path: 'book/form',component: BookFormComponent,loadChildren: () => import('./book/book.module').then(m => m.BookModule)},
    {path: 'profile',component: ProfileComponent,loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
