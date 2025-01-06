<script>
  import { onMount } from 'svelte';
  import '../../node_modules/datavis-example/test'; // Assuming this is the main script
  import '../../node_modules/datavis-example/page/base.css'; // If there's a corresponding stylesheet
</script>

<div class="datavis-container">
  <div id="grid" class="datavis-grid"></div>
</div>

<style>
  .datavis-container {
    padding: 1rem;
  }

  .datavis-grid {
    min-height: 400px;
  }
</style>
