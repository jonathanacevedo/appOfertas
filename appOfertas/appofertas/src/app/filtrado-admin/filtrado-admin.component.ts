import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-filtrado-admin',
  templateUrl: './filtrado-admin.component.html',
  styleUrls: ['./filtrado-admin.component.css']
})
export class FiltradoAdminComponent implements OnInit {

  private Todas1: any;

  private Vigentes: any;
  private Vencidas: any;

  private Todas2: any;
  private Descuento: any;
  private Promocion: any;

  private filtro1: any = '';
  private filtro2: any = '';
  private filtros: any []= [];

  constructor(private dialogRef: MatDialogRef<FiltradoAdminComponent>) { }


  ngOnInit() {
  }

  aplicarFiltros(){
    this.filtro1= '';
    this.filtro2= '';
      this.Todas1==true ? this.filtro1 ='Todas' : null;
      this.Vigentes==true ? this.filtro1 = 'Vigentes' : null;
      this.Vencidas==true ? this.filtro1 = 'Vencidas' : null;

      this.Todas2==true ? this.filtro2 ='Todas' : null;
      this.Descuento==true ? this.filtro2 = 'Descuento' : null;
      this.Promocion==true ? this.filtro2 = 'Promocion' : null;

      this.filtros[0] = this.filtro1;
      this.filtros[1] = this.filtro2;
    this.dialogRef.close(this.filtros);
  }     

  cerrarDialog(){
    this.dialogRef.close();
  }

}
