import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {User} from './User'
import {USERS} from './mock-users'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //url: string = "/assets/users.json"
  url: string = "http://localhost:5000/showusers"
  name = "service"
  constructor(private http:HttpClient) { }
  getUsers(): Observable<User[]>{
    return  this.http.get<User[]>(this.url);
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
