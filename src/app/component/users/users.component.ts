import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users:User[]=[
    {name:'aditya', username:'adi02', email:'x@y.com'},
    {name:'bbb', username:'bbb02', email:'bb@y.com'},
    {name:'ccc', username:'ccc02', email:'cc@y.com'},
    {name:'ddd', username:'ddd02', email:'dd@y.com'},
    {name:'eee', username:'eee02', email:'ee@y.com'},
    {name:'fff', username:'fff02', email:'ff@y.com'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

