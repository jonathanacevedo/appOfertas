import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListarService } from '../listar.service';
import { AuthService } from "angularx-social-login";

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  ofertas: any[] = [];

  constructor(private http: HttpClient, public listar: ListarService, private authService: AuthService) { 
  }

  ngOnInit() {
    this.getListaOfertas();
  }

  getListaPersonas(): void {
    this.listar.getPersonas().subscribe(data => {
      data.forEach(element => {
        //this.personas.push(element)
      });
    });
  }
  
  getListaOfertas(): void {
    this.listar.getOfertas().subscribe(data => {
      data.forEach(element => {
        this.ofertas.push(element)
      });
    });
  }

  alerta(){
    alert('Para ver los detalles de las ofertas deberá iniciar sesión');
  }
}