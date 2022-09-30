import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandBarComponent } from 'src/app/shared/command-bar/command-bar.component';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blogs:Blog|undefined

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  delete(){
    alert("Deleted id:" + this.blogs?.id);
  }

  edit(){
    // alert("Edited id:" + id);
    this.router.navigate(['blog/form'])
  }
}
