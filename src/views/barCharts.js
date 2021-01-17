import m from 'mithril'

import barModel  from '../models/barModel'
import barModel2 from '../models/barModelTwo'

import chartComp from '../comps/chartComp'

function renderChart(model) {
  return model.loaded
    ? m('.column', m(chartComp, { model: model }))
    : m('.column.has-text-centered', 'Loading...')
}

export default {
  view: (vnode) => [
    m('h1.title.has-text-centered', 'Bar Charts'),
    m('.columns', [
      renderChart(barModel),
      renderChart(barModel2)
    ])
  ]
}
