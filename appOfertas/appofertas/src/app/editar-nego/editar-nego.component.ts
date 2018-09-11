import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { EditarService } from '../serviciosEditar/editar.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';


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

  private latitud: string = '';
  private longitud: string = '';

  private idadmin: string ='';

  private edited: boolean = false;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  private porcentaje: number;
  downloadURL: Observable<string>;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<EditarNegoComponent>,
              private editarService: EditarService,
              private afStorage: AngularFireStorage) {
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
    this.latitud = data.latitud;
    this.longitud = data.longitud;
   }

  ngOnInit() {
  }

  putEditarNegocio(body: string): any {
    this.editarService.putEditarNegocio(body).subscribe((data) => {
      alert('Negocio actualizado correctamente.');
      this.edited=true;
      this.cerrarDialog();
    });
  }


  cerrarDialog(){
    this.dialogRef.close(this.edited);
  }

  editarNegocio(lati: string, long: string) { //este body está en string.
    if(lati=='' && long==''){
      console.log('lat y lon vacios, valores sin cambio.');
    } else {
      this.latitud = lati;
      this.longitud = long;
    }
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
          "detalle" : this.detalle,
          "latitud" : this.latitud,
          "longitud" : this.longitud
        }
      ]
    };
    console.log(JSON.stringify(body));
    this.putEditarNegocio(JSON.stringify(body));
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task.then((up) => {
      this.porcentaje = up.bytesTransferred / up.totalBytes;
      this.ref.getDownloadURL().subscribe((url) => {
        this.foto = url;
      })
    });
  }
}
