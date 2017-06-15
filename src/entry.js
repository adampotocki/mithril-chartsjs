'use strict';

import m from 'mithril';

// models
import barModel from './models/barModel';
import barModelTwo from './models/barModelTwo';
import lineModel from './models/lineModel';
import doughnutModel from './models/doughnutModel';

// layout/view wrapper
import layoutWrapper from './layout';

// views
import allCharts from './views/allCharts';
import barCharts from './views/barCharts';
import lineCharts from './views/lineCharts';
import doughnutCharts from './views/doughnutCharts';
import highChart from './views/highChart';

// start fetching data for models
barModel.getData();
barModelTwo.getData();
lineModel.getData();
doughnutModel.getData();

const routes = {
  '/': layoutWrapper(allCharts),
  '/bar': layoutWrapper(barCharts),
  '/line': layoutWrapper(lineCharts),
  '/doughnut': layoutWrapper(doughnutCharts),
  '/highchart': layoutWrapper(highChart)
};

const appEntry = document.getElementById('appEntry');
// Routing
// m.route.prefix('');
m.route(appEntry, '/', routes);
