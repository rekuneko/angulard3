import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../pages/profile/profile.component';

const routes: Routes = [
  { path: 'profile', 
  component: ProfileComponent,
  loadChildren: () => import('./../user.module').then(m => m.UserModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
