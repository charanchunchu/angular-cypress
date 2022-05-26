import { Component, OnInit } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as Plotly from 'plotly.js';


@Component({
  selector: 'app-graphs ',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass']
})

export class GraphsComponent implements OnInit {
  public data: any;
  constructor(private plots: PlotlyModule) { }
  ngOnInit(): void {
  }
  graph = {
    data: [
      { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: { width: 420, height: 340, title: 'BASICS' }
  };
  graphs = {
    data: [
      { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: { width: 520, height: 540, title: 'BASICS' }
  };
  Fundamental = {
    data: [
      { x: [3, 5, 6], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'line' },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'Line' }
    ],
    layout: { width: 820, height: 540, title: 'Fundamental' }
  };
  Fundamentals = {
    data: [
      { x: [1, 3, 6], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },
      { x: [2, 2, 3], y: [2, 5, 3], type: 'line', mode: 'lines+points', marker: { color: 'blue' } },
      { x: [3, 2, 3], y: [2, 5, 3], type: 'Line', mode: 'lines+points', marker: { color: 'red' } },
    ],
    layout: { width: 820, height: 540, title: 'Fundamental' }
  };
  Pie = {
    data: [
      { values: [19, 26, 55], labels: ['Residential', 'Non-Residential', 'Utility'], type: 'pie' }
    ],
    layout: { height: 400, width: 500, title: 'Pie Chart' }
  };
  PieChart = {
    data: [
      { values: [19, 26, 55], labels: ['Residential', 'Non-Residential', 'Utility'], type: 'pie' }
    ],
    layout: { height: 400, width: 500, title: 'Pie Chart' }
  };
  Bar = {
    data: [
      { x: [1, 2, 3], y: [2, 3, 4], type: 'bar' },
    ],
    layout: { title: 'Some Data to Hover Over' }
  };
  Scroll = {
    data: [
      { x: ['2020-10-04', '2021-11-04', '2023-12-04'], y: [90, 40, 60], type: 'scatter' },
    ],
    layout: { title: 'Scroll' }
  };
  private trace1 = {
    x: ['2020-10-04', '2021-11-04', '2023-12-04'],
    y: [90, 40, 60],
    type: 'scatter'
  };
  Zoom = [this.trace1];
  layout = {
    title: 'Scroll and Zoom', showlegend: false
  };
  config = {
    scrollZoom: true
  }
  trace = {
    x: ['Zebras', 'Lions', 'Pelicans'],
    y: [90, 40, 60],
    type: 'bar',
    name: 'New York Zoo'
  }
  trace2 = {
    x: ['Zebras', 'Lions', 'Pelicans'],
    y: [10, 80, 45],
    type: 'bar',
    name: 'San Francisco Zoo'
  }
  chart = {
    data: [this.trace, this.trace2],
    layout: {
      title: 'Hide the Modebar',
    showlegend: true
  },
  config:{
    displayModeBar:false
  }
  }
  Quick ={
    data : [{
      x:['trees', 'flowers', 'hedges'],
      y: [90, 130, 40],
   type: 'bar'}],
     layout : {
      title: 'Remove Modebar Buttons',
      showlegend: false},
      config:{
        modeBarButtonsToRemove: ['toImage']
      }
  }
  graph4 = {
    data: [
      {
        type: "sunburst",
        labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
        parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve"],
        values: [10, 14, 12, 10, 2, 6, 6, 4, 4],
        outsidetextfont: { size: 20, color: "#377eb8" },
        leaf: { opacity: 0.4 },
        marker: { line: { width: 2 } },
      }
    ],
    layout: {
      title: 'Bar Plot',
      width: 500,
      height: 500
    }
  }
  graph5 = {
    data: [{
      x: [1, 2, 3, 4],
      y: [10, 11, 12, 13],
      mode: 'markers',
      marker: {
        size: [40, 60, 80, 100]
      }
    }],
    layout: [{
      title: 'Marker Size',
      showlegend: true,
      width: 500,
      height: 500
    }]
  }

// new2/
trae1 = {
  type: "scatter",
  mode: "lines",
  x: ['2018-01-01', '2018-08-31'],
  y: [10, 5],
  line: {color: '#17BECF'}
};
 trae2 = {
  type: "scatter",
  mode: "lines",
  x: ['2018-01-01', '2018-08-31'],
  y: [3,7],
  line: {color: '#7F7F7F'}
};
custom ={
  data : [this.trae1,this.trae2],

  layout : {
   title: 'Custom Locale',
 },
 config : {locale: 'fr'}
   }
  //  new3/
  Chartstudiomodebar ={
    data : [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie'
    }],
    layout: {
        title: 'Show Edit in Chart Studio Modebar Button'
    },
    config: {
      showEditInChartStudio: true,
      plotlyServerURL: "https://chart-studio.plotly.com"
    }
  }
  //  new4/
  Customizetheeditchartlinktext ={
    data : [{
      z: [[0, 1, 2, 3, 4, 5, 6],
          [1, 9, 4, 7, 5, 2, 4],
          [2, 4, 2, 1, 6, 9, 3]],
      type: 'heatmap'}],
    layout: {title: 'Customize The Edit Chart Link Text'},
    config: {
      showLink: true,
      plotlyServerURL: "https://chart-studio.plotly.com",
    }
  }
  //  new5/
  AlwaysdisplaytheModebar ={
    data : [{
      y:['Marc', 'Henrietta', 'Jean', 'Claude', 'Jeffrey', 'Jonathan', 'Jennifer', 'Zacharias'],
        x: [90, 40, 60, 80, 75, 92, 87, 73],
        type: 'bar',
        orientation: 'h'}],
  layout : {
      title: 'Always Display the Modebar',
      showlegend: false},
      config: {
        displayModeBar: true
      }
  }
  graph6= {
    data: [ { type: "indicator",
    mode: "number+delta",
    value: 492,
    delta: { reference: 512, valueformat: ".0f" },
    ticker: { showticker: true },
    vmax: 500,
    domain: { y: [0, 1], x: [0.25, 0.75] },
    title: { text: "Users online" }
  },
  {
    y: [325, 324, 405, 400, 424, 404, 417, 432, 419, 394, 410, 426, 413, 419, 404, 408, 401, 377, 368, 361, 356, 359, 375, 397, 394, 418, 437, 450, 430, 442, 424, 443, 420, 418, 423, 423, 426, 440, 437, 436, 447, 460, 478, 472, 450, 456, 436, 418, 429, 412, 429, 442, 464, 447, 434, 457, 474, 480, 499, 497, 480, 502, 512, 492]
  }
],

 layout :[{ width: 600, height: 450, xaxis: { range: [0, 62]}}]
 }

// new6/
trace6 = {
  x: [0, 1, 2, 3, 4, 5, 6],
  y: [1, 9, 4, 7, 5, 2, 4],
  mode: 'lines+markers',
  type: 'scatter'
}
Displaytheeditchartlink ={

  data : [ this.trace6 ],
  layout : {
    title: 'Display the Edit Chart Link'
  },

  config : {
    showLink: true,
    plotlyServerURL: "https://chart-studio.plotly.com"
  },
}
// new7/
trace5 = {
  type: 'bar',
  x: [1, 2, 3, 4],
  y: [5, 10, 2, 8],
  marker: {
  color: '#C8A2C8',
  line: {
       width: 2.5
      },
  },
}
Responsivetowindowsize ={

data : [ this.trace5 ],
 layout : {
  title: 'Responsive to window size!',
  font: {size: 18}
},
config : {responsive: true}
}
// polar charts
public polarChartOptions = {
    
};
public polarChartLabels = [
  'Red',
  'Green',
  'Yellow',
  'Grey',
  'Blue'
];
public polarChartType = 'polarArea';
public polarChartLegend = true;
public polarChartData = [
  {data: [11, 16, 7, 3, 14], label: 'Polar Chart'}
];
public polarChartBackgrounds =  [
  'rgb(255, 99, 132)',
  'rgb(75, 192, 192)',
  'rgb(255, 205, 86)',
  'rgb(201, 203, 207)',
  'rgb(54, 162, 235)'
];

// polar bar charts

public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType = 'bar';
public barChartLegend = true;
public barChartData = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];
}
