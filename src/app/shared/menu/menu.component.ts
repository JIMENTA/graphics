import { Component } from '@angular/core';

interface MenuItem {
  ruta: string,
  texto:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
  li{
     cursor: pointer;
    }
  `]
})
export class MenuComponent {

  menu: MenuItem[]=[
    {ruta:'/graphics/bars', texto:'Barras'},
    {ruta:'/graphics/doble-bars', texto:'Barras dobles'},
    {ruta:'/graphics/dona', texto:'Dona'},
    {ruta:'/graphics/dona-http', texto:'Dona Http'},

    
  ]
}
