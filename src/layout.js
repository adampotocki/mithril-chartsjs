'use strict';

import m from 'mithril';

const links = [
  { href: '/', title: 'All Charts' },
  { href: '/bar', title: 'Bar Chart' },
  { href: '/line', title: 'Line Chart' },
  { href: '/doughnut', title: 'Doughnut Chart' },
];

const layout = {
  view(vnode) {
    return [
      m(`nav.nav.has-shadow`, [
        m('.nav-left', [
          m('a.nav-item[href="/"]', {
            oncreate: m.route.link
          }, 'Mithril + Charts.js')
        ]),
        m('span.nav-toggle', [
          m('span', ''),
          m('span', ''),
          m('span', '')
        ]),
        m('.nav-right.nav-menu', [
          links.map(link => {
            return m(`a.nav-item.is-tab[href=${link.href}]`, {
              class: m.route.get() === link.href ? 'is-active' : '',
              oncreate: m.route.link
            }, link.title);
          })
        ])
      ]),
      m(`section.section`, [
        m(`.container`, vnode.children)
      ])
    ];
  }
};

export default function(view) {
  return {
    render: () => m(layout, m(view))
  };
}
