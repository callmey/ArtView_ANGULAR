import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Artfield } from '../../../models/artfield';
import { City } from '../../../models/City';
import { District } from '../../../models/District';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  private userService: UserService;
  private majors: Artfield[];
  private cities: City[];
  private districts: District[]; 

  constructor(userService: UserService, private router: Router) {
    this.userService = userService;

   }
  ngOnInit() {
    this.userService.getArtfield().then(
      majors => this.majors = majors
    );

    this.userService.getCity().then(
      cities => this.cities = cities
    );

    this.userService.getDistrict().then(
      districts => this.districts = districts
    );
  }


  create() {
    this.router.navigate(['/create3']);
  }

}
