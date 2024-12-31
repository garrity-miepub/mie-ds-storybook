<script>
  import { onMount } from 'svelte';
  import jQuery from 'jquery';

  onMount(async () => {
    // @ts-ignore
    window.jQuery = jQuery;
    // @ts-ignore
    window.$ = jQuery;
    
    // @ts-ignore
    await import('jquery-ui/dist/jquery-ui.min.js');
    await import('wcdatavis');

    // @ts-ignore
    const { Source, ComputedView, Grid } = window.MIE.WC_DataVis;
    const source = new Source({ type: 'http', url: './datavis/fruit.csv' });
    const computedView = new ComputedView(source);
    new Grid(
      {
        id: 'grid',
        computedView,
      },
      {
        title: 'DataVis Example',
        showControls: true,
      }
    );
  });
</script>

<div id="grid"></div>