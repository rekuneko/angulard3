import { Component, Input, OnInit } from '@angular/core';
import { CommandBarComponent } from 'src/app/shared/command-bar/command-bar.component';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() books:Book[] = []
  @Input() command:CommandBarComponent = new CommandBarComponent;

  constructor(private bookService:BookService) { 
    this.books = bookService.getBooks()
  }

  ngOnInit(): void {
  }

  delete(id:number){
    alert("Deleted id:" + id);
  }

  edit(id:number){
    alert("Edited id:" + id);
  }

  add(action:string){
    // alert("Add button works!")
    this.command.addClickButton(action)
  }

  deleteAll(action:string){
    // alert("Delete button works!")
    this.command.delClickButton(action)
  }



}
