import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  profile:FormGroup

  constructor(fb:FormBuilder){ 
    this.profile = fb.group({
      email: '',
      name: '',
      bio: '',
      active: false
    })
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.profile.value)
  }

}
