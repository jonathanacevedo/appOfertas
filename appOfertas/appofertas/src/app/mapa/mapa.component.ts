import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { ListarService } from '../serviciosListar/listar.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { VerNegocioComponent } from '../ver-negocio/ver-negocio.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

@ViewChild('scrolling') scrolling: ElementRef;

  private ofertas : any[] = [];
  private negocios: any[] = [];
  private nombreNegocio : string = 'Todas';

  private lat: number = 6.2518400;
  private lng: number = -75.5635900;
  private zoom: number = 12;

  map: any;
  constructor(private listar: ListarService, private dialog: MatDialog, private elementRef: ElementRef) { }

  ngOnInit() {
    this.getListarOfertasNegocios();
    this.getListaOfertas();
    //this.getListarNegocios();
  }

  mostrarTodas(){
    this.scrolling.nativeElement.scrollTo(0, 0);
    this.nombreNegocio = 'Todas';
    this.getListaOfertas();
  }

  apuntar(lat: number, lon: number){
    this.lat = lat;
    this.lng = lon;
    this.zoom = 14;
  }

  listarOfertas(idnegocio: string, nombre: string){
    this.nombreNegocio = nombre;
    this.getListarOfertasNegocio(idnegocio);
    this.scrolling.nativeElement.scrollTo(0, 0);
  }

  verNegocio(idnegocio: string){
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

  getListarOfertasNegocios(): any {
    this.listar.getNegocios().subscribe((data) => {
      data.forEach((item) => {
        this.listar.getOfertasPorIdNegocio(item.idnegocio).subscribe((data2) => {
          if(data2.length > 0){
            this.negocios.push(item);
          } else {
          }
        });
      });
    });
  }

  getListarOfertasNegocio(idnegocio: string): void {
    this.listar.getOfertasPorIdNegocio(idnegocio).subscribe((data) => {
      console.log(data);
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
}
