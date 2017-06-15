'use strict';

import m from 'mithril';
import { chartColors } from '../utils';

export default {
  loaded: false,
  instance: undefined,
  config: {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [{
        label: 'Dataset 1',
        data: [],
        backgroundColor: [
          chartColors.red,
          chartColors.orange,
          chartColors.yellow,
          chartColors.green,
          chartColors.blue,
          chartColors.gray
        ]
      }]
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
  getData() {
    m.request({
      method: 'GET',
      url: 'data/doughnut.json',
    })
    .then(items => {
      this.config.data.labels = items.labels;
      this.config.data.datasets[0].data = items.employees;
      this.loaded = true;
    });
  }
};
