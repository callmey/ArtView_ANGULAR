import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Artist } from '../../../models/artist';
import { Provider } from '../../../models/provider';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NomalComponent implements OnInit {
  private normal: User;
  private artist: Artist[]; 
  private provider: Provider[]; 
  private userService: UserService[];
  constructor(normal: User, artist: Artist, provider: Provider, userService: UserService) { }

  ngOnInit() {
  }

}
