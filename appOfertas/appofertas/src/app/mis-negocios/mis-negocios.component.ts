import { Component, OnInit } from '@angular/core';
import { ListarService } from '../serviciosListar/listar.service';
import { AuthServiceManual } from '../authService/auth.service';
import { EliminarService } from '../serviciosEliminar/eliminar.service';

@Component({
  selector: 'app-mis-negocios',
  templateUrl: './mis-negocios.component.html',
  styleUrls: ['./mis-negocios.component.css']
})
export class MisNegociosComponent implements OnInit {

  private negocios: any[] = [];

  private activarVista: boolean = false;

  constructor(private listarService: ListarService,
              private auth: AuthServiceManual,
              private eliminarService: EliminarService) { }

  ngOnInit() {
    this.getNegociosAdmin(this.auth.getIdAdmin());
  }


  getNegociosAdmin(idAdmin: string): void {
    this.listarService.getNegociosAdmin(idAdmin).subscribe((data) => {
      data.forEach((item) => {
        this.negocios.push(item);
      });
      this.activarVista = true;
      console.log(data);
    });
  }


  deleteEliminarNegocio(body: string) : void {
    this.eliminarService.deleteEliminarNegocio(body).subscribe((data) => {
      console.log('Datos devueltos del eliminar negocio: '+data);
    });
  }

  eliminarNegocio(idNegocio: string){
    console.log(idNegocio);
    let body = {
      "negocio" : [
        {
          "idnegocio" : idNegocio,
          "parametro" : this.auth.getIdAdmin()
        }
      ]
    };
    this.deleteEliminarNegocio(JSON.stringify(body));
    //console.log('El body que esta mandando es: '+JSON.stringify(body));
    alert('Eliminando el negocio '+idNegocio);
  }
}
