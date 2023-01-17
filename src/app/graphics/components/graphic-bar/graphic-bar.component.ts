import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
;


@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styleUrls: ['./graphic-bar.component.css']
})
export class GraphicBarComponent implements OnInit {

  @Input() horizontal : boolean = false;
  

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };
  public barChartType: ChartType = 'bar';// horizontalBar


  @Input () barChartData: ChartData<'bar'> = {
    labels: [
      //  '2006', '2007', '2008', '2009', '2010', '2011', '2012'
       ],
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:"#ED5F76", hoverBackgroundColor:'red' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:"#F763C4", hoverBackgroundColor:'red'  },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series C', backgroundColor:"#D665E0", hoverBackgroundColor:'red'  }
    ]
  };


  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

  ngOnInit(): void {
  if(this.horizontal){
            //Esto muestra la gráfica en sentido horizontal y todos los datos en ese sentido.
            this.barChartOptions!.indexAxis = 'y';
            this.barChartOptions!.scales!["y"]!.min = 0;
  }
  }
}
