import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Question } from '../models/question';
@Injectable()
export class QnaService {

  private URL = 'http://localhost:8080/art-view/api/';
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  } 

  getQuestionList(): Promise<Question[]> { 
    return this.http.get(this.URL + "questionList")
    .toPromise()
    .then(response => response.json() as Question[])
    .catch(this.handleError); 
  } 

  private handleError(error: any): Promise<any> { 
    console.error('An error occurred', error); // for demo purposes only 
    return Promise.reject(error.message || error); 
  } 
  
}
