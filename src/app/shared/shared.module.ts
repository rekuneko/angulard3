import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { CommandBarComponent } from './command-bar/command-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    CommandBarComponent
  ]
})
export class SharedModule { }
