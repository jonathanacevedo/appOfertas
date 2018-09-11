import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {
  private tipoNegocio: any[] = [];
  private tipoOferta: string = '';

  private filtroNegocio: any[] = [];
  private filtroOferta: any[] = [];
  private filtroValor: any = '1/100';
  private filtros: any[] = [];


  private Restaurante: boolean = false;
  private Hotel: boolean = false;
  private Bar: boolean = false;
  private Almacen: boolean = false;
  private Otro: boolean = false;

  private Descuento: boolean = false;
  private Promocion: boolean = false;

  private v10: boolean = false;
  private v1030: boolean = false;
  private v3050: boolean = false;
  private v5080: boolean = false;
  private v80: boolean = false;

  private todas1: boolean = false;
  private todas2: boolean = false;
  private todas3: boolean = false;

  private prueba: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FiltradoComponent>) {
  }

  ngOnInit() {

  }

  aplicarFiltros() {
    this.filtroNegocio = [];
    this.todas1 == true ? this.filtroNegocio.push('Todas') : null;
    this.Restaurante == true ? this.filtroNegocio.push('Restaurante') : null;
    this.Hotel == true ? this.filtroNegocio.push('Hotel') : null;
    this.Bar == true ? this.filtroNegocio.push('Bar') : null;
    this.Almacen == true ? this.filtroNegocio.push('Almacen') : null;
    this.Otro == true ? this.filtroNegocio.push('Otro') : null;

    this.filtroOferta = [];
    this.todas2 == true ? this.filtroOferta.push('Todas') : null;
    this.Descuento == true ? this.filtroOferta.push('Descuento') : null;
    this.Promocion == true ? this.filtroOferta.push('Promocion') : null;

    this.todas3 == true ? this.filtroValor = 'Todas' : null;
    this.v10 == true ? this.filtroValor = '1/10' : null;
    this.v1030 == true ? this.filtroValor = '10/30' : null;
    this.v3050 == true ? this.filtroValor = '30/50' : null;
    this.v5080 == true ? this.filtroValor = '50/80' : null;
    this.v80 == true ? this.filtroValor = '80/100' : null;

    this.filtros[0] = this.filtroNegocio;
    this.filtros[1] = this.filtroOferta;
    this.filtros[2] = this.filtroValor;
    this.dialogRef.close(this.filtros);
  }

  cerrarDialog() {
    this.dialogRef.close('');
  }
}
