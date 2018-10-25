import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditarService {

  //urlBase: string = 'http://172.16.0.210';
  urlBase: string = 'http://172.16.1.224';

  urlEditarNegocio: string = this.urlBase + ":8091/negocios/editar";
  urlEditarOferta: string = this.urlBase + ":8092/ofertas/editar";
  urlEditarPersona: string = this.urlBase + ":8090/personas/editar";

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
