import { Component, OnInit } from '@angular/core';
import { AuthServiceManual } from '../authService/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.css']
})
export class SuperHeaderComponent implements OnInit {

  currentContainer: any;
  private activaP: any = '';
  private activaN: any = '';
  private activaO: any = '';


  constructor(private auth: AuthServiceManual, private router: Router) { }

  ngOnInit() {
    this.activaP = 'active';
    this.switchContainer('1');
  }

  cerrarSesion() {
    this.auth.Unloggin();
    this.router.navigate(['/']);
  }

  reiniciarActivos(){
    this.activaP = '';
    this.activaN = '';
    this.activaO = '';
  }

  switchContainer(containerName) {
    switch (containerName) {
      case '1':
      this.reiniciarActivos();
      this.activaP = 'active';
        this.currentContainer = 'personas';
        break;
      case '2':
      this.reiniciarActivos();
      this.activaN = 'active';
        this.currentContainer = 'negocios';
        break;
      case '3':
      this.reiniciarActivos();
      this.activaO = 'active';
        this.currentContainer = 'ofertas';
        break;
      default:
        this.currentContainer = 'personas';
    }
  }

}
