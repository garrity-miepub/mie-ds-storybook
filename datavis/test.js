import {
  Source,
  ComputedView,
  Grid,
} from 'wcdatavis';

jQuery(window.document).ready(function () {
  window.MIE = window.MIE || {};
  window.MIE.DEBUGGING = true;

  var source = new Source({
    type: 'http',
    url: 'fruit.csv'
  });
  var computedView = new ComputedView(source);
  new Grid({
    id: 'grid',
    computedView: computedView,
    table: {
      features: {
        limit: false,
        rowSelect: true,
      }
    }
  }, {
    title: 'DataVis NPM Example',
    showControls: true
  });
});
