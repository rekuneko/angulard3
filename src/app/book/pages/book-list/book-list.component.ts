import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() books:Book[] = []

  constructor(private bookService:BookService) { 
    this.books = bookService.getBooks()
  }

  ngOnInit(): void {
  }



}