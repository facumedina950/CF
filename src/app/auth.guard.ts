import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(): boolean {
    
    const token = this.cookieService.get('token'); 
    console.log('Token en guard:', token);

    if (token) {
      return true; 
    } else {
      console.log('Redirigiendo a login'); // Mensaje para depurar
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
