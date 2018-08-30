import { Component, OnInit, Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { AuthServiceManual } from '../authService/auth.service';

import { RegistrarPersonaService } from '../serviciosRegistro/registrar.service';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { ListarService } from '../serviciosListar/listar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() name: string;

  private user: SocialUser;
  private loggedIn: boolean;

  private correo: string = '';
  private contrasena: string = '';

  private error: string = '';
  private activarValidacion: boolean = false;

  constructor(private authService: AuthService,

    public registrar: RegistrarPersonaService,
    private auth: AuthServiceManual,
    public router: Router,
    public listar: ListarService) { }

  ngOnInit() {
    console.log(this.name);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
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
      this.auth.Loggin('Cliente', '');
      this.router.navigate(['/inicio']);
      console.log(data);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      let body = {
        "persona": [
          {
            "nombre": user.firstName,
            "apellidos": user.lastName,
            "correo": user.email,
            "contrasena": "password",
            "telefono": "",
            "genero": "",
            "rol": "Cliente",
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
    this.auth.Unloggin();
  }

  registrarPersona() {
    this.router.navigate(['/registrar']);
  }

  getListaPersonas(): void {
    this.activarValidacion = false;
    this.listar.getPersonas().subscribe(data => {
      console.log(data);
      data.persona.forEach((persona) => {
        if(persona.correo==this.correo && persona.contrasena==this.contrasena){
          this.iniciar(persona.rol, persona.id);
          this.router.navigate(['/inicio']);
        }
      });
      this.activarValidacion = true;
    }
    );
    this.error = 'Datos incorrectos.';
  }

  iniciar(persona: string, idPersona: string) : void {
    this.auth.Loggin(persona, idPersona);
  }

  iniciarSesion() {
    if(this.correo=='' || this.contrasena==''){
      this.activarValidacion = true;
      this.error = 'Campos incompletos';
    } else {
      this.getListaPersonas();
    }    
  }

  cerrarSesion() {
    this.auth.Unloggin();
  }

  consultarSesion() {
    this.auth.isLogged();
    console.log(this.auth.getRol());
  }
}
