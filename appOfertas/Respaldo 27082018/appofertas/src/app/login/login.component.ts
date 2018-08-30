import { Component, OnInit } from '@angular/core';
import { stringify } from '../../../node_modules/@angular/compiler/src/util';
//import { AuthService } from '../auth.service';

import { RegistrarPersonaService } from '../registrar-persona.service';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  private cargando: boolean = false;

  constructor(private authService: AuthService,
               public registrar: RegistrarPersonaService,
                public router: Router) { }

  ngOnInit() {
    let myVar = setTimeout(prueba =>{
      this.cargando = true;
     }, 500);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        console.log('Esta logueado');
        console.log(user);
      } else {
        console.log('No esta logueado');
      }
    });
    
    //console.log('Estado de Auth: '+localStorage.getItem('estadoAuth'));
    // var nombreUsuario = localStorage.getItem('nombreUsuario');
    // var idUsuario = localStorage.getItem('idUsuario');
    // var emailUsuario = localStorage.getItem('emailUsuario');
    // var fotoUsuario = localStorage.getItem('fotoUsuario');
    // console.log("Datos "+nombreUsuario);
  }

  postRegistrarPersona(body: string): void {

    this.registrar.registrarPersona(body).subscribe(data => {
      console.log(data);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      let body = {
        "persona": [
          {
            "id": user.id,
            "nombre": user.firstName,
            "apellidos": user.lastName,
            "correo": user.email,
            "contrasena": "password",
            "telefono": "",
            "genero": "",
            "rol": "cliente",
            "estado": "Activo",
            "token": "123446"
          }
        ]
      };
      
      this.postRegistrarPersona(JSON.stringify(body));
      console.log(user);
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  registrarPersona() {
    this.router.navigate(['/registrar']);
  }
}
