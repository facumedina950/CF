import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  constructor(private router: Router, private cookies: CookieService) {}

  items = [
    { 
      titulo: 'Lecturas OK', 
      valor: 1234, 
      icono: 'assets/Vector.png',
       
    },
    { 
      titulo: 'Alertas medias', 
      valor: 932, 
      icono: 'assets/AlertaMedia.png', 
      
    },
    { 
      titulo: 'Alertas rojas', 
      valor: 932, 
      icono: 'assets/AlertaRoja2.png', 
       
    },
    { 
      titulo: 'Sensores deshabilitados', 
      valor: 932, 
      icono: 'assets/Deshabilitado.png', 
      
    },
  ];

  indicadoresLista = [
    {
      nombre: 'Temperatura',
      icono: 'assets/Temperatura.png',
      ok: 100,
      medio: 20,
      alerta: 3
    },
    {
      nombre: 'Presión',
      icono: 'assets/Presion.png',
      ok: 100,
      medio: 20,
      alerta: 3
    },
    {
      nombre: 'Viento',
      icono:'assets/Viento.png',
      ok: 100,
      medio: 20,
      alerta: 3
    },
    {
      nombre: 'Niveles',
      icono:'assets/Niveles.png',
      ok: 100,
      medio: 20,
      alerta: 3
    },
    {
      nombre: 'Energía',
      icono:'assets/Energia.png',
      ok: 100,
      medio: 20,
      alerta: 3
    },
    {
      nombre: 'Tensión',
      icono:'assets/Tension.png',
      ok: 100,
      medio: 20,
      alerta: 3
    },
    {
      nombre: 'Monoxido de carbono',
      icono:'assets/MonoxidoDeCarbono1.png',
      ok: 100,
      medio: 20,
      alerta: 3
    },
    {
      nombre: 'Otros gases',
      icono:'assets/OtrosGases1.png',
      ok: 100,
      medio: 20,
      alerta: 3
    }
  ];
  

  logout() {
   
    this.cookies.delete('token', '/');
    this.router.navigate(['/login']);
  }
}
