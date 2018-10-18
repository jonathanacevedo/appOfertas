import { Component, OnInit } from '@angular/core';
import { EditarService } from '../serviciosEditar/editar.service';
import { ListarService } from '../serviciosListar/listar.service';
import { AuthServiceManual } from '../authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  correo: string = '';
  telefono: string = '';
  genero: string = '';
  contrasena: string = '';
  rol: string = '';
  estado: string = '';
  token: string = '';

  error: string = '';

  cambioPass: boolean = false;

  contrasenaVieja: string = '';
  contrasenaNueva: string = '';

  constructor(private editarService: EditarService,
    private auth: AuthServiceManual,
    private listarService: ListarService,
    private router: Router) { }

  ngOnInit() {
    this.listarService.getPersonaPorId(this.auth.getIdAdmin()).subscribe((personas) => {
      personas.persona.forEach((persona) => {
        this.nombre = persona.nombre;
        this.apellidos = persona.apellidos;
        this.correo = persona.correo;
        this.telefono = persona.telefono;
        this.genero = persona.genero;
        this.contrasena = persona.contrasena;
        this.rol = persona.rol;
        this.estado = persona.estado;
        this.token = persona.token;
      });
    });
  }

  putEditarPerfil(body: string): void {
    this.editarService.putEditarPersona(body).subscribe((data) => {
      //console.log(data);
      alert('Perfil Actualizado Correctamente');
      if (this.cambioPass) {
        this.auth.Unloggin();
        this.router.navigate(['/']);
      }
    });
  }

  editarPerfil() {
    this.error = '';
    if (this.contrasenaVieja !== '') {
      if (this.contrasenaVieja == this.contrasena) {
        this.contrasena = this.contrasenaNueva;
        this.cambioPass = true;
      } else {
        this.error = 'Las contraseña antigua no coincide';
      }
    }
    let body = {
      "persona": [
        {
          "id": this.auth.getIdAdmin(),
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
    if(this.error == ''){
      this.putEditarPerfil(JSON.stringify(body));
    }
  }
}
