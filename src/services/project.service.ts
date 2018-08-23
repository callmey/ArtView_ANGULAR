import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {
    private URL ="http://localhost:8080/art-view/api/";
  private http: Http;

  constructor(http: Http) { 
    this.http = http;
  }

  getProject(id: number): Promise<Project> {
    let url = this.URL + 'project/' + id;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Project[])
      .catch(this.handleError);
  }

  projectSubmitTest(project: Project): Promise<string> {
    let url = this.URL + 'projectTest';
    return this.http.post(url, project)
              .toPromise()
              .then(response => 
                response.text() as string)
              .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}