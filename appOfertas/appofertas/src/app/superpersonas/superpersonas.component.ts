import { Component, OnInit } from '@angular/core';
import { ListarService } from '../serviciosListar/listar.service';
import { EditarService } from '../serviciosEditar/editar.service';
import { EliminarService } from '../serviciosEliminar/eliminar.service';
import { AuthServiceManual } from '../authService/auth.service';

@Component({
  selector: 'app-superpersonas',
  templateUrl: './superpersonas.component.html',
  styleUrls: ['./superpersonas.component.css']
})
export class SuperpersonasComponent implements OnInit {

  private personas: any[] = [];
  private nombre: any = '';

  private cliente: number = 0;
  private admin: number = 0;

  constructor(private listar: ListarService,
    private auth: AuthServiceManual,
    private editarService: EditarService,
    private eliminarService: EliminarService) { }

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas(): void {
    this.cliente = 0;
    this.admin = 0;
    this.listar.getPersonas().subscribe((data) => {
      data.persona.forEach((persona) => {
        if (persona.rol == 'Cliente') {
          this.cliente++;
        } else if (persona.rol == 'Administrador') {
          this.admin++;
        }
        if (persona.rol != 'superAdmin') {
          this.personas.push(persona)
        }
      });
    });
  }

  putEditarPersona(body: string): void {
    this.editarService.putEditarPersona(body).subscribe((data) => {
      console.log(data)
      alert('Persona actualizada correctamente')
    });
  }

  deleteEliminarPersona(body: any): void {
    this.eliminarService.deleteEliminarPersona(body).subscribe((data) => {

    });
    this.personas = [];
    alert('Persona eliminada correctamente')
    this.getPersonas();
  }

  editarPersona(persona: any) {
    let body = {
      "persona": [
        {
          "id": persona.id,
          "nombre": persona.nombre,
          "apellidos": persona.apellidos,
          "correo": persona.correo,
          "contrasena": persona.contrasena,
          "telefono": persona.telefono,
          "genero": persona.genero,
          "rol": persona.rol,
          "estado": persona.estado,
          "token": persona.token
        }
      ]
    }
    this.putEditarPersona(JSON.stringify(body));
  }

  eliminarPersona(id: string, nombre: string) {
    let confirmar = confirm("¿Está seguro de eliminar a la persona " + nombre + "?");
    if (confirmar) {
      let body = {
        "persona": [
          {
            "id": id,
            "parametro": this.auth.getIdAdmin(),
            "token": 'vacio'
          }
        ]
      }
      this.deleteEliminarPersona(JSON.stringify(body));
    }
  }

}
