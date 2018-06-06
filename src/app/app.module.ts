import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { MuseumComponent } from '../pages/museum/museum.component';
import { UserService } from '../services/user.service';
import { MuseumService } from '../services/museum.service';
import { CreateComponent } from '../pages/create/create1/create.component';
import { Create2Component } from '../pages/create/create2/create2.component';
import { Create3Component } from '../pages/create/create3/create3.component';
import { Create4Component } from '../pages/create/create4/create4.component';
import { NavComponent } from '../pages/home/nav/nav.component';
import { FooterComponent } from '../pages/home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MuseumComponent,
    CreateComponent,
    Create2Component,
    Create3Component,
    Create4Component,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'create', component: CreateComponent },
      { path: 'login', component: LoginComponent },
      { path: 'museum', component: MuseumComponent },
    ])
,
  ],
  providers: [UserService, MuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
