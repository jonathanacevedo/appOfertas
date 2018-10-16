
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { RegistrarPersonaService } from '../serviciosRegistro/registrar.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.component.html',
  styleUrls: ['./crear-oferta.component.css']
})
export class CrearOfertaComponent implements OnInit {

  private idnegocio: string = '';
  private nombre: string = '';
  private foto: string = 'https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547';
  private latitud: string = '';
  private longitud: string = '';

  private activarValidacion: boolean = false;

  private formulario = new FormGroup({
    producto: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    descuento: new FormControl(''),
    valor: new FormControl('', [Validators.required]),
    fecha_inicio: new FormControl('', [Validators.required]),
    fecha_fin: new FormControl('', [Validators.required]),
    detalle: new FormControl('', [Validators.required])
  });

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
    this.foto = data.foto;
    this.latitud = data.latitud;
    this.longitud = data.longitud;
  }

  ngOnInit() {
  }

  fechaInicioInvalida() {
    let fechaActual = new Date();
    let fechaI = this.formulario.get('fecha_inicio').value;
    let fechaF = this.formulario.get('fecha_fin').value;

    let fechaInicio = new Date(fechaI);
    let fechaFin = new Date(fechaF);

    return ((fechaInicio.getTime() < fechaActual.getTime()) || (fechaInicio.getTime() > fechaFin.getTime()));
  }

  fechaFinInvalida() {

    let fechaActual = new Date();
    let fechaI = this.formulario.get('fecha_inicio').value;
    let fechaF = this.formulario.get('fecha_fin').value;

    let fechaInicio = new Date(fechaI);
    let fechaFin = new Date(fechaF);

    return ((fechaFin.getTime() < fechaActual.getTime()) || (fechaFin.getTime() < fechaInicio.getTime()));
  }

  camposSonInvalidos() {
    let producto = this.formulario.get('producto');
    let detalle = this.formulario.get('detalle');
    let valor = this.formulario.get('valor');
    let fecha_inicio = this.formulario.get('fecha_inicio');
    let fecha_fin = this.formulario.get('fecha_fin');
    let tipo = this.formulario.get('tipo');

    let esProductoVacio = producto.hasError('required') ? true : false;
    let esDetalleVacio = detalle.hasError('required') ? true : false;
    let esValorVacio = valor.hasError('required') ? true : false;
    let esFechaInicioVacio = fecha_inicio.hasError('required') ? true : false;
    let esFechaInicioInvalida = this.fechaInicioInvalida();
    let esFechaFinInvalida = this.fechaFinInvalida();
    let esFechaFinVacio = fecha_fin.hasError('required') ? true : false;
    let esTipoVacio = tipo.hasError('required') ? true : false;

    let camposInvalidos = esProductoVacio || esDetalleVacio || esValorVacio || esFechaInicioVacio || esFechaInicioInvalida || esFechaFinVacio || esFechaFinInvalida || esTipoVacio;

    return camposInvalidos;
  }

  obtenerMensajeErrorProducto() {
    let producto = this.formulario.get('producto');
    let error = producto.hasError('required') ? 'Producto vacio' : '';
    return error;
  }

  obtenerMensajeErrorTipo() {
    let tipo = this.formulario.get('tipo');
    let error = tipo.hasError('required') ? 'Tipo vacio' : '';
    return error;
  }

  obtenerMensajeErrorDescuento() {
    let descuento = this.formulario.get('descuento');
    let error = descuento.hasError('required') ? 'Descuento vacio' : '';
    return error;
  }

  obtenerMensajeErrorValor() {
    let valor = this.formulario.get('valor');
    let error = valor.hasError('required') ? 'Valor vacio' : '';
    return error;
  }

  obtenerMensajeErrorFechaInicio() {
    let fechaInicio = this.formulario.get('fecha_inicio');
    let esFechaInicioInvalida = this.fechaInicioInvalida();
    let error = fechaInicio.hasError('required') ? 'Fecha de inicio vacia' :
      esFechaInicioInvalida ? 'Fecha invalida' : '';
    return error;
  }

  obtenerMensajeErrorFechaFin() {
    let fechaFin = this.formulario.get('fecha_fin');
    let esFechaFinInvalida = this.fechaFinInvalida();
    let error = fechaFin.hasError('required') ? 'Fecha de finalización vacia' :
      esFechaFinInvalida ? 'Fecha invalida' : '';
    return error;
  }

  obtenerMensajeErrorDetalle() {
    let detalle = this.formulario.get('detalle');
    let error = detalle.hasError('required') ? 'Detalle vacio' : '';
    return error;
  }

  registrarOferta() {
    if (this.camposSonInvalidos()) {
      this.activarValidacion = true;
      alert("Los campos son invalidos");
    } else {
      let body = {
        "oferta": [
          {
            "producto": this.formulario.get('producto').value,
            "detalle": this.formulario.get('detalle').value,
            "valor": this.formulario.get('valor').value,
            "descuento": this.formulario.get('descuento').value,
            "foto": this.foto,
            "idnegocio": this.idnegocio,
            "fecha_inicio": this.formulario.get('fecha_inicio').value,
            "fecha_fin": this.formulario.get('fecha_fin').value,
            "latitud": this.latitud,
            "longitud": this.longitud,
            "tipo": this.formulario.get('tipo').value
          }
        ]
      };
      this.postRegistrarOferta(JSON.stringify(body));
    }
  }

  postRegistrarOferta(body: string): void {
    this.activarValidacion = false;
    this.registrarService.registrarOferta(body).subscribe((data) => {
      alert('Oferta creada exitosamente para el negocio ' + this.nombre);
      this.cerrarDialog();
    });
  }


  cerrarDialog() {
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
