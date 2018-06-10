import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from '../pages/login/login.component';
import { User } from '../models/user';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    private URL ="http://localhost:8080/art-view/api/";

    constructor(private http: HttpClient) { 
    }

  SignUp(user: User): Promise<string> {
    let url = this.URL + 'sign-up';
    return this.http.post(url, user)
    .toPromise()
    //.then(response => response.text() as string)
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
