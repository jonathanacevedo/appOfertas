import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrarPersonaService {

  urlRegistrarPersona: string = "http://localhost:8050/orquestador/registrar/personas";
  urlRegistrarNegocio: string = "http://localhost:8091/negocios/registrar";

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
}
