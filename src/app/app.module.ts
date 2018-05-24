import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { MuseumComponent } from '../pages/museum/museum.component';
import { UserService } from '../services/user.service';
import { MuseumService } from '../services/museum.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MuseumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'museum', component: MuseumComponent },
    ])
,
  ],
  providers: [UserService, MuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
