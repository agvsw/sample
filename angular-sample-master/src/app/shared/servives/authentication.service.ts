import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../model/login-data';
import { CommonResponse } from '../model/common-response';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient : HttpClient) { }

  getDummy(id): Observable<any>{
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  login(loginData : LoginData):Observable<CommonResponse<Customer>>{
    return this.httpClient.post<CommonResponse<Customer>>('http://localhost:8180/login',loginData);
  }
}
