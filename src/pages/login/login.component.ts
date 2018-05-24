import { Component, OnInit } from '@angular/core';
import { User } from '../../../src/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login : User;

users: User[] = [
  new User (1,1,'callmey',123,'양다연','010-7675-2505','callmey@nate.com',24,1),
];


  constructor() { }

  ngOnInit() {
  }

}
