'use strict';

import m from 'mithril';

import lineModel from '../models/lineModel';

import chartComponent from '../components/chartComponent';

export default {
  view(vnode) {
    return [
      m('h1.title.has-text-centered', 'Line Charts'),
      m('.columns', [
        m('.column', m(chartComponent, { model: lineModel }))
      ])
    ];
  }
};
