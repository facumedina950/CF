import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = [];
  

  constructor(
    private formulario: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private cookies: CookieService
  ) {}

  usuarios: FormGroup = this.formulario.group({
    email: ['johndoe@gmail.com', [Validators.required, Validators.email]],
    password: ['strongpassword', [Validators.required, Validators.minLength(8)]],
  });

  token: string | null = '';

  getToken() {
    this.token = this.cookies.get('token'); // Cambia 'token' por el nombre de tu cookie
  }

  ngOnInit(): void {}

  onSubmit() {
    this.cookies.delete('token', '/'); // Elimina la cookie del token

    if (this.usuarios.valid) {
      console.log(this.usuarios);
      this.loginService.login(this.usuarios.value).subscribe({
        next: (respuesta) => {
          console.log('Login exitoso:', respuesta);

          const token = respuesta.token;
          if (token) {
            // Almacenar el token en cookies
            this.cookies.set('token', token,);
            console.log('Token Guardado:', token);
            this.router.navigate(['/dashboard'])
          }
        },
        error: (error) => {
          alert(`No existe usuario`)
          console.error('Error en el login:', error);
        },
      });
    } else {
      console.error('Formulario inválido');
    }
  }

  muestreUsuario() {
    console.log(this.usuarios.value);
  }

  mostrarUsuario: string = this.usuarios.controls['email'].value;
}
