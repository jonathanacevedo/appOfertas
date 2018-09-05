import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-verfoto',
  templateUrl: './verfoto.component.html',
  styleUrls: ['./verfoto.component.css']
})
export class VerfotoComponent implements OnInit {

  private url: any = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<VerfotoComponent>) {
    this.url = data.url;
   }

  ngOnInit() {
  }

  cerrarDialog(){
    this.dialogRef.close();
  }

}
