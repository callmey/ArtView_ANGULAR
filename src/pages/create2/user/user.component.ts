import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Artfield } from '../../../models/artfield';
import { Age } from '../../../models/age';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private artfield: Artfield[];
  private ages: Age[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getArtfield().then(
      artfield => this.artfield = artfield);

    this.userService.getAges().then(
      ages => this.ages = ages);
  }

}
