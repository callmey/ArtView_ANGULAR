import { Component, OnInit } from '@angular/core';
import { User } from '../../../src/models/user';
import {MatTableDataSource} from '@angular/material';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;

displayedColumns = ['id', 'fav_district_id', 'login_id', 'pwd','name','phone','email','age','userType'];
  dataSource = new MatTableDataSource();
  constructor(private router: Router, private userService: UserService, private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.userService.login().subscribe(
      data => {
        this.dataSource.data = data;
      }

    );

    /*this.form = this.fb.group({
      login_id: ['',Validators.required],
      pwd: ['',Validators.required]
    });*/

   /* login() {
      const val = this.form.value;

      if (val.login_id && val.pwd) {
          this.userService.login()
              .subscribe(
                  () => {
                      console.log("User is logged in");
                      this.router.navigateByUrl('/');
                  }
          );
        }
    }*/ 
  }
}
