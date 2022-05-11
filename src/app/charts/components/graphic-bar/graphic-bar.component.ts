import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styleUrls: ['./graphic-bar.component.css']
})
export class GraphicBarComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };

  @Input() barChartLabel: string[] = [];

  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    datasets: []
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void { }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
    }
  }

}
