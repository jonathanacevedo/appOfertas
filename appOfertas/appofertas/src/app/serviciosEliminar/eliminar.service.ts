import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarService {

  urlEliminarNegocio: string = "http://ofertapp-negocio.us-east-2.elasticbeanstalk.com/negocios/eliminar";
  urlEliminarOferta: string = "http://ofertapp-ofertas.us-east-2.elasticbeanstalk.com/ofertas/eliminar";
  urlEliminarPersona: string = "http://ofertapp-persona.us-east-2.elasticbeanstalk.com/personas/eliminar";




  constructor(private http: HttpClient) { }

  deleteEliminarPersona(body: string): any {
    let newBody = JSON.parse(body);
    let req = new HttpRequest('DELETE', this.urlEliminarPersona);
    let newReq = req.clone({body: newBody});
    return this.http.request(newReq);
  }

  deleteEliminarNegocio(body: string): any {
    let newBody = JSON.parse(body);
    let req = new HttpRequest('DELETE', this.urlEliminarNegocio);
    let newReq = req.clone({body: newBody});
    return this.http.request(newReq);
  }

  deleteEliminarOferta(body: string): any {
    let newBody = JSON.parse(body);
    let req = new HttpRequest('DELETE', this.urlEliminarOferta);
    let newReq = req.clone({body: newBody});
    return this.http.request(newReq);
  }
}