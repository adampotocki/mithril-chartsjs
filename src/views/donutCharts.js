import m from 'mithril'

import donutModel from '../models/donutModel'

import chartComp from '../comps/chartComp'

export default {
  view: (vnode) => [
    m('h1.title.has-text-centered', 'Donut Charts'),
    m('.columns', donutModel.loaded
      ? m('.column', m(chartComp, { model: donutModel }))
      : m('.column.has-text-centered', 'Loading...')
    )
  ]
}
