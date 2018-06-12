import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Artist } from '../../../models/artist';
import { Provider } from '../../../models/provider';
import { Age } from '../../../models/age';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import {MatDialog } from '@angular/material';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NomalComponent implements OnInit {
  private normal: User;
  private ages: Age[];

  constructor(private userService: UserService) { 
  }

  ngOnInit() {
    this.userService.getAges().then(
      ages => this.ages = ages);
  }

    create() {
    this.userService.SignUp(this.normal).then(
      message=> alert(message));
    }
}
