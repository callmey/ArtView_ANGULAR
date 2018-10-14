import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
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

  getQuestion(id: number): Promise<Question> {
    let url = this.URL + 'questionDetail/' + id;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Question[])
      .catch(this.handleError);
  }
  saveQuestion(question: Question): Promise<string> {
    let url = this.URL + 'question/1';
    return this.http.post(url, question)
      .toPromise()
      .then(response =>
        response.text() as string)
      .catch(this.handleError);
  }

  updateQuestion(question: Question): Promise<string> {
    let url = this.URL + 'question/2';
    return this.http.post(url, question)
      .toPromise()
      .then(response =>
        response.text() as string)
      .catch(this.handleError);
  }


///////////////anser service//////////////
getAnswerList(id : number): Promise<Answer[]> {
  return this.http.get(this.URL + "answer/2/"+id)
    .toPromise()
    .then(response => response.json() as Answer[])
    .catch(this.handleError);
}



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only 
    return Promise.reject(error.message || error);
  }

}
