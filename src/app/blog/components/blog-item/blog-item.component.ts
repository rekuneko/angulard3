import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blogs:Blog[] = []

  constructor(private blogService:BlogService) {
    this.blogs = blogService.getBlogs()
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
