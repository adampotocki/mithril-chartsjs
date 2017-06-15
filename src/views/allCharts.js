'use strict';

import m from 'mithril';

import barModel from '../models/barModel';
import barModelTwo from '../models/barModelTwo';
import lineModel from '../models/lineModel';
import doughnutModel from '../models/doughnutModel';

import chartComponent from '../components/chartComponent';

export default {
  view(vnode) {
    return [
      m('h1.title.has-text-centered', 'Mithril + Chart.js'),
      m('.columns', [
        m('.column', m(chartComponent, { model: barModel })),
        m('.column', m(chartComponent, { model: barModelTwo })),
        m('.column', m(chartComponent, { model: lineModel }))
      ]),
      m('.columns', [
        m('.column', m(chartComponent, { model: doughnutModel })),
        m('.column', ''),
        m('.column', '')
      ])
    ];
  }
};
