import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { MuseumComponent } from '../pages/museum/museum.component';
import { Item } from '../models/item';

@Injectable()
export class MuseumService {
  private URL ="http://localhost:8080/art-view/api/";

  constructor(private http: Http) { 
    this.http = http;
  }

  getMuseums(): Promise<Item[]> {
    let url = this.URL + 'bookList';
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Item[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
