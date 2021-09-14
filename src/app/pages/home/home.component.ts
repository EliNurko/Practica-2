import { Component, OnInit } from '@angular/core';
import { TextoComponentesService } from 'src/app/services/texto-componentes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  miInput: string = ""

  valoresHijo: any[] = [
    "Texto 1",
    "Texto 2",
    "texto 3",
    "asdfasdfasdf"
  ]
  

  constructor(
    private txtSrv: TextoComponentesService
  ) { }

  ngOnInit(): void {
    this.txtSrv.miTexto.subscribe(data => {
      this.miInput = data
    })
  }

  cambioMiTexto(){
    this.txtSrv.miTexto.next(this.miInput)
  }

}
