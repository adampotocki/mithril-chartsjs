'use strict';

import m from 'mithril';
import { chartColors } from '../utils';

export default {
  loaded: false,
  config: {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Majors',
        backgroundColor: chartColors.red,
        borderColor: chartColors.red,
        data: [],
        fill: false,
      }, {
        label: 'Minors',
        fill: false,
        backgroundColor: chartColors.blue,
        borderColor: chartColors.blue,
        data: [],
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
  getData() {
    m.request({
      method: 'GET',
      url: '../data/line.json',
    })
    .then(items => {
      this.config.data.labels = items.labels;
      this.config.data.datasets[0].data = items.majors;
      this.config.data.datasets[1].data = items.minors;
      this.loaded = true;
    });
  },
  randomizeData() {
    this.config.data.datasets.forEach(dataset => {
      dataset.data = dataset.data.map(() => randomScalingFactor());
    });
    this.instance.update();
  }
};
