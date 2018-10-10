import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrarPersonaService {

  urlRegistrarPersona: string = "http://ofertapp-orquestador.us-east-2.elasticbeanstalk.com/orquestador/registrar/personas";
  urlRegistrarNegocio: string = "http://ofertapp-negocio.us-east-2.elasticbeanstalk.com/negocios/registrar";
  urlRegistrarOferta: string = "http://ofertapp-ofertas.us-east-2.elasticbeanstalk.com/ofertas/registrar";

  constructor(private http: HttpClient) { }

  registrarPersona(body: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.post(this.urlRegistrarPersona, JSON.parse(body), httpOptions);
  }

  registrarNegocio(body: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })

    };
    return this.http.post(this.urlRegistrarNegocio, JSON.parse(body), httpOptions);
  }

  registrarOferta(body: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.post(this.urlRegistrarOferta, JSON.parse(body), httpOptions);
  }
}
