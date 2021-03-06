import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { EditarService } from '../serviciosEditar/editar.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-nego',
  templateUrl: './editar-nego.component.html',
  styleUrls: ['./editar-nego.component.css']
})
export class EditarNegoComponent implements OnInit {

  private activarValidacion: boolean = false;

  private idnegocio: string = '';

  private latitud: string = '';
  private longitud: string = '';
  private foto: string = '';
  private idadmin: string = '';

  private formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    nit: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    detalle: new FormControl('', Validators.required)
  });

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

    this.idadmin = data.idadmin;
    this.idnegocio = data.idnegocio;
    this.latitud = data.latitud;
    this.longitud = data.longitud;
    this.foto = data.foto;

    this.formulario.get('nombre').setValue(data.nombre);
    this.formulario.get('nit').setValue(data.nit);
    this.formulario.get('direccion').setValue(data.direccion);
    this.formulario.get('email').setValue(data.email);
    this.formulario.get('telefono').setValue(data.telefono);
    this.formulario.get('ciudad').setValue(data.ciudad);
    this.formulario.get('tipo').setValue(data.tipo);
    this.formulario.get('detalle').setValue(data.detalle);

  }

  ngOnInit() {
  }

  obtenerMensajeErrorNombre(){   
    let nombre = this.formulario.get('nombre');
    let error = nombre.hasError('required') ? 'Nombre vacio' : '';
    return error;
  }

  obtenerMensajeErrorNit(){   
    let nit = this.formulario.get('nit');
    let error = nit.hasError('required') ? 'Nit vacio' : '';
    return error;
  }

  obtenerMensajeErrorDireccion(){   
    let direccion = this.formulario.get('direccion');
    let error = direccion.hasError('required') ? 'Direccion vacia' : '';
    return error;
  }
  obtenerMensajeErrorEmail(){   
    let correo = this.formulario.get('email');
    let error = correo.hasError('required') ? 'Correo vacio' : 
    correo.hasError('email') ? 'Correo invalido' : '';
    return error;
  }
  obtenerMensajeErrorTelefono(){   
    let telefono = this.formulario.get('telefono');
    let error = telefono.hasError('required') ? 'Telefono vacio' : '';
    return error;
  }
  obtenerMensajeErrorCiudad(){   
    let ciudad = this.formulario.get('ciudad');
    let error = ciudad.hasError('required') ? 'Ciudad vacio' : '';
    return error;
  }
  obtenerMensajeErrorTipo(){   
    let tipo = this.formulario.get('tipo');
    let error = tipo.hasError('required') ? 'tipo vacio' : '';
    return error;
  }
  obtenerMensajeErrorDetalle(){   
    let detalle = this.formulario.get('detalle');
    let error = detalle.hasError('required') ? 'detalle vacio' : '';
    return error;
  }

  putEditarNegocio(body: string): any {
    this.activarValidacion = false;
    this.editarService.putEditarNegocio(body).subscribe((data) => {
      alert('Negocio actualizado correctamente.');
      this.edited = true;
      this.cerrarDialog();
    });
  }


  cerrarDialog(){
    this.dialogRef.close(this.edited);
  }

  camposSonInvalidos(){
    let nit = this.formulario.get('nit');
    let nombre = this.formulario.get('nombre');
    let direccion = this.formulario.get('direccion');
    let correo = this.formulario.get('email');
    let telefono = this.formulario.get('telefono');
    let ciudad = this.formulario.get('ciudad');
    let tipo = this.formulario.get('tipo');
    let detalle = this.formulario.get('detalle');

    let esNitVacio = nit.hasError('required') ? true : false;
    let esNombreVacio = nombre.hasError('required') ? true : false;
    let esDireccionVacio = direccion.hasError('required') ? true : false;
    let esCorreoVacio = correo.hasError('required') ? true : false;
    let noEsCorreo = correo.hasError('email') ? true : false;
    let esTelefonoVacio = telefono.hasError('required') ? true : false;
    let esCiuidadVacio = ciudad.hasError('required') ? true : false;
    let esTipoVacio = tipo.hasError('required') ? true : false;
    let esDetalleVacio = detalle.hasError('required') ? true : false;

    let camposInvalidos = esNitVacio || esNombreVacio || esDireccionVacio || esCorreoVacio || noEsCorreo || esTelefonoVacio || esCiuidadVacio || esTipoVacio || esDetalleVacio;

    return camposInvalidos;
  }

  editarNegocio(lati: string, long: string) { //este body está en string.
    if(this.camposSonInvalidos()){
      this.activarValidacion = true;
      alert("Los campos son invalidos");
    }else{
      if (lati == '' && long == '') {
        //console.log('lat y lon vacios, valores sin cambio.');
      } else {
        this.latitud = lati;
        this.longitud = long;
      }
      let body = {
        "negocio": [
          {
            "nit": this.formulario.get('nit').value,
            "idnegocio": this.idnegocio,
            "nombre": this.formulario.get('nombre').value,
            "email": this.formulario.get('email').value,
            "idadmin": this.idadmin,
            "ciudad": this.formulario.get('ciudad').value,
            "telefono": this.formulario.get('telefono').value,
            "tipo": this.formulario.get('tipo').value,
            "direccion": this.formulario.get('direccion').value,
            "foto": this.foto,
            "detalle": this.formulario.get('detalle').value,
            "latitud": this.latitud,
            "longitud": this.longitud
          }
        ]
      };
      //(JSON.stringify(body));
      this.putEditarNegocio(JSON.stringify(body));
    }    
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
