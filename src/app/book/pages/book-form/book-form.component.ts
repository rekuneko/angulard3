import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})

export class BookFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  bookForm = this.fb.group({
    name:[''],
    authors:this.fb.array([]),
    isbn:['']
  })

  form:string = ''
 
  ngOnInit(): void {
  }

  get authors(){
    return this.bookForm.get('authors') as FormArray
  }

  addAuthors(){
    this.authors.push(this.fb.group({authors:['']}))
  }

}