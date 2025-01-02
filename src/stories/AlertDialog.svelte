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
  
  <style>
    .ds-alert-dialog {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  
    .ds-alert-dialog__header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .ds-alert-dialog h2 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1.2em;
      font-weight: bold;
    }
  
    .ds-alert-dialog__icon {
      margin-right: 8px;
      font-size: 1em;
      color: inherit;
    }
  
    .ds-alert-dialog--default {
      border-color: #ccc;
    }
  
    .ds-alert-dialog--informative {
      border-color: #17a2b8;
      background-color: #e8f8f9;
      color: #0f6674;
    }
  
    .ds-alert-dialog--warning {
      border-color: #ffc107;
      background-color: #fffaf0;
      color: #856404;
    }
  
    .ds-alert-dialog--danger {
      border-color: #dc3545;
      background-color: #f8d7da;
      color: #721c24;
    }
  
    .ds-alert-dialog--success {
      border-color: #28a745;
      background-color: #d4edda;
      color: #155724;
    }
  </style>