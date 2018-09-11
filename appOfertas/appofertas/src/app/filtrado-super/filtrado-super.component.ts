import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-filtrado-super',
  templateUrl: './filtrado-super.component.html',
  styleUrls: ['./filtrado-super.component.css']
})
export class FiltradoSuperComponent implements OnInit {


  private Todas1: any;
  private Vigentes: any;
  private Vencidas: any;
  private filtro: string;



  constructor(private dialogRef: MatDialogRef<FiltradoSuperComponent>) { }

  ngOnInit() {
  }

  aplicarFiltros() {
    this.filtro = '';
    this.Todas1 == true ? this.filtro = 'Todas' : null;
    this.Vigentes == true ? this.filtro = 'Vigentes' : null;
    this.Vencidas == true ? this.filtro = 'Vencidas' : null;

    this.dialogRef.close(this.filtro);
  }

  cerrarDialog() {
    this.dialogRef.close('');
  }

}
