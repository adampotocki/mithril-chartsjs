import m from 'mithril'

import lineModel from '../models/lineModel'
import chartComp from '../comps/chartComp'

export default {
  view: (vnode) => [
    m('h1.title.has-text-centered', 'Line Charts'),
    m('.columns', lineModel.loaded
      ? m('.column', m(chartComp, { model: lineModel }))
      : m('.column.has-text-centered', 'Loading...')
    )
  ]
}
