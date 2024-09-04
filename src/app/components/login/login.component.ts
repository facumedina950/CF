import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

login = []

constructor(private formulario:FormBuilder, private loginService:LoginService){}

usuarios:FormGroup = this.formulario.group({
  email:['Luciando@email.com', [Validators.required, Validators.email]],
  password:['contraseña',[Validators.required, Validators.minLength(8),]],
});

ngOnInit(): void {
  
  this.loginService.login().subscribe({
    next: (respuesta)=>{
      console.log(respuesta)
      this.login = respuesta
    }
  })
 
}

muestreUsuario(){
  console.log(this.usuarios.value)
}

mostrarUsuario:string = this.usuarios.controls['email'].value

 
}
