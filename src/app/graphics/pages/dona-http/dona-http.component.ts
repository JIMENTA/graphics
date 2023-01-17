import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit{

    // Doughnut
    public doughnutChartLabels: string[] = [ 
      //'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
    ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        // { data: [ 350, 450, 100 ] ,
        //   backgroundColor: ['#6405F0','#0724E3', '#05A0F0'] 
        // },
      
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';

  constructor(private graphicsServices : GraphicsService){}

  ngOnInit(): void {
      this.graphicsServices.getDataUsers() 
      .subscribe( data => {
        const labels = Object.keys(data);
        const values = Object.values(data);

        this.doughnutChartData={
          labels:Object.keys(data),
          datasets:[{data:Object.values(data), backgroundColor: ['#320278','#0724E3', '#05A0F0','#8336f3','#c207e3' ]}]
        }
      })

      // this.graphicsServices.getDataUsersDynamic()
      // .subscribe (({ labels, values }) => {
      //     this.doughnutChartLabels = labels;
      //     this.doughnutChartData.datasets = values
      // })
 }
  

}
