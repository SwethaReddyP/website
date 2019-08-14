import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  contentdata='http://www.mocky.io/v2/5d4eb4ec300000482d296057';

  constructor(private http: HttpClient) { }
  getcontentdata() {
    return this.http.get(this.contentdata);
  }
}