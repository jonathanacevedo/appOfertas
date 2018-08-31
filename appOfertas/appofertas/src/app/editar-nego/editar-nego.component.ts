import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { EditarService } from '../serviciosEditar/editar.service';



@Component({
  selector: 'app-editar-nego',
  templateUrl: './editar-nego.component.html',
  styleUrls: ['./editar-nego.component.css']
})
export class EditarNegoComponent implements OnInit {

  private nit: string ='';
  private nombre: string = '';
  private email: string ='';
  private ciudad: string = '';
  private telefono: string ='';
  private tipo: string = '';
  private direccion: string ='';
  private foto: string = '';
  private detalle: string = '';
  private idnegocio: string = '';

  private idadmin: string ='';


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<EditarNegoComponent>,
              private editarService: EditarService) {
    this.nombre = data.nombre;
    this.nit = data.nit;
    this.email = data.email;
    this.ciudad = data.ciudad;
    this.telefono = data.telefono;
    this.tipo = data.tipo;
    this.direccion = data.direccion;
    this.foto = data.foto;
    this.detalle = data.detalle;   
    this.idadmin = data.idadmin; 
    this.idnegocio = data.idnegocio;
   }

  ngOnInit() {
  }

  putEditarNegocio(body: string): any {
    this.editarService.putEditarNegocio(body).subscribe((data) => {
      alert('Negocio actualizado correctamente.');
      this.cerrarDialog();
      console.log('Datos devueltos del servicio: ' + data);
    });
  }


  cerrarDialog(){
    this.dialogRef.close();
  }

  editarNegocio() { //este body está en string.
    let body = {
      "negocio": [
        {
          "nit" : this.nit,
          "idnegocio" : this.idnegocio,
          "nombre" : this.nombre,
          "email" : this.email,
          "idadmin" : this.idadmin,
          "ciudad" : this.ciudad,
          "telefono" : this.telefono,
          "tipo" : this.tipo,
          "direccion" : this.direccion,
          "foto" : this.foto,
          "detalle" : this.detalle
        }
      ]
    };
    this.putEditarNegocio(JSON.stringify(body));
  }
}
