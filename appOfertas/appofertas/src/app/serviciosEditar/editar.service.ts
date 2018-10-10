import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditarService {

  urlEditarNegocio: string = "http://ofertapp-negocio.us-east-2.elasticbeanstalk.com/negocios/editar";
  urlEditarOferta: string = "http://ofertapp-ofertas.us-east-2.elasticbeanstalk.com/ofertas/editar";
  urlEditarPersona: string = "http://ofertapp-persona.us-east-2.elasticbeanstalk.com/personas/editar";


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
