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
    const self = this;
    setTimeout(function() {
      m.request({
        method: 'GET',
        url: 'data/bar2.json',
      })
      .then(items => {
        self.config.data.labels = items.labels;
        self.config.data.datasets[0].data = items.rooms;
        self.loaded = true;
      });
    }, 5000);
  }
};
