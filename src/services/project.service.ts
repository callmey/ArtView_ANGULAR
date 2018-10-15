import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Project } from '../models/project';
import { Artfield } from '../models/artfield';
import { District } from '../models/district';

@Injectable()
export class ProjectService {
    private URL ="http://localhost:8080/art-view/api/";
  private http: Http;

  constructor(http: Http) { 
    this.http = http;
  }

  //프로젝트 전체 불러오기
  getProjects(): Promise<Project[]> {
    let url = this.URL + 'projectList'
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Project[])
      .catch(this.handleError);
  }

  getProject(id: number): Promise<Project> {
    let url = this.URL + 'projectDetail/' + id;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Project[])
      .catch(this.handleError);
  }

  //프로젝트 작성 페이지

  //예술 분야
  getArtfields(): Promise<Artfield[]> {
    let url = this.URL + 'artfields';
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Artfield[])
    .catch(this.handleError);
  }

  //지역
  getDistricts(): Promise<District[]> {
    let url = this.URL + 'districts';
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as District[])
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