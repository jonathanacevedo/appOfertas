import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { ListarService } from '../serviciosListar/listar.service';



@Component({
  selector: 'app-ver-negocio',
  templateUrl: './ver-negocio.component.html',
  styleUrls: ['./ver-negocio.component.css']
})
export class VerNegocioComponent implements OnInit {

  private idnegocio: string = '';
  private negocio: any = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
           private listar : ListarService,
           private dialogRef: MatDialogRef<VerNegocioComponent>,) {
    this.idnegocio = data.idnegocio;
   }

  ngOnInit() {
    this.listarNegocio(this.idnegocio);
  }

  cerrarDialog(){
    this.dialogRef.close();
  }

  listarNegocio(idnegocio: string ): void {
    this.listar.getNegocioPorId(idnegocio).subscribe((data) => {
      console.log(data.negocio[0])
      this.negocio = data.negocio[0];
    });
  }
}