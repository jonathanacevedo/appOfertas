import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListarService } from '../serviciosListar/listar.service';
import { AuthService } from "angularx-social-login";
import { AuthServiceManual } from '../authService/auth.service';
import { AgmCoreModule } from '@agm/core';



@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  
  ofertas: any[] = [];

  rol: string = "";

  constructor(private http: HttpClient,
     public listar: ListarService, 
     private authService: AuthService,
     private auth: AuthServiceManual) { 
  }

  ngOnInit() {
    this.getListaOfertas();
    this.rol = this.auth.getRol();
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