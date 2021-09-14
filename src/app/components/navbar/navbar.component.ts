import { Component, OnInit } from '@angular/core';
import { TextoComponentesService } from 'src/app/services/texto-componentes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  miTexto: string = "Este es mi texto"
  
  constructor(
    private txtSrv: TextoComponentesService
  ) { }

  ngOnInit(): void {
    this.txtSrv.miTexto.subscribe(data => {
      this.miTexto = data
    })
  }

}
