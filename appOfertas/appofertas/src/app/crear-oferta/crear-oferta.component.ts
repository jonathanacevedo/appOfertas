import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { RegistrarPersonaService } from '../serviciosRegistro/registrar.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.component.html',
  styleUrls: ['./crear-oferta.component.css']
})
export class CrearOfertaComponent implements OnInit {

  private idnegocio: string = '';
  private nombre: string = '';
  private producto: string = '';
  private descuento: string = '';
  private valor: string = '';
  private fecha_inicio: string = '';
  private fecha_fin: string = '';
  private detalle: string = '';
  private foto: string = '';
  private latitud: string = '';
  private longitud: string = '';
  private tipo: string = '';

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  private porcentaje: number;
  downloadURL: Observable<string>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<CrearOfertaComponent>,
  private registrarService: RegistrarPersonaService,
  private afStorage: AngularFireStorage) { 

    this.idnegocio = data.idnegocio;
    this.nombre = data.nombre;
    this.latitud = data.latitud;
    this.longitud = data.longitud;
  }

  ngOnInit() {
  }

  postRegistrarOferta(body: string): void {
    this.registrarService.registrarOferta(body).subscribe((data) => {
      alert('Oferta creada exitosamente para el negocio '+this.nombre);
      this.cerrarDialog();
    });
  }

  registrarOferta() {
    let body = {
      "oferta" : [
        {
          "producto" : this.producto,
          "detalle" : this.detalle,
          "valor" : this.valor,
          "descuento" : this.descuento,
          "foto" : this.foto,
          "idnegocio" : this.idnegocio,
          "fecha_inicio" : this.fecha_inicio,
          "fecha_fin" : this.fecha_fin,
          "latitud" : this.latitud,
          "longitud" : this.longitud,
          "tipo" : this.tipo
        }
      ]
    };
    console.log('El body para enviar es: '+JSON.stringify(body));
    this.postRegistrarOferta(JSON.stringify(body));
  }

  cerrarDialog(){
    this.dialogRef.close();
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
