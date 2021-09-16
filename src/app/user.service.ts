import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {User} from './User'
import {USERS} from './mock-users'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name = "service"
  constructor() { }
  getUsers(): User[]{
    return USERS
  }
  setUsers(user: any){
    USERS.push(user)
  }
  deleteUser(email: any){
    this.removeItemAll(USERS,email);
  }
  removeItemAll(arr: any, value: any) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i].email === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
}
