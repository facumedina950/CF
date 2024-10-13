import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service'; // Importar CookieService
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://cf-backend-2.onrender.com/api'; // Reemplaza por tu URL de API

  private itemAddedSource = new Subject<void>();
  itemAdded$ = this.itemAddedSource.asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  // Método para enviar datos del formulario
  sendFormData(sensorstatus: string, data: any): Observable<any> {
  const token = this.cookieService.get('token'); 
  const url = `${this.baseUrl}/${sensorstatus}`;

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  });

  return this.http.post(url, JSON.stringify(data), { headers }).pipe(
    tap(() => {
      // Emit the event when the request is successful
      this.itemAddedSource.next();
    }),
    catchError(this.handleError)
  );
}

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error inesperado';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error ${error.status}: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

