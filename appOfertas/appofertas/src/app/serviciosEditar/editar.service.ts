import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditarService {

  urlEditarNegocio: string = "http://localhost:8091/negocios/editar";
  urlEditarOferta: string = "http://localhost:8092/ofertas/editar";

  constructor(private http: HttpClient) { }


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
