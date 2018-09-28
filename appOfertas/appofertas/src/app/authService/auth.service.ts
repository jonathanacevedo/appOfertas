import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceManual {


  constructor() {

   }

  Loggin(rol: string, idAdmin: string, nombre: string){
    localStorage.setItem('authState', 'exitoso');
    localStorage.setItem('rol', rol);
    localStorage.setItem('idAdmin', idAdmin);
    localStorage.setItem('nombre', nombre)
  }

  Unloggin(){
    localStorage.removeItem('authState');
    localStorage.removeItem('rol');
    localStorage.removeItem('idAdmin');
    localStorage.removeItem('nombre');
  }

  getRol(): string {
    return localStorage.getItem('rol');
  }

  getNombre(): string {
    return localStorage.getItem('nombre');
  }

  getIdAdmin(){
    return localStorage.getItem('idAdmin');
  }

  isLogged(): boolean {
    if(localStorage.getItem('authState')){
      return true;
    } else {
      return false;
    }
  }
}
