import { Component, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { RegistrarPersonaService } from '../serviciosRegistro/registrar.service';
import { AuthServiceManual } from '../authService/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { THIS_EXPR } from '../../../node_modules/@angular/compiler/src/output/output_ast';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-registrar-negocio',
  templateUrl: './registrar-negocio.component.html',
  styleUrls: ['./registrar-negocio.component.css']
})
export class RegistrarNegocioComponent implements OnInit {

  private activarValidacion: boolean = false;

  private formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    nit: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    detalle: new FormControl('', Validators.required)
  });

  private foto: string = '../../assets/imagenes/logoOfertApp.png';
  private idadmin: string = '';
  private latitud: string = '';
  private longitud: string = '';

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  private porcentaje: number;
  downloadURL: Observable<string>;


  constructor(private registrar: RegistrarPersonaService,
    private auth: AuthServiceManual,
    private afStorage: AngularFireStorage) {
  }

  ngOnInit() {

  }

  postRegistrarNegocio(body: string): void {
    this.activarValidacion = false;
    this.registrar.registrarNegocio(body).subscribe((data) => {
      //console.log('El servicio de registro de negocio devolvió: ' + data);
      this.limpiarCampos();
      alert('Negocio registrado correctamente.')
    });
  }

  asignarCoordenadas(lati: string, long: string){

  }

  camposSonInvalidos(){
    let nit = this.formulario.get('nit');
    let nombre = this.formulario.get('nombre');
    let direccion = this.formulario.get('direccion');
    let correo = this.formulario.get('correo');
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

  registrarNegocio(lati: string, long: string) {

    if(this.camposSonInvalidos()){
      this.activarValidacion = true;
      alert("Los campos son invalidos");
    }else{
      this.latitud = lati;
      this.longitud = long;
      let body = {
        "negocio": [
          {
            "nit": this.formulario.get('nit').value,
            "nombre": this.formulario.get('nombre').value,
            "email": this.formulario.get('correo').value,
            "idadmin": this.auth.getIdAdmin(),
            "ciudad": this.formulario.get('ciudad').value,
            "telefono": this.formulario.get('telefono').value,
            "tipo": this.formulario.get('tipo').value,
            "direccion": this.formulario.get('direccion').value,
            "foto": this.foto,
            "detalle": this.formulario.get('detalle').value,
            "latitud" : this.latitud,
            "longitud" : this.longitud
          }
        ]
      };
      this.postRegistrarNegocio(JSON.stringify(body));
    }    
  }

  limpiarCampos() {
    this.formulario.get('nit').setValue('');
    this.formulario.get('nombre').setValue('');
    this.formulario.get('correo').setValue('');
    this.formulario.get('ciudad').setValue('');
    this.formulario.get('telefono').setValue('');
    this.formulario.get('tipo').setValue('');
    this.formulario.get('direccion').setValue('');
    this.formulario.get('detalle').setValue('');

    this.idadmin = '';
    this.foto = '';
    this.porcentaje = 0;
    this.uploadProgress = null;
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
    let error = direccion.hasError('required') ? 'Direccion vacio' : '';
    return error;
  }
  obtenerMensajeErrorEmail(){   
    let correo = this.formulario.get('correo');
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
