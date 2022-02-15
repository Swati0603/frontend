import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse,Jobs } from '../models';
const PRIVATE='https://naukaries.herokuapp.com/private/'
const PUBLIC='http://localhost:8080/api/myjobposts';
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
  
   


public getToken(): string | null {
  return window.sessionStorage.getItem(TOKEN_KEY);
}

getpayload()
{
  let token=this.getToken();
  return JSON.parse(window.atob(TOKEN_KEY.split('.')[1])); 
  
}
private extractData(res: Response) {
  let body = res;
  return body || { };
}

getjobs(): Observable<APIResponse<Jobs>>
{
  const httpOptions = {
   headers: new HttpHeaders({
      'Accept': 'application/json, text/plain, */*',
       'Content-Type':'application/json',
     // 'Authorization': 'Bearer '+this.getToken()
    })
  };
 // console.log(httpOptions);
  //employees/getjobs/
  //${this.getpayload().id}
  return this.http.get<APIResponse<Jobs>>(`${PUBLIC}`,httpOptions);
}
applyjob(jobs:any)
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': 'Bearer'+' '+this.getToken()
    })
  };
  let job_id:any=jobs.jobDetails._id;
  let emp_id:any=this.getpayload().id;
  return this.http.get(`${PRIVATE}employees/apply/${emp_id}/${job_id}`,httpOptions);
}



}