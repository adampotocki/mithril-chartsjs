'use strict';

import m from 'mithril';
import Chart from 'chart.js';

export default {
  oninit(vnode) {

  },
  oncreate(vnode) {

  },
  onbeforeupdate(vnode, old) {

  },
  onbeforeremove(vnode) {
    alert('before remove')
  },
  view(vnode) {
    const model = vnode.attrs.model;

    return m(`.${model.chartConfig.type}`, [
      m('#canvas-holder', [
        m('canvas#chart-area', {
          oncreate(vnode) {
            const ctx = vnode.dom.getContext('2d');
            model.loaded = new Chart(ctx, model.chartConfig);
          }
        })
      ]),
      m('a.button[href="#"]#randomizeData', {
        onclick: e => {
          e.preventDefault();
          model.randomizeData();
        }
      }, 'Randomize Data')
    ])
  }
};
