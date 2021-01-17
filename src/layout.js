import m from 'mithril'

const links = [
  { href: '/all',  title: 'All Charts' },
  { href: '/bar',  title: 'Bar Chart'  },
  { href: '/line', title: 'Line Chart' },
  { href: '/donut',title: 'Donut Chart'},
]

const layout = { view: (vnode) => [
  m("nav.navbar[role='navigation']",[
    m(".navbar-brand",[
      m(m.route.Link, {
        selector: 'a.navbar-item[href="/"]',
      }, 'Mithril + Chart.js'),
      m("a.navbar-burger[role='button']",[
        m("span[aria-hidden='true']",'1'),
        m("span[aria-hidden='true']",'2'),
        m("span[aria-hidden='true']",'3'),
      ])
    ]),
    m(".navbar-menu",[
      m(".navbar-start",[
        m("a.navbar-item", " Home "),
        m("a.navbar-item", " Documentation "),
        m(".navbar-item.has-dropdown.is-hoverable",[
          m("a.navbar-link", " More "),
          m(".navbar-dropdown",[
            m("a.navbar-item", " About "),
            m("a.navbar-item", " Jobs "),
            m("a.navbar-item", " Contact "),
            m("hr.navbar-divider"),
            m("a.navbar-item", " Report an issue "),
          ])
        ])
      ]),
      m(".navbar-end", links.map(link =>
        m(m.route.Link, {
          class: m.route.get()===link.href ? 'is-active' : '',
          selector: `a.navbar-item.is-tab[href=${link.href}]`
        }, link.title)
      ))
    ])
  ]),
  m('section.section',
    m('.container', vnode.children)
  ),
]}

export default (child) => ({
  view: () => m(layout, m(child))
})
