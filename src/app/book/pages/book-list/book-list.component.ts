import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList?:Book[] = []

  constructor(private bookService:BookService) { 
  }

  ngOnInit(): void {
    this.bookList = this.bookService.getBooks()
  }



}