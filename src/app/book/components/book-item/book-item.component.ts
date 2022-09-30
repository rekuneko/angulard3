import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommandBarComponent } from 'src/app/shared/command-bar/command-bar.component';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() bookList:Book|undefined
  @Output() emitter = new EventEmitter()

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  delete(){
    alert("Deleted id:" + this.bookList?.id);
    this.emitter.emit(this.bookList?.id)
  }

  edit(){
    // alert("Edited id:" + id);
    this.router.navigate(['book/form']) 
  }
}
