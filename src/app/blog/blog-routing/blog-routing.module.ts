import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from '../components/blog-item/blog-item.component';

const routes: Routes = [
  { path: 'blog', 
  component: BlogItemComponent,
  loadChildren: () => import('./../blog.module').then(m => m.BlogModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
