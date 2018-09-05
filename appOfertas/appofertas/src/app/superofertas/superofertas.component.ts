import { Component, OnInit } from '@angular/core';
import { ListarService } from '../serviciosListar/listar.service';
import { EditarService } from '../serviciosEditar/editar.service';
import { EliminarService } from '../serviciosEliminar/eliminar.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { VerfotoComponent } from '../verfoto/verfoto.component';

@Component({
  selector: 'app-superofertas',
  templateUrl: './superofertas.component.html',
  styleUrls: ['./superofertas.component.css']
})
export class SuperofertasComponent implements OnInit {

  private ofertas : any[] = [];

  constructor(private listar: ListarService, 
              private editarService: EditarService,
              private eliminarService: EliminarService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getListarOfertas();
  }

  getListarOfertas(): void {
    this.listar.getOfertas().subscribe((data) => {
      data.forEach((oferta) => {
        this.ofertas.push(oferta)
      });
    });
  }

  putEditarOferta(body: string): void {
    this.editarService.putEditarOferta(body).subscribe((data) => {
      console.log(data);
      alert('Oferta acualizada correctamente');
    });
  }

  deleteEliminarOferta(body: string): void {
    this.eliminarService.deleteEliminarOferta(body).subscribe((data) => {
      console.log(data);
    });
    this.ofertas = [];
    alert('Oferta eliminada correctamente');
    this.getListarOfertas();
  }

  editarOferta(oferta: any) {
    let body = {
      "oferta": [
        {
          "id" : oferta.id,
          "producto": oferta.producto,
          "detalle": oferta.detalle,
          "valor": oferta.valor,
          "descuento": oferta.descuento,
          "foto": oferta.foto,
          "idnegocio": oferta.idnegocio,
          "fecha_inicio": oferta.fecha_inicio,
          "fecha_fin": oferta.fecha_fin,
          "parametro" : oferta.idnegocio
        }
      ]
    };
    this.putEditarOferta(JSON.stringify(body));
  }

  eliminarOferta(id: string, idnegocio: string, producto: string) {
    let confirmar = confirm('Esta seguro de eliminar la oferta de '+producto+'?');
    if(confirmar){
      let body = {
        "oferta" : [
          {
            "id": id,
            "parametro": idnegocio
          }
        ]
      };
      this.deleteEliminarOferta(JSON.stringify(body));
    }
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
    const dialogRef = this.dialog.open(VerfotoComponent, dialogConfig); 
  }

}