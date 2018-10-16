import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditarService {

<<<<<<< HEAD
  urlEditarNegocio: string = "http://172.16.0.210:8091/negocios/editar";
  urlEditarOferta: string = "http://172.16.0.210:8092/ofertas/editar";
  urlEditarPersona: string = "http://172.16.0.210:8090/personas/editar";
=======
  urlEditarNegocio: string = "http://ofertapp-negocio.us-east-2.elasticbeanstalk.com/negocios/editar";
  urlEditarOferta: string = "http://ofertapp-ofertas.us-east-2.elasticbeanstalk.com/ofertas/editar";
  urlEditarPersona: string = "http://ofertapp-persona.us-east-2.elasticbeanstalk.com/personas/editar";

>>>>>>> 0d4e1d7541c92af74f8e4d5c26dbc0e068c11877

  constructor(private http: HttpClient) { }

  putEditarPersona(body: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      })
    };
    return this.http.put(this.urlEditarPersona, JSON.parse(body), httpOptions);
  }


  putEditarNegocio(body: string): any {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      })
    };
    return this.http.put(this.urlEditarNegocio, JSON.parse(body), httpOptions);
  }

  putEditarOferta(body: string): any {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      })
    };
    return this.http.put(this.urlEditarOferta, JSON.parse(body), httpOptions);
  }
}
