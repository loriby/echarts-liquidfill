var echarts = require('echarts');

require('./liquidFillSeries');
require('./liquidFillView');


echarts.registerVisual(
    echarts.util.curry(
        require('echarts/lib/visual/dataColor'), 'liquidFill'
    )
);
