import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valoresHijo: any[] = [
    "Texto 1",
    "Texto 2",
    "texto 3",
    "asdfasdfasdf"
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
