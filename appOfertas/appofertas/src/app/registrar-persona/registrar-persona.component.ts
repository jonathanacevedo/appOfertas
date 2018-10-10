import { Component, OnInit } from '@angular/core';
import { SocialUser } from "angularx-social-login";
import { RegistrarPersonaService } from '../serviciosRegistro/registrar.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent implements OnInit {

  private id: string = '';
  
  private estado: string = '';
  private token: string = '';
  private error: string = '';
  private activarValidacion: boolean = false;

  private registroFormulario = new FormGroup(
    {
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
    telefono: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required])
    }
  );

  

  constructor(private registrar: RegistrarPersonaService,
    private router: Router) {
    this.estado = "ACTIVO";
    this.token = "SinToken";
  }

  obtenerMensajeErrorNombre(){   
    let nombre = this.registroFormulario.get('nombre');
    let error = nombre.hasError('required') ? 'Nombre vacio' : '';
    return error;
  }

  obtenerMensajeErrorApellido(){   
    let apellidos = this.registroFormulario.get('apellidos');
    let error = apellidos.hasError('required') ? 'Correo vacio' : '';
    return error;
  }

  obtenerMensajeErrorCorreo(){   
    let correo = this.registroFormulario.get('correo');
    let error = correo.hasError('required') ? 'Correo vacio' : 
    correo.hasError('email') ? 'Esto no es un email' : '';
    return error;
  }

  obtenerMensajeErrorContrasena(){   
    let contrasena = this.registroFormulario.get('contrasena');
    let error = contrasena.hasError('required') ? 'Contraseña vacia' : 
    contrasena.hasError('minlength') ? 'Contraseña muy corta' : '';
    return error;
  }

  obtenerMensajeErrorTelefono(){   
    let telefono = this.registroFormulario.get('telefono');
    let error = telefono.hasError('required') ? 'Telefono vacio' : '';
    return error;
  }

  obtenerMensajeErrorGenero(){   
    let genero = this.registroFormulario.get('genero');
    let error = genero.hasError('required') ? 'Genero vacio' : '';
    return error;
  }

  obtenerMensajeErrorRol(){   
    let rol = this.registroFormulario.get('rol');
    let error = rol.hasError('required') ? 'Rol vacio' : '';
    return error;
  }

  obtenerMensajeErrorCiudad(){   
    let ciudad = this.registroFormulario.get('ciudad');
    let error = ciudad.hasError('required') ? 'Ciudad vacio' :  '';
    return error;
  }

  camposSonInvalidos(){
    let nombre = this.registroFormulario.get('nombre');
    let apellidos = this.registroFormulario.get('apellidos');
    let correo = this.registroFormulario.get('correo');
    let contrasena = this.registroFormulario.get('contrasena');
    let telefono = this.registroFormulario.get('telefono');
    let genero = this.registroFormulario.get('genero');
    let rol = this.registroFormulario.get('rol');
    let ciudad = this.registroFormulario.get('ciudad');

    let esNombreVacio = nombre.hasError('required') ? true : false;
    let esApellidoVacio = apellidos.hasError('required') ? true : false;
    let esCorreoVacio = correo.hasError('required') ? true : false;
    let esCorreoInvalido= correo.hasError('email') ? true : false;
    let esContrasenaVacia = contrasena.hasError('required') ? true : false;
    let tamContrasenaInvalido = contrasena.hasError('minlength') ? true : false;
    let esTelefonoVacio = telefono.hasError('required') ? true : false;
    let esGeneroVacio = genero.hasError('required') ? true : false;
    let esRolVacio = rol.hasError('required') ? true : false;
    let esCiudadVacia = ciudad.hasError('required') ? true : false;

    let camposInvalidos = esNombreVacio || esApellidoVacio || esCorreoVacio || esCorreoInvalido || esContrasenaVacia || esTelefonoVacio || esGeneroVacio || esRolVacio || esCiudadVacia || tamContrasenaInvalido; 
    return camposInvalidos;
  }

  ngOnInit() {

  }

  postRegistrarPersona(body: string): void {
    
      this.activarValidacion = false;
      this.registrar.registrarPersona(body).subscribe(data => {
        if (data.codigo == '404') {
          this.error = data.detalle;
          alert("error en la información ingresada: " + this.error);
        } else {
          alert(this.registroFormulario.get('rol').value + ' registrado correctamente.')
          this.router.navigate(['/']);
        }
        this.activarValidacion = true;
      });
       
  }

  registrarPersona() {
    if(this.camposSonInvalidos() ){
      this.activarValidacion = true;
      alert("Los campos son invalidos");
    }else{
      let body = {
        "persona": [
          {
            "nombre": this.registroFormulario.get('nombre').value,
            "apellidos": this.registroFormulario.get('apellidos').value,
            "correo": this.registroFormulario.get('correo').value,
            "contrasena": this.registroFormulario.get('contrasena').value,
            "telefono": this.registroFormulario.get('telefono').value,
            "genero": this.registroFormulario.get('genero').value,
            "rol": this.registroFormulario.get('rol').value,
            "estado": this.estado,
            "token": this.token
          }
        ]
      };
      this.postRegistrarPersona(JSON.stringify(body));
    }
  }
}