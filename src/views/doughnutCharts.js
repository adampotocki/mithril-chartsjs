'use strict';

import m from 'mithril';

import doughnutModel from '../models/doughnutModel';

import chartComponent from '../components/chartComponent';

export default {
  view(vnode) {
    return [
      m('h1.title.has-text-centered', 'Doughnut Charts'),
      m('.columns', [
        m('.column', m(chartComponent, { model: doughnutModel }))
      ])
    ];
  }
};
