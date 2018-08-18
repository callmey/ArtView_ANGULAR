import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Artfield } from '../../models/artfield';
import { Age } from '../../models/age';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private artfield: Artfield[];
  private ages: Age[];
  private user: User;

  private user_id: string;

  constructor(private userService: UserService, private router: Router) {
   }

  ngOnInit() {
    this.userService.getArtfield().then(
      artfield => this.artfield = artfield);

    this.userService.getAges().then(
      ages => this.ages = ages);

    this.user = new User(0,"","","","","",0,0);
  }

  create() {
    this.userService.SignUp(this.user)
    .then(message => alert(message));
    this.router.navigate(['/create']);
  }
}
