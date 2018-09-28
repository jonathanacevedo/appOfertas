import { Component, OnInit } from '@angular/core';
import { AuthServiceManual } from '../authService/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rol: string = '';
  currentContainer: any;
  nombre: string = '';


  constructor(private auth: AuthServiceManual, private router: Router) { }

  private activaI: any = '';
  private activaN: any = '';
  private activaR: any = '';
  private activaO: any = '';

  ngOnInit() {
    this.switchContainer('1');
    this.rol = this.auth.getRol();
    this.nombre = this.auth.getNombre();
  }
  
  reiniciarActivos() {
    this.activaI = '';
    this.activaN = '';
    this.activaR = '';
    this.activaO = '';
  }

  cerrarSesion() {
    this.auth.Unloggin();
    this.router.navigate(['/']);
  }

  switchContainer(containerName) {
    switch (containerName) {
      case '1':
        this.reiniciarActivos();
        this.activaI = 'active';
        this.currentContainer = 'inicio';
        break;
      case '2':
        this.reiniciarActivos();
        this.activaR = 'active';
        this.currentContainer = 'registronegocio';
        break;
      case '3':
        this.reiniciarActivos();
        this.activaN = 'active';
        this.currentContainer = 'misnegocios';
        break;
      case '4':
        this.reiniciarActivos();
        this.currentContainer = 'editarperfil';
        break;
      case '5':
        this.reiniciarActivos();
        this.activaO = 'active';
        this.currentContainer = 'misofertas';
        break;
      default:
        this.currentContainer = 'inicio';
    }
  }
}