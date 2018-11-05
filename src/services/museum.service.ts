import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { MuseumComponent } from '../pages/museum/museum.component';
import { Item } from '../models/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MuseumService {
  private URL ="http://localhost:8080/art-view/api/";

  constructor(private http: Http, private httpp: HttpClient) { 
    this.http = http;
    this.httpp = httpp;
  }
/*
  getMuseums(): Promise<Item[]> {
    let url = 'http://openapi.seoul.go.kr:8088/6367746a6b69726932304f686c5473/json/ListExhibitionOfSeoulMOAService/1/10/KOR';
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Item[])
    .catch(this.handleError);
  }

   getMuseum(): Observable<any> {
    return this.httpp.get(this.URL + 'bookList'); 
  }
*/
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
