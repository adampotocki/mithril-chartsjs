'use strict';

import { randomScalingFactor, chartColors } from '../utils';

export default {
  loaded: false,
  chartConfig: {
    type: 'line',
    data: {
      labels: [
        'Fall 2015',
        'Spring 2016',
        'Fall 2016',
        'Spring 2017',
        'Fall 2017',
      ],
      datasets: [{
        label: 'Majors',
        backgroundColor: chartColors.red,
        borderColor: chartColors.red,
        data: [
          815,
          859,
          985,
          1040,
          971
        ],
        fill: false,
      }, {
        label: 'Minors',
        fill: false,
        backgroundColor: chartColors.blue,
        borderColor: chartColors.blue,
        data: [
          213,
          261,
          212,
          252,
          256
        ],
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Declared Majors and Minors'
      },
      tooltips: {
        mode: 'point',
        intersect: false,
      },
      hover: {
        mode: 'point',
        intersect: false
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Semester'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Declared'
          }
        }]
      }
    }
  },
  randomizeData() {
    this.chartConfig.data.datasets.forEach(dataset => {
      dataset.data = dataset.data.map(() => randomScalingFactor());
    });
    this.loaded.update();
  }
};
