import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  //urlBase: string = 'http://172.16.0.210';
  urlBase: string = 'http://172.16.1.224';

  urlLoguearPersonas: string = this.urlBase + ':8090/personas/loguear?'; //usuario=biancabien@gmail.com&password=123456
  urlListarPersonas: string = this.urlBase + ':8050/orquestador/listar/personas';
  urlListarOfertas: string = this.urlBase + ':8092/ofertas/listar';
  urlListarNegociosAdmin: string = this.urlBase + ':8091/negocios/listar/admin/';
  urlListarOfertasId: string = this.urlBase + ':8092/ofertas/listar/oferta/';
  urlListarOfertasIdNegocio: string = this.urlBase + ':8092/ofertas/listar/negocio/';
  urlListarNegocios: string = this.urlBase + ':8091/negocios/listar';
  urlListarNegocioPorId: string = this.urlBase + ':8091/negocios/listar/';
  urlListarNegocioPorTipo: string = this.urlBase + ':8091/negocios/listar/negocio/';
  urlListarPersonaPorId: string = this.urlBase + ':8090/personas/listar/';

  constructor(public http: HttpClient) { }

  loguearPersona(correo, contrasena) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    let urlLogin = this.urlLoguearPersonas + 'usuario=' + correo + '&password='+contrasena;
    return this.http.get(urlLogin);
  }

  getPersonas(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.urlListarPersonas);
  }


  getPersonaPorId(id: string): any{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.urlListarPersonaPorId+id);
  }

  getOfertas(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.urlListarOfertas);
  }

  getNegociosAdmin(idAdmin: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })};
    return this.http.get(this.urlListarNegociosAdmin+idAdmin);
  }

  getNegociosTipo(tipo: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })};
    return this.http.get(this.urlListarNegocioPorTipo+tipo);
  }


  getNegocios(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })};
    return this.http.get(this.urlListarNegocios);
  }

  getOfertasPorIdNegocio(idNegocio: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.urlListarOfertasIdNegocio+idNegocio);
  }

  getNegocioPorId(idnegocio: string) : any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.urlListarNegocioPorId+idnegocio);
  }

  getOfertasPorId(id: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.urlListarOfertasId+id);
  }

}
