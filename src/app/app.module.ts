import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CommandBarComponent } from './shared/command-bar/command-bar.component';
import { BookService } from './book/services/book.service';
import { BlogService } from './blog/services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommandBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookService,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
