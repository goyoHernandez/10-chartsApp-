import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';


@NgModule({
  declarations: [
    BarsComponent,
    BarsDoubleComponent,
    DonutComponent,
    DonutHttpComponent,
    GraphicBarComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgChartsModule
  ]
})
export class ChartsModule { }
