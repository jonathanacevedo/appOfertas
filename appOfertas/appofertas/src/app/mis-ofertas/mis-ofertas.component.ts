import { Component, OnInit } from '@angular/core';
import { ListarService } from '../serviciosListar/listar.service';
import { EliminarService } from '../serviciosEliminar/eliminar.service';
import { AuthServiceManual } from '../authService/auth.service';
import { EditarOfertaComponent } from '../editar-oferta/editar-oferta.component';
import { MatCard } from '@angular/material/card';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { FiltradoAdminComponent } from '../filtrado-admin/filtrado-admin.component';



@Component({
  selector: 'app-mis-ofertas',
  templateUrl: './mis-ofertas.component.html',
  styleUrls: ['./mis-ofertas.component.css']
})
export class MisOfertasComponent implements OnInit {

  private negocios: any[] = [];
  private filtros: any;

  fecha: Date = new Date();

  dia: number;
  mes: number;
  ano: number;

  ofertasValidas: any[] = [];

  constructor(private listarService: ListarService,
    private eliminarService: EliminarService,
    private dialog: MatDialog,
    private auth: AuthServiceManual) { }

  ngOnInit() {
    this.getListarNegociosAdmin();
    this.dia = this.fecha.getDate();
    this.mes = this.fecha.getMonth() + 1;
    this.ano = this.fecha.getFullYear();
  }

  getListarNegociosAdmin(): any {
    this.listarService.getNegociosAdmin(this.auth.getIdAdmin()).subscribe((data) => {
      data.forEach((item) => {
        this.listarService.getOfertasPorIdNegocio(item.idnegocio).subscribe((data2) => {
          item.oferta = data2;
          this.negocios.push(item);
        });
      });
    });
  }

  deleteEliminarOfert(body: string): any {
    this.eliminarService.deleteEliminarOferta(body).subscribe((data) => {
      console.log(data);
    });
    this.negocios.length = 0;
    this.getListarNegociosAdmin();
  }

  eliminarOferta(id: string, idnegocio: string) {
    let x = confirm("¿Está seguro de eliminar la oferta?");
    if (x) {
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
      latitud: body.latitud,
      longitud: body.longitud,
      tipo: body.tipo
    };
    const dialogRef = this.dialog.open(EditarOfertaComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log("Se cerró esa vuelta. y trajo: " + data);
      if (data) {
        this.negocios = [];
        this.getListarNegociosAdmin();
      }
    }
    );
  }

  editarOferta(body: string) {
    this.openDialogEditar(body);
  }

  listarOfertas() {
    this.getListarNegociosAdmin();
  }

  compararFechas(fecha: any): boolean {
    let fec: number = fecha.split("/");
    let dia = +fec[0];
    let mes = +fec[1];
    let ano = +fec[2];
    if (ano > this.ano) {
      return true;
    } else if (ano == this.ano && mes > this.mes) {
      return true;
    } else if (mes == this.mes && dia >= this.dia) {
      return true;
    } else {
      return false;
    }
  }

  filtrarOfertas(filtros: any): any {
    this.negocios = [];
    this.listarService.getNegociosAdmin(this.auth.getIdAdmin()).subscribe((data) => {
      data.forEach((item) => {
        this.listarService.getOfertasPorIdNegocio(item.idnegocio).subscribe((ofertas) => {
          ofertas.forEach((oferta) => {
            if (filtros[0] == 'Vigentes') {
              console.log('filtros vigentes...');
              if (this.compararFechas(oferta.fecha_fin)) {
                if(oferta.tipo == filtros[1] || filtros[1]=='Todas'){
                  this.ofertasValidas.push(oferta);
                }
              }
            } else if(filtros[0] == 'Vencidas'){
              if (!this.compararFechas(oferta.fecha_fin)) {
                if(oferta.tipo == filtros[1] || filtros[1]=='Todas'){
                  this.ofertasValidas.push(oferta);
                }
              }
            } else {
              this.ofertasValidas.push(oferta);
            }
          });
        item.oferta = this.ofertasValidas;
        this.negocios.push(item);
        this.ofertasValidas = [];
        });
      });
    });
  }

  mostrarFiltros() {
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

    // dialogConfig.data = {
    //   idnegocio: ''
    // };
    const dialogRef = this.dialog.open(FiltradoAdminComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      this.filtros = data;
      console.log(data);
      if (this.filtros.length !== 0) {
        this.filtrarOfertas(this.filtros);
      }
    });
  }
}
