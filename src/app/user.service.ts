import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user;
  constructor() { }


  name = 'Venkat';

  setUser(userDetails) {
    this.user = userDetails;
  }

  getUser() {
    return this.user;
  }
}
