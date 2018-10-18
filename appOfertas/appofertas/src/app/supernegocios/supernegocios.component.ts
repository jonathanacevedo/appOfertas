import { Component, OnInit } from '@angular/core';
import { ListarService } from '../serviciosListar/listar.service';
import { EditarService } from '../serviciosEditar/editar.service';
import { EliminarService } from '../serviciosEliminar/eliminar.service';
import { AuthServiceManual } from '../authService/auth.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { VerfotoComponent } from '../verfoto/verfoto.component';


@Component({
  selector: 'app-supernegocios',
  templateUrl: './supernegocios.component.html',
  styleUrls: ['./supernegocios.component.css']
})
export class SupernegociosComponent implements OnInit {

  private negocios: any[] = [];

  constructor(private listar: ListarService,
    private editarService: EditarService,
    private eliminarService: EliminarService,
    private auth: AuthServiceManual,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getNegocios()
  }

  getNegocios(): void {
    this.listar.getNegocios().subscribe((data) => {
      data.forEach((negocio) => {
        this.listar.getPersonaPorId(negocio.idadmin).subscribe((data) => {
          data.persona.forEach((persona) => {
            //console.log('El negocio ' + negocio.nombre + ' pertenece al usuario ' + persona.nombre);
            negocio.propietario = persona.nombre
          })
        });
        this.negocios.push(negocio)
      });
    });
  }

  putEditarNegocio(body: string): void {
    this.editarService.putEditarNegocio(body).subscribe((data) => {
      //console.log(data);
      alert('Negocio actualizado correctamente');
    });
  }

  deleteEliminarNegocio(body: any): void {
    this.eliminarService.deleteEliminarNegocio(body).subscribe((data) => {
      if (data.body !== undefined) {
        //console.log(data.body.id);
        this.listar.getOfertasPorIdNegocio(data.body.id).subscribe((oferta) => {
          oferta.forEach((ofert) => {
            this.eliminarOferta(ofert.id, data.body.id, '');
          })
        }
        );
      }

    });
    this.negocios = [];
    alert('Negocio eliminado correctamente')
    this.getNegocios();
  }

  editarNegocio(negocio: any) {
    let body = {
      "negocio": [
        {
          "nit": negocio.nit,
          "idnegocio": negocio.idnegocio,
          "nombre": negocio.nombre,
          "email": negocio.email,
          "idadmin": negocio.idadmin,
          "ciudad": negocio.ciudad,
          "telefono": negocio.telefono,
          "tipo": negocio.tipo,
          "direccion": negocio.direccion,
          "foto": negocio.foto,
          "detalle": negocio.detalle,
          "latitud": negocio.latitud,
          "longitud": negocio.longitud
        }
      ]
    };
    this.putEditarNegocio(JSON.stringify(body));
  }

  eliminarNegocio(idnegocio: string, nombre: string) {
    let x = confirm("¿Está seguro de eliminar el negocio " + nombre + "?");
    if (x) {
      let body = {
        "negocio": [
          {
            "idnegocio": idnegocio,
            "parametro": 'none'
          }
        ]
      }
      this.deleteEliminarNegocio(JSON.stringify(body));
    }
  }

  deleteEliminarOferta(body: string): void {
    this.eliminarService.deleteEliminarOferta(body).subscribe((data) => {
      //console.log(data);
    });
  }

  eliminarOferta(id: string, idnegocio: string, producto: string) {
    let body = {
      "oferta": [
        {
          "id": id,
          "parametro": idnegocio
        }
      ]
    };
    //console.log('Body para borrar: ' + JSON.stringify(body));
    this.deleteEliminarOferta(JSON.stringify(body));
  }

  verFoto(url: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    dialogConfig.height = '40%';
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      url: url
    };
    //this.dialog.open(EditarNegoComponent, dialogConfig);
    const dialogRef = this.dialog.open(VerfotoComponent, dialogConfig);
  }
}