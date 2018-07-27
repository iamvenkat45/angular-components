import { UserService } from './../user.service';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user;
  constructor(private userService: UserService) {
  }

  ngOnInit() {

  }

  onSelect() {
    this.user = this.userService.getUser();
    console.log(this.user);
  }

}
