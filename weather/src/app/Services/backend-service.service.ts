import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../Utility/constant';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {
  private baseUrl = API_URL; 
  constructor(private http:HttpClient) { }
  getapi(url:any): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`);
  }
  postapi(url: any,body:any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, body);
  }
}
