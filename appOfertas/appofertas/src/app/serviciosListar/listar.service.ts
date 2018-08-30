import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  urlListarPersonas: string = 'http://localhost:8050/orquestador/listar/personas';
  urlListarOfertas: string = 'http://localhost:8092/ofertas/listar';
  urlListarNegociosAdmin: string = 'http://localhost:8091/negocios/listar/admin/';
 

  constructor(public http: HttpClient) { }

  getPersonas(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      )
    };
    return this.http.get(this.urlListarPersonas);
  }

  getOfertas(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      )
    };
    return this.http.get(this.urlListarOfertas);
  }

  getNegociosAdmin(idAdmin: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      )
    };
    return this.http.get(this.urlListarNegociosAdmin+idAdmin);
  }

}
