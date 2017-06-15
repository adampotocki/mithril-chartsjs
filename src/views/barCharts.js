'use strict';

import m from 'mithril';

import barModel from '../models/barModel';
import barModelTwo from '../models/barModelTwo';

import chartComponent from '../components/chartComponent';

function renderChart(model) {
  return model.loaded
    ? m('.column', m(chartComponent, { model: model }))
    : m('.column.has-text-centered', 'Loading...');
}

export default {
  view(vnode) {
    return [
      m('h1.title.has-text-centered', 'Bar Charts'),
      m('.columns', [
        renderChart(barModel),
        renderChart(barModelTwo)
      ])
    ];
  }
};
