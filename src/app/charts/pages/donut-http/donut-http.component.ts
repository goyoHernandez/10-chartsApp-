import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styleUrls: ['./donut-http.component.css']
})
export class DonutHttpComponent implements OnInit {

  // Doughnut

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {
    this.chartsService.GetDataDonutChart().
      subscribe(({ labels, data }) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push({ data });
      });

    // this.chartsService.GetDonutChart().subscribe(res => {
    //   const labels = Object.keys(res);
    //   const data = Object.values(res);

    //   this.doughnutChartData.labels = labels;

    //   this.doughnutChartData.datasets.push({ data });
    // })
  }
}