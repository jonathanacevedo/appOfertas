import { Component, OnInit } from '@angular/core';
import { ListarService } from '../serviciosListar/listar.service';
import { EditarService } from '../serviciosEditar/editar.service';
import { EliminarService } from '../serviciosEliminar/eliminar.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { VerfotoComponent } from '../verfoto/verfoto.component';
import { FiltradoSuperComponent } from '../filtrado-super/filtrado-super.component';

@Component({
  selector: 'app-superofertas',
  templateUrl: './superofertas.component.html',
  styleUrls: ['./superofertas.component.css']
})
export class SuperofertasComponent implements OnInit {

  private filtros: string;
  private ofertas: any[] = [];

  fecha: Date = new Date();

  private dia: number;
  private mes: number;
  private ano: number;

  constructor(private listar: ListarService,
    private editarService: EditarService,
    private eliminarService: EliminarService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getListarOfertas();
    this.dia = this.fecha.getDate();
    this.mes = this.fecha.getMonth() + 1;
    this.ano = this.fecha.getFullYear();
  }

  getListarOfertas(): void {
    this.listar.getOfertas().subscribe((data) => {
      data.forEach((oferta) => {
        this.listar.getNegocioPorId(oferta.idnegocio).subscribe((data) => {
          data.negocio.forEach((negocio) => {
            oferta.negocio = negocio.nombre
          });
        });
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
          "id": oferta.id,
          "producto": oferta.producto,
          "detalle": oferta.detalle,
          "valor": oferta.valor,
          "descuento": oferta.descuento,
          "foto": oferta.foto,
          "idnegocio": oferta.idnegocio,
          "fecha_inicio": oferta.fecha_inicio,
          "fecha_fin": oferta.fecha_fin,
          "tipo" : oferta.tipo,
          "parametro": oferta.idnegocio
        }
      ]
    };
    this.putEditarOferta(JSON.stringify(body));
  }

  eliminarOferta(id: string, idnegocio: string, producto: string) {
    let confirmar = confirm('Esta seguro de eliminar la oferta de ' + producto + '?');
    if (confirmar) {
      let body = {
        "oferta": [
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
    this.ofertas = [];
    this.listar.getOfertas().subscribe((data) => {
      data.forEach((oferta) => {
        this.listar.getNegocioPorId(oferta.idnegocio).subscribe((data) => {
          data.negocio.forEach((negocio) => {
            oferta.negocio = negocio.nombre
          });
        });
        if (filtros == 'Vigentes') {
          if (this.compararFechas(oferta.fecha_fin)) {
            this.ofertas.push(oferta);
          }
        } else if(filtros == 'Vencidas') {
          if (!this.compararFechas(oferta.fecha_fin)) {
            this.ofertas.push(oferta);
          }
        } else {
          this.ofertas.push(oferta);
        }
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
    const dialogRef = this.dialog.open(FiltradoSuperComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      this.filtros = data;
      console.log(data);
      if (this.filtros !== '') {
        this.filtrarOfertas(this.filtros);
      }
    });
  }

}