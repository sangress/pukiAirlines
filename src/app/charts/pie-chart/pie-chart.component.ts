import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore} from '../../interfaces';
import { Observable } from 'rxjs/Observable';

import 'd3';
declare let d3;
import 'nvd3/nv.d3';
declare let nv;

@Component({
  moduleId: module.id,
  selector: 'app-pie-chart',
  // templateUrl: 'pie-chart.component.html',
  template: `
    <div #chartWrapper class="pie-chart-wrapper">
      <svg #chart></svg>
    </div>
  `,
  styleUrls: ['pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @ViewChild('chart') chartEl: ElementRef;
  @ViewChild('chartWrapper') chartWrapper: ElementRef;
  private passengers: Observable<any>;
  
  @Input('data') data = [
    { "label": "Category A", "value": 20 },
    { "label": "Category B", "value": 80 },
    { "label": "Category C", "value": 120 },
    { "label": "Category D", "value": 24 },
    { "label": "Category E", "value": 50 },
    { "label": "Category F", "value": 30 }
  ];

  constructor(private store: Store<AppStore>) {
    this.passengers = this.store.select('passengers');
    console.log('passengers', this.passengers);
    
  }

  ngOnInit() {
  }

  ngAfterViewInit() {    
    this.buildPie();
  }

  buildPie() {
    console.log('building pie...');
    let height = this.chartWrapper.nativeElement.offsetHeight;
    let width = this.chartWrapper.nativeElement.offsetWidth;
    let r = height/2;
    let color = d3.scale.category20c();

    let values = this.data.map(cat => cat.value);

    // console.log(this.data);
    

    let vis = d3.select(this.chartEl.nativeElement)
      .data([this.data])
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+Math.min(width,height) +' '+Math.min(width,height) )
      .attr('preserveAspectRatio','xMinYMin')
      .append("svg:g")
      .attr("transform", "translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")");


    let pie = d3.layout.pie().value((d: any) => d.value);
    // declare an arc generator function
    let arc = d3.svg.arc().outerRadius(r);
    let arcs = vis.selectAll("g.slice")
      .data(pie)
      .enter().append("svg:g")
      .attr("class", "slice")      
      .on('mouseover', function(e,e2) {
        d3.select(this).transition()
          .ease("cubic-out")
          .duration('500')
          .attr('transform', 'scale(1.01, 1.01)')
          .attr('fill-opacity', '.8');
      })
      .on('mouseout', function(e,e2) {
        d3.select(this).transition()
          .ease("cubic-out")
          .duration('500')
          .attr('transform', 'scale(1, 1)')
          .attr('fill-opacity', '1');
      });
      
      arcs.append("svg:path")
      .attr("fill", (d, i) => {
        // console.log(d, i);

        return color(<any>i);
      })
      .attr('d', d => {
        // console.log('d: ', d);

        return arc(<any>d);
      });

    
  }

  createWithNV() {
    nv.addGraph(() => {
      var chart = nv.models.pieChart()
        .x(d => d.label)
        .y(d => d.value)
        .showLabels(false)
        .showLegend(false);

      d3.select("#chart svg")
        .datum(this.getData())
        .transition().duration(350)
        .call(chart);

        console.log(chart);
        

      return chart;
    });
  }

  getData(): Array<any> {
    return  [
      { 
        "label": "One",
        "value" : 29.765957771107
      } , 
      { 
        "label": "Two",
        "value" : 0
      } , 
      { 
        "label": "Three",
        "value" : 32.807804682612
      } , 
      { 
        "label": "Four",
        "value" : 196.45946739256
      } , 
      { 
        "label": "Five",
        "value" : 0.19434030906893
      } , 
      { 
        "label": "Six",
        "value" : 98.079782601442
      } , 
      { 
        "label": "Seven",
        "value" : 13.925743130903
      } , 
      { 
        "label": "Eight",
        "value" : 5.1387322875705
      }
    ];
  }

}
