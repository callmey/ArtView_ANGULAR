import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
import { LoginComponent } from '../pages/login/login.component';
import { User } from '../models/user';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    private URL ="http://localhost:8080/art-view/api/";
    private userUrl = "http://localhost:8080/art-view/"

    constructor(private http: HttpClient) { 
    }

  SignUp(user: User): Promise<string> {
    let url = this.URL + 'sign-up';
    return this.http.post(url, user)
    .toPromise()
    //.then(response => response.text() as string)
    .catch(this.handleError);
  }

  public getUsers(): Observable<any> {
    return this.http.get(this.userUrl + 'login');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }
}
