import { Component, OnInit } from '@angular/core';
import { RegistrarPersonaService } from '../serviciosRegistro/registrar.service';
import { AuthServiceManual } from '../authService/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { THIS_EXPR } from '../../../node_modules/@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-registrar-negocio',
  templateUrl: './registrar-negocio.component.html',
  styleUrls: ['./registrar-negocio.component.css']
})
export class RegistrarNegocioComponent implements OnInit {

  private nit: string = '';
  private nombre: string = '';
  private correo: string = '';
  private ciudad: string = '';
  private telefono: string = '';
  private tipo: string = '';
  private direccion: string = '';
  private foto: string = '';
  private detalle: string = '';
  private idadmin: string = '';

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
    this.registrar.registrarNegocio(body).subscribe((data) => {
      console.log('El servicio de registro de negocio devolvió: ' + data);
      this.limpiarCampos();
      alert('Negocio ' + this.nombre + ' registrado correctamente.')
    });
  }

  registrarNegocio() {
    let body = {
      "negocio": [
        {
          "nit": this.nit,
          "nombre": this.nombre,
          "email": this.correo,
          "idadmin": this.auth.getIdAdmin(),
          "ciudad": this.ciudad,
          "telefono": this.telefono,
          "tipo": this.tipo,
          "direccion": this.direccion,
          "foto": this.foto,
          "detalle": this.detalle
        }
      ]
    };
    this.postRegistrarNegocio(JSON.stringify(body));
  }

  limpiarCampos() {
    this.nit = '';
    this.nombre = '';
    this.correo = '';
    this.idadmin = '';
    this.ciudad = '';
    this.telefono = '';
    this.tipo = '';
    this.direccion = '';
    this.foto = '';
    this.detalle = '';
    this.porcentaje = 0;
    this.uploadProgress = null;
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
