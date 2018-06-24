import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Artfield } from '../../../models/artfield';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private artfield: Artfield[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getArtfield().then(
      artfield => this.artfield = artfield);
  }

}
