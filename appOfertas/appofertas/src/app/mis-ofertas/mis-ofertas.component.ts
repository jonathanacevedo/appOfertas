import { Component, OnInit } from '@angular/core';
import { ListarService } from '../serviciosListar/listar.service';
import { EliminarService } from '../serviciosEliminar/eliminar.service';
import { AuthServiceManual } from '../authService/auth.service';
import { EditarOfertaComponent } from '../editar-oferta/editar-oferta.component';
import { MatCard } from '@angular/material/card';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';



@Component({
  selector: 'app-mis-ofertas',
  templateUrl: './mis-ofertas.component.html',
  styleUrls: ['./mis-ofertas.component.css']
})
export class MisOfertasComponent implements OnInit {

  private negocios: any[] = [];

  constructor(private listarService: ListarService,
    private eliminarService: EliminarService,
    private dialog: MatDialog,
    private auth: AuthServiceManual) { }

  ngOnInit() {
    this.getListarNegociosAdmin();
  }

  getListarNegociosAdmin(): any {
    this.listarService.getNegociosAdmin(this.auth.getIdAdmin()).subscribe((data) => {
      data.forEach((item) => {
        console.log(item);
        this.listarService.getOfertasPorIdNegocio(item.idnegocio).subscribe((data2) => {
          item.oferta = data2;
          this.negocios.push(item);
        });
      });
    });
    console.log(this.negocios);
  }

  deleteEliminarOfert(body: string): any {
    this.eliminarService.deleteEliminarOferta(body).subscribe((data) => {
      console.log(data);
    });
    this.negocios.length = 0;
    this.getListarNegociosAdmin();
  }

  eliminarOferta(id: string, idnegocio: string){
    let x = confirm("¿Está seguro de eliminar la oferta?");
    if(x){
      console.log(id);
      let body = {
        "oferta": [
          {
            "id": id,
            "parametro": idnegocio
          }
        ]
      };
      this.deleteEliminarOfert(JSON.stringify(body));
    } else {
      console.log('Cancelado el borrado.');
    }
  }


  openDialogEditar(body: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    dialogConfig.height = '40%';
    dialogConfig.hasBackdrop = true;
    dialogConfig.position = {
      'top': '0%',
      'right': '25px',
      'bottom': '10%',
      'left': '20%'
    };

    dialogConfig.data = {
      descuento: body.descuento,
      detalle: body.detalle,
      fecha_fin: body.fecha_fin,
      fecha_inicio: body.fecha_inicio,
      foto: body.foto,
      id: body.id,
      idnegocio: body.idnegocio,
      producto: body.producto,
      valor: body.valor,
    };
    //this.dialog.open(EditarNegoComponent, dialogConfig);
    const dialogRef = this.dialog.open(EditarOfertaComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) =>  {
      console.log("Se cerró esa vuelta. y trajo: "+data);
      if(data){      
        this.negocios.length = 0;
        this.getListarNegociosAdmin();
      }
    }
    );    
  }

  editarOferta(body: string){
    this.openDialogEditar(body);
  }

  listarOfertas() {
    this.getListarNegociosAdmin();
  }
}
