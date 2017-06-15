'use strict';

import m from 'mithril';
import Highcharts from 'highcharts';

import './highChart.css';

const model = {
  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
  },
  subtitle: {
    text: 'Source: thesolarfoundation.com'
  },
  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      pointStart: 2010
    }
  },

  series: [{
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }]
};

export default {
  view(vnode) {
    return [
      m('h1.title.has-text-centered', 'Highcharts Sample'),
      m('.columns', [
        m('.column', [
          m('div#highChart', {
            oncreate(vnode) {
              Highcharts.chart(vnode.dom.id, model);
            }
          }, ''),
          m('br'),
          m('div#anotherChart', {
            oncreate(vnode) {

              // Radialize the colors
              Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, color => {
                return {
                  radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7
                  },
                  stops: [
                    [0, color],
                    [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                  ]
                };
              });

              // Build the chart
              Highcharts.chart(vnode.dom.id, {
                chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
                },
                title: {
                  text: 'Browser market shares. January, 2015 to May, 2015'
                },
                tooltip: {
                  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                  pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                      style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                      },
                      connectorColor: 'silver'
                    }
                  }
                },
                series: [{
                  name: 'Brands',
                  data: [
                    { name: 'Microsoft Internet Explorer', y: 56.33 },
                    {
                      name: 'Chrome',
                      y: 24.03,
                      sliced: true,
                      selected: true
                    },
                    { name: 'Firefox', y: 10.38 },
                    { name: 'Safari', y: 4.77 }, { name: 'Opera', y: 0.91 },
                    { name: 'Proprietary or Undetectable', y: 0.2 }
                  ]
                }]
              });

            }
          })
        ])
      ])
    ];
  }
};
