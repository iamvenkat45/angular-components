import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  userList;
  selectedUser;
  btnText = 'Open Modal';
  @Output() sendUser = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userList = this.getUsersList();
  }

  getUsersList() {
    return [{
      firstName: 'Venkat',
      lastName: 'Bandlamudi',
      isSelected: false,
      isBold: false
    }, {
      firstName: 'Vijay',
      lastName: 'Soppa',
      isSelected: false,
      isBold: false
    }];
  }

  onClickUser(selectedUser) {
    // this.selectedUser = selectedUser;
    // this.userList.push({
    //   firstName: 'Venkat',
    //   lastName: 'Bandlamudi',
    //   isSelected: false,
    //   isBold: false
    // });
    // this.userList.map((userListItem) => {
    //   userListItem.isSelected = (userListItem.firstName === selectedUser.firstName);
    // });
    // this.sendUser.emit(selectedUser);

    this.userService.setUser(selectedUser);
  }

  onChildChange(emittedValue) {
    console.log(emittedValue);
  }

  onMouseOver() {
    console.log('Hovers on the button');
  }

}
