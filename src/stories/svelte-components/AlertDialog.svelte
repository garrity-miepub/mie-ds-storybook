<script>
    export let title = 'Default Title';
    export let content = 'This is the default alert dialog content.';
    export let type = 'Default';
    export let icon = null;
  
    $: dialogClass = `ds-alert-dialog--${type.toLowerCase()}`;
  
    function renderIcon(iconClass) {
      return `<i class="fas ${iconClass}"></i>`;
    }
  </script>
  
  <div class="ds-alert-dialog {dialogClass}" role="dialog" aria-modal="true" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <div class="ds-alert-dialog__header">
      <h2 id="alert-dialog-title">
        {#if icon}
          <span class="ds-alert-dialog__icon" role="img" aria-label="Alert Icon">
            {@html renderIcon(icon)}
          </span>
        {/if}
        {title}
      </h2>
    </div>
    <div id="alert-dialog-description">
      <p>{content}</p>
    </div>
  </div>
