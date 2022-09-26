import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  profile:User = {
    email: '',
    name: '',
    bio: '',
    active: false
  }

  ngOnInit(): void {
  }

}
