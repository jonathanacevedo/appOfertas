import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ListarService } from '../serviciosListar/listar.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private ofertas : any[] = [];

  lat: number = 6.2518400;
  lng: number = -75.5635900;

  constructor(private listar: ListarService) { }

  ngOnInit() {
    this.getListaOfertas();
  }


  getListaOfertas(): void {
    this.listar.getOfertas().subscribe(data => {
      data.forEach(element => {
        this.ofertas.push(element)
      });
    });
  }

}
