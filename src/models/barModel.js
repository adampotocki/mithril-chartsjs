'use strict';

import m from 'mithril';
import { chartColors } from '../utils';

export default {
  loaded: false,
  instance: undefined,
  config: {
    type: 'horizontalBar',
    data: {
      labels: [],
      datasets: [{
        label: 'Rooms',
        data: [],
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
  getData() {
    if (!this.loaded) {
      m.request({
        method: 'GET',
        url: '../data/bar.json',
      })
      .then(items => {
        this.config.data.labels = items.labels;
        this.config.data.datasets[0].data = items.rooms;
        this.loaded = true;
      });
    }
  }
};
