import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{



constructor(private formulario:FormBuilder){}

usuarios:FormGroup = this.formulario.group({
  email:['Luciando@email.com', [Validators.required, Validators.email]],
  password:['contraseña',[Validators.required, Validators.minLength(8),]],
});

ngOnInit(): void {
  
}

muestreUsuario(){
  console.log(this.usuarios.value)
}

mostrarUsuario:string = this.usuarios.controls['email'].value

}
