import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceManual {


  constructor() {

   }

  Loggin(rol: string, idAdmin: string){
    localStorage.setItem('authState', 'exitoso');
    localStorage.setItem('rol', rol);
    localStorage.setItem('idAdmin', idAdmin);
  }

  Unloggin(){
    localStorage.removeItem('authState');
    localStorage.removeItem('rol');
    localStorage.removeItem('idAdmin');
  }

  getRol(): string {
    return localStorage.getItem('rol');
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
