'use strict';

import m from 'mithril';

import barModel from '../models/barModel';
import barModelTwo from '../models/barModelTwo';
import lineModel from '../models/lineModel';
import doughnutModel from '../models/doughnutModel';

import chartComponent from '../components/chartComponent';

function renderChart(model) {
  return model.loaded
    ? m('.column', m(chartComponent, { model: model }))
    : m('.column.has-text-centered', 'Loading...');
}

export default {
  view(vnode) {
    return [
      m('h1.title.has-text-centered', 'Mithril + Chart.js'),
      m('.columns', [
        renderChart(barModel),
        renderChart(barModelTwo),
        renderChart(lineModel)
      ]),
      m('.columns', [
        renderChart(doughnutModel),
        m('.column', ''),
        m('.column', '')
      ])
    ];
  }
};
