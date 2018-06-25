import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from '../pages/login/login.component';
import { User } from '../models/user';
import { Age } from '../models/Age';
import { City } from '../models/City';
import { District } from '../models/District';
import {Observable} from 'rxjs';
import { Artfield } from '../models/artfield';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    private URL ="http://localhost:8080/art-view/api/";

    constructor(private http: HttpClient, private Http: Http) { 
    }

  SignUp(user: User): Promise<string> {
    let url = this.URL + 'sign-up';
    return this.Http.post(url, user)
    .toPromise()
    .then(response => response.text() as string)
    .catch(this.handleError);
  }

  getAges(): Promise<Age[]> {
    return this.Http.get(this.URL + "ages")
    .toPromise()
    .then(response => response.json() as Age[])
    .catch(this.handleError);

  }

  getArtfield(): Promise<Artfield[]> {
    return this.Http.get(this.URL + "artfields")
    .toPromise()
    .then(response => response.json() as Artfield[])
    .catch(this.handleError);
  }

  getCity(): Promise<City[]>{
    return this.Http.get(this.URL + "cities")
    .toPromise()
    .then(response => response.json() as City[])
    .catch(this.handleError);
  }

  getDistrict(): Promise<District[]>{
    return this.Http.get(this.URL + "districts")
    .toPromise()
    .then(response => response.json() as District[])
    .catch(this.handleError);
  }


  /*public getUsers(): Observable {
    return this.http.get(this.URL + 'list');
  }*/

  attemptAuth(login_id: string, pwd: string): Observable<any> {
    const credentials = {login_id: login_id, pwd: pwd};
    console.log('attempAuth ::');
    return this.http.post('http://localhost:8080/art-view/login', credentials);
  }

  
  /*
  login(email:string, password:string ) {
    return this.http.post<User>('/api/login', {email, password})
        // this is just the HTTP call, 
        // we still need to handle the reception of the token
        .toPromise();
  }*/
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }
}
