import { Component, OnInit, Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { AuthServiceManual } from '../authService/auth.service';

import { RegistrarPersonaService } from '../serviciosRegistro/registrar.service';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { ListarService } from '../serviciosListar/listar.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() name: string;

  private user: SocialUser;
  private loggedIn: boolean;

  private loginForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required,
    Validators.minLength(6)
    ])
  });

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
    //console.log(this.name);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        //console.log('Esta logueado');
        //console.log(user);
      } else {
        //console.log('No esta logueado');
      }
    }
    );
  }

  postRegistrarPersona(body: string): void {
    this.registrar.registrarPersona(body).subscribe(data => {
      this.auth.Loggin('Cliente', '', '');
      this.router.navigate(['/inicio']);
      //console.log(data);
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
      //console.log(user);
    });
  }

  signOut(): void {
    this.authService.signOut();
    this.auth.Unloggin();
  }

  registrarPersona() {
    this.router.navigate(['/registrar']);
  }

  getListaPersonas(correo, contrasena): void {
    this.activarValidacion = false;
    this.listar.loguearPersona(correo, contrasena).subscribe((data: any) => {
      this.iniciar(data.persona[0].rol, data.persona[0].id, data.persona[0].nombre);
      this.router.navigate(['/inicio']);
    }, err => {
      alert("Error al loguearse: " + err.error.detalle);
    }
    );
    this.activarValidacion = true;
    this.error = 'Datos incorrectos.';
  }

  iniciar(persona: string, idPersona: string, nombre: string): void {
    this.auth.Loggin(persona, idPersona, nombre);
  }

  iniciarSesion() {
    if (this.camposSonValidos()) {
      let correo = this.loginForm.get('correo').value;
      let contrasena = this.loginForm.get('contrasena').value;
      this.getListaPersonas(correo, contrasena);
    } else {
      this.activarValidacion = true;
      this.error = 'Campos incompletos';
    }
  }

  cerrarSesion() {
    this.auth.Unloggin();
  }

  consultarSesion() {
    this.auth.isLogged();
    //console.log(this.auth.getRol());
  }

  getEmailErrorMessage() {
    let correo = this.loginForm.get('correo');
    return correo.hasError('required') ? 'Ingrese un correo' :
      correo.hasError('email') ? 'Correo invalido' : '';
  }

  getPasswordErroMessage() {
    let password = this.loginForm.get('contrasena');
    return password.hasError('required') ? 'Ingrese una contraseña' :
      password.hasError('minlength') ? 'Contraseña muy corta' : '';
  }

  camposSonValidos() {
    let correo = this.loginForm.get('correo');
    let password = this.loginForm.get('contrasena');
    // Validacion de campos vacios o nulos
    if (correo.value == '' || password.value == '' || correo == null || password == null) {
      return false;
    }

    // Validaciones para el correo
    let ingresoCorreo = correo.hasError('required') ? false : true;
    let esCorreoValido = correo.hasError('email') ? false : true;

    // Validaciones para la contraseña
    let ingresoPassword = password.hasError('required') ? false : true;
    let tieneTamanoMinimo = password.hasError('minlength') ? false : true;

    // Validacion de todos los campos
    let camposValidos = ingresoCorreo && esCorreoValido && ingresoPassword && tieneTamanoMinimo;

    return camposValidos;
  }

}
