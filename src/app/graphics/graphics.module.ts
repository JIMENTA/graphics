import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';



import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';
import { DonaComponent } from './pages/dona/dona.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoblesComponent,
    DonaHttpComponent,
    GraphicBarComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
