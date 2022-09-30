import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  @Output() onClick = new EventEmitter<any>()
  @Output() delClick = new EventEmitter<any>()

  addClickButton(){
    if (this.router.url.includes('book')) {
      this.router.navigate(['book/form'])
    } else if (this.router.url.includes('blog')) {
      this.router.navigate(['blog/form'])
    }
  }

  delClickButton(){
    this.delClick.emit(this.route.snapshot.params)
    alert("Delete all items?")
    console.log(this.route.snapshot.params)
  }

  ngOnInit(): void {
  }

}
