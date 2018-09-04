import { Component, OnInit } from '@angular/core';
import { ListarService } from '../serviciosListar/listar.service';
import { AuthServiceManual } from '../authService/auth.service';
import { EliminarService } from '../serviciosEliminar/eliminar.service';
import { EditarService } from '../serviciosEditar/editar.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { RegistrarNegocioComponent } from '../registrar-negocio/registrar-negocio.component';
import { EditarNegoComponent } from '../editar-nego/editar-nego.component';
import { CrearOfertaComponent } from '../crear-oferta/crear-oferta.component';


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
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getNegociosAdmin(this.auth.getIdAdmin());
  }

  getNegociosAdmin(idAdmin: string): void {
    this.listarService.getNegociosAdmin(idAdmin).subscribe((data) => {
      data.forEach((item) => {
        this.negocios.push(item);
      });
      this.activarVista = true;
    });
  }



  deleteEliminarNegocio(body: string, nombre: string): void {
    this.eliminarService.deleteEliminarNegocio(body).subscribe((data) => {
      console.log('Datos devueltos del eliminar negocio: ' + data);
    });
    alert('Negocio eliminado '+nombre+' correctamente.');
    this.negocios = [];
    this.getNegociosAdmin(this.auth.getIdAdmin());

  }

  putEditarNegocio(body: string): any {
    this.editarService.putEditarNegocio(body).subscribe((data) => {
      console.log('Datos devueltos del servicio: ' + data)
    });
  }

  eliminarNegocio(idNegocio: string, nombre: string) {
    let x = confirm("¿Está seguro de eliminar el negocio "+nombre+"?");
    if(x){
      console.log(idNegocio);
      let body = {
        "negocio": [
          {
            "idnegocio": idNegocio,
            "parametro": this.auth.getIdAdmin()
          }
        ]
      };
      this.deleteEliminarNegocio(JSON.stringify(body), nombre);
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
    // dialogConfig.position = {
    //   'top': '0%',
    //   'right': '25px',
    //   'bottom': '10%',
    //   'left': '20%'
    // };

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
      latitud: body.latitud,
      longitud: body.longitud
    };
    const dialogRef = this.dialog.open(EditarNegoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) =>  {
      console.log("Se cerró esa vuelta.")
      if(data){
      this.negocios = [];
      this.getNegociosAdmin(this.auth.getIdAdmin());
      }
    }
    );    
  }

  openDialogOferta(idNegocio: string, nombre: string, latitud: string, longitud: string) {
    console.log(nombre+', '+latitud+' - '+longitud);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    dialogConfig.height = '40%';
    dialogConfig.hasBackdrop = true;
    // dialogConfig.position = {
    //   'right': '25px',
    //   'left': '20%'
    // };
    dialogConfig.data = {
      idnegocio: idNegocio,
      nombre: nombre,
      latitud: latitud,
      longitud: longitud
    };
    this.dialog.open(CrearOfertaComponent, dialogConfig);
  }

  editarNegocio(body: string) {    //este body está en string.
    this.openDialogEditar(body);
  }

}
