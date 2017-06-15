'use strict';

import m from 'mithril';
import { randomScalingFactor, chartColors } from '../utils';

export default {
  loaded: false,
  chartConfig: {
    type: 'horizontalBar',
    data: {
      labels: [
        'CoRe',
        'Hill Center',
        'C8IM Module Bldg',
        'Loree Classroom-Office',
      ],
      datasets: [{
        label: 'Rooms',
        data: [
          77,
          72,
          33,
          1
        ],
        backgroundColor: [
          chartColors.green,
          chartColors.blue,
          chartColors.purple,
          chartColors.red
        ]
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Rooms By Building'
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
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
