import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  blogList:Blog[] = [
    {id:1,title:'Totoy Brown Blog 1',description:'a blog',author:'Totoy Brown',comments:['nice']},
    {id:2,title:'Totoy Brown Blog 2',description:'a blog',author:'Totoy Brown',comments:['nice']},
    {id:3,title:'Totoy Brown Blog 3',description:'a blog',author:'Totoy Brown',comments:['nice']},
    {id:4,title:'Totoy Brown Blog 4',description:'a blog',author:'Totoy Brown',comments:['nice']},
    {id:5,title:'Totoy Brown Blog 5',description:'a blog',author:'Totoy Brown',comments:['nice']}
  ] 

  constructor() { }

  getBlogs(){
    return this.blogList
  }
}
