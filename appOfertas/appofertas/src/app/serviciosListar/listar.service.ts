import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  urlListarPersonas: string = 'http://ofertapp-orquestador.us-east-2.elasticbeanstalk.com/orquestador/listar/personas';
  urlListarOfertas: string = 'http://ofertapp-ofertas.us-east-2.elasticbeanstalk.com/ofertas/listar';
  urlListarNegociosAdmin: string = 'http://ofertapp-negocio.us-east-2.elasticbeanstalk.com/negocios/listar/admin/';
  urlListarOfertasId: string = 'http://ofertapp-ofertas.us-east-2.elasticbeanstalk.com/ofertas/listar/oferta/';
  urlListarOfertasIdNegocio: string = 'http://ofertapp-ofertas.us-east-2.elasticbeanstalk.com/ofertas/listar/negocio/';
  urlListarNegocios: string = 'http://ofertapp-negocio.us-east-2.elasticbeanstalk.com/negocios/listar';
  urlListarNegocioPorId: string = 'http://ofertapp-negocio.us-east-2.elasticbeanstalk.com/negocios/listar/';
  urlListarNegocioPorTipo: string = 'http://ofertapp-negocio.us-east-2.elasticbeanstalk.com/negocios/listar/negocio/';
  urlListarPersonaPorId: string = 'http://ofertapp-persona.us-east-2.elasticbeanstalk.com/personas/listar';

  constructor(public http: HttpClient) { }

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
