import { Component, OnInit ,Input} from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {

  //@Input() userDetails: Array<any>=[]

  users : User[] = []
  constructor(private userService:UserService) { }
  ngOnInit(): void {
     this.userService.getUsers().subscribe((users)=>{
       this.users = users
      })
  }
  deleteUser(email:any){
    this.userService.deleteUser(email)
  }
}
