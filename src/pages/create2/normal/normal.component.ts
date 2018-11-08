import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Artist } from '../../../models/artist';
import { Provider } from '../../../models/provider';
import { Age } from '../../../models/Age';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
//import {MatDialog } from '@angular/material';
//import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NomalComponent implements OnInit {
  private normal: User;
  private ages: Age[];
  Arr = Array; //Array type captured in a variable
  num:number = 5;

  constructor(private userService: UserService, private router: Router) { 
  }

  ngOnInit() {
    this.userService.getAges().then(
      ages => this.ages = ages);
  }

    create() {
    //this.userService.SignUp(this.normal).then(
      //message=> alert(message));
      this.router.navigate(['/create3']);
    }
}
