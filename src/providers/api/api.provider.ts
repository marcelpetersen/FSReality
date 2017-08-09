import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../config';

import 'rxjs/Rx';
@Injectable()
export class ApiProvider {

  constructor(public http: Http) { }
  getProjectCategories(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}projects/project-categories`, { headers: headers })
      .map((response: Response) =>
      {
        return response.json();
      })
      .catch(this.handleError);
  }
  getProjects(catId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}projects/${catId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getProjectIntro(projId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}project/${projId}/introduction`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getProjectSpec(projId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}project/${projId}/specifications`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  handleError(error) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
} 