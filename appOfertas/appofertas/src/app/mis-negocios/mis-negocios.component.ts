import { Component, OnInit } from '@angular/core';
import { ListarService } from '../serviciosListar/listar.service';
import { AuthServiceManual } from '../authService/auth.service';
import { EliminarService } from '../serviciosEliminar/eliminar.service';
import { EditarService } from '../serviciosEditar/editar.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { RegistrarNegocioComponent } from '../registrar-negocio/registrar-negocio.component';
import { EditarNegoComponent } from '../editar-nego/editar-nego.component';



@Component({
  selector: 'app-mis-negocios',
  templateUrl: './mis-negocios.component.html',
  styleUrls: ['./mis-negocios.component.css']
})
export class MisNegociosComponent implements OnInit {

  private negocios: any[] = [];
  private idnegocio: any;

  private activarVista: boolean = false;

  constructor(private listarService: ListarService,
    private auth: AuthServiceManual,
    private eliminarService: EliminarService,
    private editarService: EditarService,
    private dialog: MatDialog) {

  }

  ngOnInit() {
    this.getNegociosAdmin(this.auth.getIdAdmin());
  }

  getNegociosAdmin(idAdmin: string): void {
    this.listarService.getNegociosAdmin(idAdmin).subscribe((data) => {
      data.forEach((item) => {
        this.negocios.push(item);
      });
      this.activarVista = true;
      console.log(data);
    });
  }

  deleteEliminarNegocio(body: string): void {
    this.eliminarService.deleteEliminarNegocio(body).subscribe((data) => {
      console.log('Datos devueltos del eliminar negocio: ' + data);
    });
  }

  putEditarNegocio(body: string): any {
    this.editarService.putEditarNegocio(body).subscribe((data) => {
      console.log('Datos devueltos del servicio: ' + data)
    });
  }

  eliminarNegocio(idNegocio: string) {
    console.log(idNegocio);
    let body = {
      "negocio": [
        {
          "idnegocio": idNegocio,
          "parametro": this.auth.getIdAdmin()
        }
      ]
    };
    this.deleteEliminarNegocio(JSON.stringify(body));
    //console.log('El body que esta mandando es: '+JSON.stringify(body));
    alert('Eliminando el negocio ' + idNegocio);
  }

  openDialog(body: any) {
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
      nombre: body.nombre,
      ciudad: body.ciudad,
      detalle: body.detalle,
      direccion: body.direccion,
      email: body.email,
      foto: body.foto,
      idadmin: body.idadmin,
      idnegocio: body.idnegocio,
      nit: body.nit,
      telefono: body.telefono,
      tipo: body.tipo,
    };
    //this.dialog.open(EditarNegoComponent, dialogConfig);
    const dialogRef = this.dialog.open(EditarNegoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() =>  {
      console.log("Se cerró esa vuelta.")
      this.negocios = [];
      this.getNegociosAdmin(this.auth.getIdAdmin());
    }
    );    
  }

  editarNegocio(body: string) {    //este body está en string.
    this.openDialog(body);
  }
}