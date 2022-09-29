import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  bookList:Book[] = [
    {id:1,name:'Totoy Brown',authors:['Totoy Brown'],isbn:'0-1577-0012-7'},
    {id:2,name:'Totoy Black',authors:['Totoy Black'],isbn:'0-1577-0012-8'},
    {id:3,name:'Totoy Blue',authors:['Totoy Blue'],isbn:'0-1577-0012-9'},
    {id:4,name:'Totoy Green',authors:['Totoy Green'],isbn:'0-1577-0012-0'},
    {id:5,name:'Totoy White',authors:['Totoy White'],isbn:'0-1577-0012-1'}
  ] 

  constructor() { }

  getBooks(){
    return this.bookList
  }
}


