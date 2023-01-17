import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GhaphicsRoutingModule } from './graphics-routing.module';




@NgModule({
  declarations: [
    GraphicBarComponent,
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    DonaHttpComponent

  ],
  imports: [
    CommonModule,
    GhaphicsRoutingModule,
    NgChartsModule   
  ]
})
export class GhaphicsModule { }
