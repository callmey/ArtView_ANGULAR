import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Space } from '../models/Space';
@Injectable()
export class SpaceService {

  private URL = 'http://localhost:8080/art-view/api/';
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  } 
  
  getSpaces(keyword: string): Promise<Space[]> { 
    return this.http.get(this.URL + "spaceDetail/" + keyword)
    .toPromise()
    .then(response => response.json() as Space[])
    .catch(this.handleError); 
  } 
    
    
private handleError(error: any): Promise<any> { 
  console.error('An error occurred', error); // for demo purposes only 
  return Promise.reject(error.message || error); 
} 
}