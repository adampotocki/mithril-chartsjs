'use strict';

import { randomScalingFactor, chartColors } from '../utils';

export default {
  loaded: false,
  chartConfig: {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [
          193,
          8,
          4,
          2,
          167,
          1
        ],
        backgroundColor: [
          chartColors.red,
          chartColors.orange,
          chartColors.yellow,
          chartColors.green,
          chartColors.blue,
          chartColors.gray
        ],
        label: 'Dataset 1'
      }],
      labels: [
        'Faculty',
        'Fellows',
        'Leadership',
        'Research',
        'Staff',
        'Other'
      ]
    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Employees'
      },
      animation: {
        animateScale: true,
        animateRotate: true
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
