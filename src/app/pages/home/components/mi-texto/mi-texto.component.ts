import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-texto',
  templateUrl: './mi-texto.component.html',
  styleUrls: ['./mi-texto.component.css']
})
export class MiTextoComponent implements OnInit {
  @Input() textoAHijo: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
