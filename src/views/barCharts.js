'use strict';

import m from 'mithril';

import barModel from '../models/barModel';
import barModelTwo from '../models/barModelTwo';

import chartComponent from '../components/chartComponent';

export default {
  view(vnode) {
    return [
      m('h1.title.has-text-centered', 'Bar Charts'),
      m('.columns', [
        m('.column', m(chartComponent, { model: barModel })),
        m('.column', m(chartComponent, { model: barModelTwo }))
      ])
    ];
  }
};
