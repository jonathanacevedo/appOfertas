import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { ListarService } from '../serviciosListar/listar.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { VerNegocioComponent } from '../ver-negocio/ver-negocio.component';
import { FiltradoComponent } from '../filtrado/filtrado.component';
import { isFulfilled } from '../../../node_modules/@types/q';


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

  private lat: number = 6.2215477;
  private lng: number = -75.5722723;
  private zoom: number = 12;

  private opciones: string[] = [];

  private fecha: Date = new Date();

  private dia: number;
  private mes: number;
  private ano: number;


  private map: any;
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
                    if (oferta.tipo == filtros[1][j] || oferta.tipo == filtros[3] ||filtros[1] == 'Todas') {
                      if (filtros[1][j] == 'Descuento') {
                        let valor = filtros[2];
                        if (oferta.descuento == valor) {
                          if (this.compararFechas(oferta.fecha_fin)) {  //true: activo
                            this.negocios.push(negocios);
                            this.ofertas.push(oferta);
                          }
                        }
                      } else if (filtros[1][j] == 'Promocion' && filtros[3].length > 0) {
                        console.log('Comparando '+oferta.tipo+' y '+filtros[3]);
                        if (oferta.descuento == filtros[3] || oferta.tipo == filtros[3]) {
                          this.negocios.push(negocios);
                          this.ofertas.push(oferta);
                        }
                      } else {
                        if (this.compararFechas(oferta.fecha_fin)) {  //true: activo
                          this.negocios.push(negocios);
                          this.ofertas.push(oferta);
                        }
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

  getOpciones() {
    this.ofertas.forEach((oferta) => {
      if (oferta.tipo == 'Promocion') {
        if (!this.opciones.includes(oferta.descuento)) {
          this.opciones.push(oferta.descuento);
        }
      } else if (oferta.tipo == 'Hora Feliz') {
        if (!this.opciones.includes('Hora Feliz')) {
          this.opciones.push('Hora Feliz');
        }
      } else if (oferta.tipo == 'Cumpleaños'){
        if (!this.opciones.includes('Cumpleaños')) {
          this.opciones.push('Cumpleaños');
        }
      }
    });
  }

  mostrarFiltros() {
    this.getOpciones();
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
      opciones: this.opciones
    };
    const dialogRef = this.dialog.open(FiltradoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data !== 'vacio') {
        this.filtros = data;
        if (this.filtros[0].length !== 0 || this.filtros[1].length !== 0) {
          this.filtrarNegocios(this.filtros);
        }
      }
    });
  }
}
