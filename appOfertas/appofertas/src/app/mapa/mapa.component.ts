import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { ListarService } from '../serviciosListar/listar.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { VerNegocioComponent } from '../ver-negocio/ver-negocio.component';
import { FiltradoComponent } from '../filtrado/filtrado.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @ViewChild('scrolling') scrolling: ElementRef;

  private ofertas: any[] = [];
  private negocios: any[] = [];
  private nombreNegocio: string = 'Todas';
  private filtros: any[] = [];

  private lat: number = 6.2518400;
  private lng: number = -75.5635900;
  private zoom: number = 12;

  fecha: Date = new Date();

  dia: number;
  mes: number;
  ano: number;

  map: any;
  constructor(private listar: ListarService, private dialog: MatDialog, private elementRef: ElementRef) { }

  ngOnInit() {
    this.getListarOfertasNegocios();
    //this.getListaOfertas();
    this.dia = this.fecha.getDate();
    this.mes = this.fecha.getMonth() + 1;
    this.ano = this.fecha.getFullYear();
  }

  mostrarTodas() {
    this.scrolling.nativeElement.scrollTo(0, 0);
    this.nombreNegocio = 'Todas';
    this.getListarOfertasNegocios();
  }

  apuntar(lat: number, lon: number) {
    this.lat = lat;
    this.lng = lon;
    this.zoom = 14;
  }

  listarOfertas(idnegocio: string, nombre: string) {
    this.nombreNegocio = nombre;
    this.getListarOfertasNegocio(idnegocio);
    this.scrolling.nativeElement.scrollTo(0, 0);
  }

  verNegocio(idnegocio: string) {
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
      idnegocio: idnegocio
    };
    this.dialog.open(VerNegocioComponent, dialogConfig);
  }

  getListarOfertasNegocios() {
    this.listar.getNegocios().subscribe((data) => {
      this.ofertas = [];
      data.forEach((item) => {
        this.listar.getOfertasPorIdNegocio(item.idnegocio).subscribe((data2) => {
          if (data2.length > 0) {
            data2.forEach((oferta) => {
              if (this.compararFechas(oferta.fecha_fin)) {  //true: activo, false: inactivo
                this.negocios.push(item);
                this.ofertas.push(oferta);
              }
            });
          }
        });
      });
    });
  }

  filtrarNegocios(filtros: any) {
    this.negocios = [];
    this.ofertas = [];
    this.listar.getNegocios().subscribe((data) => {
      data.forEach((negocios) => {
        for (let i = 0; i < filtros[0].length; i++) {
          if (negocios.tipo == filtros[0][i] || filtros[0] == 'Todas') {
            this.listar.getOfertasPorIdNegocio(negocios.idnegocio).subscribe((data2) => {
              if (data2.length > 0) {
                data2.forEach((oferta) => {
                  for (let j = 0; j < filtros[1].length; j++) {
                    if (oferta.tipo == filtros[1][j] || filtros[1] == 'Todas') {
                      if (this.compararFechas(oferta.fecha_fin)) {  //true: activo
                        this.negocios.push(negocios);
                        this.ofertas.push(oferta);
                      }
                    }
                  }
                });
              }
            });
          }
        }
      });
    });
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

  getListarOfertasNegocio(idnegocio: string): void {
    this.listar.getOfertasPorIdNegocio(idnegocio).subscribe((data) => {
      this.ofertas = [];
      data.forEach((ofertaNegocio) => {
        this.ofertas.push(ofertaNegocio)
      });
    });
  }

  getListarNegocios(): void {
    this.listar.getNegocios().subscribe((data) => {
      console.log(data)
      data.forEach((negocio) => {
        this.negocios.push(negocio)
      });
    });
  }

  getListaOfertas(): void {
    this.listar.getOfertas().subscribe(data => {
      this.ofertas = [];
      data.forEach(element => {
        this.ofertas.push(element)
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
    const dialogRef = this.dialog.open(FiltradoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      this.filtros = data;
      console.log(data);
      if (this.filtros[0].length == 0 || this.filtros[1].length == 0) {
        this.ofertas = [];
        this.getListarOfertasNegocios();
      } else {
        this.filtrarNegocios(this.filtros);
      }
    });
  }
}
