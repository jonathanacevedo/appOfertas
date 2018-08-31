import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarService {

  urlEliminarNegocio: string = "http://localhost:8091/negocios/eliminar";

  constructor(private http: HttpClient) { }


  deleteEliminarNegocio(body: string): any {
    let newBody = JSON.parse(body);
    let req = new HttpRequest('DELETE', this.urlEliminarNegocio);
    let newReq = req.clone({body: newBody});
    return this.http.request(newReq);
  }
}