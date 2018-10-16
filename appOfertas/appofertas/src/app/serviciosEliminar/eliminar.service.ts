import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarService {

<<<<<<< HEAD
  urlEliminarNegocio: string = "http://172.16.0.210:8091/negocios/eliminar";
  urlEliminarOferta: string = "http://172.16.0.210:8092/ofertas/eliminar";
  urlEliminarPersona: string = "http://172.16.0.210:8090/personas/eliminar";
=======
  urlEliminarNegocio: string = "http://ofertapp-negocio.us-east-2.elasticbeanstalk.com/negocios/eliminar";
  urlEliminarOferta: string = "http://ofertapp-ofertas.us-east-2.elasticbeanstalk.com/ofertas/eliminar";
  urlEliminarPersona: string = "http://ofertapp-persona.us-east-2.elasticbeanstalk.com/personas/eliminar";

>>>>>>> 0d4e1d7541c92af74f8e4d5c26dbc0e068c11877



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