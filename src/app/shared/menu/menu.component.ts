import { Component, OnInit } from '@angular/core';

interface MenuItem{
  ruta: string;
  texto: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{cursor:pointer}
    `
  ]
})
export class MenuComponent implements OnInit {

  menu : MenuItem[]=[
    {ruta:'graphics/barra', texto:'Barras'},
    {ruta:'graphics/barra-doble', texto:'Barras Dobles'},
    {ruta:'graphics/dona', texto:'Dona'},
    {ruta:'graphics/dona-http', texto:'Dona Http'},




  ]

  constructor() { }

  ngOnInit(): void {
  }

}
