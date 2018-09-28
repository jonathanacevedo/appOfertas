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
  private filtroValores: any[] = [];
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

  private valorDescuento: string = '100';
  private valorPromocion: string = '';

  private opciones: string [] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FiltradoComponent>) {
      this.opciones = data.opciones;
  }

  ngOnInit() {
    this.opciones.sort();
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

    this.filtros[0] = this.filtroNegocio;
    this.filtros[1] = this.filtroOferta;
    if (this.valorDescuento == 'Todos') {
      this.filtros[2] = '0-100';
    } else {
      this.filtros[2] = this.valorDescuento;
    }
    if (this.valorPromocion == 'Todas') {
      this.filtros[3] = '';
    } else {    
      this.filtros[3] = this.valorPromocion;
    }
    this.dialogRef.close(this.filtros);
  }

  cerrarDialog() {
    this.dialogRef.close('vacio');
  }
}
