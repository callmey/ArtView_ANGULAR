import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {TokenStorage} from '../../services/token.storage';
import {UserService} from '../../services/user.service';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router, public dialog: MatDialog, private userService: UserService, private token: TokenStorage) {
  }

  login_id: string;
  pwd: string;

  login(): void {
        this.userService.attemptAuth(this.login_id, this.pwd).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['home']);
      }
    );
  }
  }
