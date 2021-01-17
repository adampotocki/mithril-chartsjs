import m from 'mithril'

import barModel   from '../models/barModel'
import barModel2  from '../models/barModelTwo'
import lineModel  from '../models/lineModel'
import donutModel from '../models/donutModel'

import chartComp from '../comps/chartComp'

function renderChart(model) {
  return model.loaded
    ? m('.column', m(chartComp, { model: model }))
    : m('.column.has-text-centered', 'Loading...')
}

export default {
  view: (vnode) => [
    m('h1.title.has-text-centered', 'Mithril + Chart.js'),
    m('.columns', [
      renderChart(barModel),
      renderChart(barModel2),
      renderChart(lineModel),
    ]),
    m('.columns', [
      renderChart(donutModel),
      m('.column', ''),
      m('.column', ''),
    ])
  ]
}
