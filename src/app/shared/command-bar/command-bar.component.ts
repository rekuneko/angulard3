import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  constructor() { }

  @Output() onClick = new EventEmitter<any>()
  @Output() delClick = new EventEmitter<any>()

  addClickButton(action:string){
    this.onClick.emit(action)
    alert("Add button works!")
  }

  delClickButton(action:string){
    this.delClick.emit(action)
    alert("Delete button works!")
  }

  ngOnInit(): void {
  }

}
