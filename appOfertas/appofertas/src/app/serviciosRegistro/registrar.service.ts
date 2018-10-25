import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrarPersonaService {

  urlBase: string = 'http://172.16.1.224';

  urlRegistrarPersona: string = this.urlBase + ":8050/orquestador/registrar/personas";
  urlRegistrarNegocio: string = this.urlBase +  ":8091/negocios/registrar";
  urlRegistrarOferta: string = this.urlBase + ":8092/ofertas/registrar";

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
