import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  app_name = "Movie Booking"
  email = ""
  password=""
  username=""
  about=""
  constructor(private userService: UserService) { }
  ngOnInit(): void {

  }
  submitForm(){
    this.userService.setUsers({
      email:this.email,
      password:this.password,
      username:this.username,
      about:this.about
    })
    this.email=""
    this.username=""
    this.password=""
    this.about=""

  }
}
