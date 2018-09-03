import { Component, OnInit } from '@angular/core';
import { AuthServiceManual } from '../authService/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rol: string = '';
  currentContainer: any;

  constructor(private auth: AuthServiceManual) { }

  ngOnInit() {
    //this.currentContainer = '1';
    this.switchContainer('1');
    this.rol = this.auth.getRol();
  }

  switchContainer(containerName) {
    switch (containerName) {
      case '1':
        this.currentContainer = 'inicio';
        break;
      case '2':
        this.currentContainer = 'registronegocio';
        break;
      case '3':
        this.currentContainer = 'misnegocios';
        break;
      case '4':
        this.currentContainer = 'misofertas';
        break;
      default:
        this.currentContainer = 'inicio';
    }
  }
}