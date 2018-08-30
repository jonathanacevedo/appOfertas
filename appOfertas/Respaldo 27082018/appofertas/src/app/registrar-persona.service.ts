import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrarPersonaService {

  urlRegistrarPersona: string = "localhost:8050/orquestador/registrar/personas";

  constructor(public http: HttpClient) { }

  registrarPersona(body: string): any {
    console.log('Esta llamando al servicio');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.post(this.urlRegistrarPersona, JSON.parse(body), httpOptions);
  }
}
