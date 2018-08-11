import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NaverSpace } from '../models/naverSpace';
import { Space } from '../models/space'
@Injectable()
export class SpaceService {

  private URL = 'http://localhost:8080/art-view/api/';
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  } 
  

  getSpaceList(): Promise<Space[]> { 
    return this.http.get(this.URL + "spaceList")
    .toPromise()
    .then(response => response.json() as Space[])
    .catch(this.handleError); 
  } 

  getNaverSpace(keyword: string): Promise<NaverSpace[]> { 
    return this.http.get(this.URL + "spaceDetail/" + keyword)
    .toPromise()
    .then(response => response.json() as NaverSpace[])
    .catch(this.handleError); 
  } 
    
    
private handleError(error: any): Promise<any> { 
  console.error('An error occurred', error); // for demo purposes only 
  return Promise.reject(error.message || error); 
} 
}