import { Component, Input, OnInit } from '@angular/core';
import { CommandBarComponent } from 'src/app/shared/command-bar/command-bar.component';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blogs:Blog[] = []
  @Input() command:CommandBarComponent = new CommandBarComponent;

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

  add(action:string){
    // alert("Add button works!")
    this.command.addClickButton(action)
  }

  deleteAll(action:string){
    // alert("Delete button works!")
    this.command.delClickButton(action)
  }
}
