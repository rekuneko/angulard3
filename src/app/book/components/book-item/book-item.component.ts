import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() books:Book[] = []

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



}
