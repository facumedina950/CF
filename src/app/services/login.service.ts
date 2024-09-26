import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(body: any): Observable<any> {
    return this.http.post(
      'https://cf-backend-2.onrender.com/api/users/login',
      body
    );
  }

  getlogin(): Observable<any> {
    return this.http.get('https://cf-backend-2.onrender.com/api/docs');
  }
}
