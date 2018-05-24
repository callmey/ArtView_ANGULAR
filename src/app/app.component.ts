import { Component } from '@angular/core';
import { HomeComponent } from '../pages/Home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { MuseumComponent } from '../pages/museum/museum.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
 }