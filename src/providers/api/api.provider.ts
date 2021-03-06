import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../config';
import { crmURL } from '../config';

import 'rxjs/Rx';
@Injectable()
export class ApiProvider {

  constructor(public http: Http) { }
  getProjectCategories(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}projects/project-categories`, { headers: headers })
      .map((response: Response) => {
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
  getSpecDetails(specId, projId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}project/${projId}/specification/${specId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getLayouts(projId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}project/${projId}/layouts`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getGalleryImages(projId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}project/${projId}/gallery`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getAmenities(projId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}project/${projId}/amenities`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getUpates(projId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}project/${projId}/updates`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getWalkthroughDetails(projId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}project/${projId}/walk-through`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getProjectLocation(projId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}project/${projId}/location`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getProjectBrochure(projId) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}project/${projId}/brochure`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getContact() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}page/contact-us`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  downloadBrochure(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${crmURL}downloadBrochure`, JSON.stringify(data), { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getCrmProjects() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${crmURL}getProjects`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  saveCrmInquiry(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${crmURL}/externalInquirySave`, JSON.stringify(data), { headers: headers })
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