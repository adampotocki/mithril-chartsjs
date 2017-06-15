'use strict';

import m from 'mithril';
import Chart from 'chart.js';

import { randomizeData, reloadData } from '../utils';

export default {
  view(vnode) {
    const model = vnode.attrs.model;

    return m(`.${model.config.type}`, [
      m('#canvas-holder', [
        m('canvas#chart-area', {
          oncreate(vnode) {
            const ctx = vnode.dom.getContext('2d');
            model.instance = new Chart(ctx, model.config);
          }
        })
      ]),
      m('a.button[href="#"]#randomizeData', {
        onclick: e => {
          e.preventDefault();
          randomizeData(model);
        }
      }, 'Randomize Data'),
      ' ',
      m('a.button[href="#"]#reloadData', {
        onclick: e => {
          e.preventDefault();
          reloadData(model);
        }
      }, 'Reload Data')
    ])
  }
};
