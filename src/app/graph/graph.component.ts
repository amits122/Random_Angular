import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {
  
  chart = new Chart({
    chart:{
      type: 'line'
    },
    title:{
      text: 'Usage Statistics'
    },
    credits:{
      enabled: false
    },
    series: [{
     name: 'Line 1',
     data: [10,20,30,40,50,40,70]
    }]
  
  });
  add(){
    for(let i=0;i<7;i++){
      this.chart.addPoint(Math.floor(Math.random() * 100));
    }
    
  }
  passValue(val){

  }

  constructor() {
   }

  ngOnInit() {
  }

}
