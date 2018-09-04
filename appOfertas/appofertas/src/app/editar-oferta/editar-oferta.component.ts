import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { EditarService } from '../serviciosEditar/editar.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';


@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.component.html',
  styleUrls: ['./editar-oferta.component.css']
})
export class EditarOfertaComponent implements OnInit {

  private idnegocio: string = '';
  private producto: string;
  private id: string;
  private descuento: string;
  private valor: string;
  private fecha_inicio: string;
  private fecha_fin: string;
  private detalle: string;
  private foto: string;
  
  private edited: boolean = false;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  private porcentaje: number;
  downloadURL: Observable<string>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<EditarOfertaComponent>,
  private editarService: EditarService,
  private afStorage: AngularFireStorage) { 
    this.producto = data.producto;
    this.detalle = data.detalle;
    this.valor = data.valor;
    this.descuento = data.descuento;
    this.foto = data.foto;
    this.idnegocio = data.idnegocio;
    this.fecha_inicio = data.fecha_inicio;
    this.fecha_fin = data.fecha_fin;
    this.id = data.id;
  }

  ngOnInit() {
  }

  putEditarOferta(body: string): any {
    this.editarService.putEditarOferta(body).subscribe((data) => {
      alert('Oferta actualizada correctamente.');
      this.edited = true;
      this.cerrarDialog();
    });
  }

  
  cerrarDialog(){
    this.dialogRef.close(this.edited);
  }

  editarOferta() {
    let body = {
      "oferta": [
        {
          "id" : this.id,
          "producto": this.producto,
          "detalle": this.detalle,
          "valor": this.valor,
          "descuento": this.descuento,
          "foto": this.foto,
          "idnegocio": this.idnegocio,
          "fecha_inicio": this.fecha_inicio,
          "fecha_fin": this.fecha_fin,
          "parametro" : this.idnegocio
        }
      ]
    };
    this.putEditarOferta(JSON.stringify(body));
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
