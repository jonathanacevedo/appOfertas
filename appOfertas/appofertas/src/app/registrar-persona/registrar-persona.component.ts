import { Component, OnInit } from '@angular/core';
import { SocialUser } from "angularx-social-login";
import { RegistrarPersonaService } from '../serviciosRegistro/registrar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent implements OnInit {


  private id: string = '';
  private nombre: string = '';
  private apellidos: string = '';
  private correo: string = '';
  private contrasena: string = '';
  private telefono: string = '';
  private genero: string = '';
  private rol: string = '';
  private estado: string = '';
  private token: string = '';
  private error: string = '';

  constructor(private registrar: RegistrarPersonaService,
    private router: Router) {
    this.estado = "ACTIVO";
    this.token = "SinToken";

  }

  ngOnInit() {
  }

  postRegistrarPersona(body: string): void {
    this.registrar.registrarPersona(body).subscribe(data => {
      console.log(data.detalle);
      if (data.codigo == '404') {
        this.error = data.detalle;
      } else {
        alert(this.rol + ' registrado correctamente.')
        this.router.navigate(['/']);
      }
    });
  }

  registrarPersona() {
    let body = {
      "persona": [
        {
          "nombre": this.nombre,
          "apellidos": this.apellidos,
          "correo": this.correo,
          "contrasena": this.contrasena,
          "telefono": this.telefono,
          "genero": this.genero,
          "rol": this.rol,
          "estado": this.estado,
          "token": this.token
        }
      ]
    };
    this.postRegistrarPersona(JSON.stringify(body));
  }
}