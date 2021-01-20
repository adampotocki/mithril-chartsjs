import m from "mithril"

// models
import barModel   from './models/barModel'
import barModel2  from './models/barModelTwo'
import lineModel  from './models/lineModel'
import donutModel from './models/donutModel'

// layout/view wrapper
import layoutWrapper from './layout'

// views
import allCharts   from './views/allCharts'
import barCharts   from './views/barCharts'
import lineCharts  from './views/lineCharts'
import donutCharts from './views/donutCharts'

// start fetching data for models
barModel.getData()
barModel2.getData()
lineModel.getData()
donutModel.getData()

const links = [
  { path: "/all",
    module: layoutWrapper(allCharts),
    name: "All Charts"
  },
  { path: "/bar",
    module: layoutWrapper(barCharts),
    name: "Bar Chart"
  },
  { path: "/line",
    module: layoutWrapper(lineCharts),
    name: "Line Chart"
  },
  { path: "/donut",
    module: layoutWrapper(donutCharts),
    name: "Donut Chart"
  },
]

m.route.prefix = "#"
const mountNode = document.querySelector("#app")
const routes = {
  "/": layoutWrapper(allCharts)
}
links.forEach(link => routes[link.path] = link.module)
m.route(mountNode, "/", routes)
