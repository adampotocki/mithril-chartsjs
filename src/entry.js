'use strict';

import m from 'mithril';

import layout from './views/layout';
import allCharts from './views/allCharts';
import barCharts from './views/barCharts';
import lineCharts from './views/lineCharts';
import doughnutCharts from './views/doughnutCharts';

const routes = {
  '/': layout(allCharts),
  '/bar': layout(barCharts),
  '/line': layout(lineCharts),
  '/doughnut': layout(doughnutCharts)
};

const appEntry = document.getElementById('appEntry');
// Routing
// m.route.prefix('');
m.route(appEntry, '/', routes);
