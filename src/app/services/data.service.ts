import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://cf-backend-2.onrender.com/api/sensors/test'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Helper function to get cookie value
  getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  // Method to get data from API with Bearer token
  getData(): Observable<any> {
    const token = this.getCookie('token'); // Get token from cookie

    // Set headers if token is present
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Make the HTTP request with the authorization header
    return this.http.get<any>(this.apiUrl, { headers });
  }
}

