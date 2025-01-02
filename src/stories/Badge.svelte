<script>
    export let filled = true;
    export let type = 'default';
    export let leadingIcon = null;
    export let trailingIcon = null;
    export let label = 'Badge';
  
    $: badgeClass = `ds-badge--${type}`;
    $: badgeStyleClass = filled ? 'ds-badge--filled' : 'ds-badge--outlined';
  
    function renderIcon(iconClass) {
      return `<i class="fas ${iconClass}"></i>`;
    }
  </script>
  
  <span class="ds-badge {badgeClass} {badgeStyleClass}">
    {#if leadingIcon}
      <span class="ds-badge__icon ds-badge__icon--leading" role="img" aria-label="Leading Icon">
        {@html renderIcon(leadingIcon)}
      </span>
    {/if}
    {label}
    {#if trailingIcon}
      <span class="ds-badge__icon ds-badge__icon--trailing" role="img" aria-label="Trailing Icon">
        {@html renderIcon(trailingIcon)}
      </span>
    {/if}
  </span>
  
  <style>
    .ds-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.25em 0.6em;
      font-size: 0.75em;
      font-weight: bold;
      line-height: 1;
      border-radius: 0.25rem;
      text-align: center;
      white-space: nowrap;
    }
  
    .ds-badge__icon {
      display: inline-flex;
      align-items: center;
      margin: 0 0.25em;
    }
  
    .ds-badge__icon--leading {
      margin-left: 0;
      margin-right: 0.5em;
    }
  
    .ds-badge__icon--trailing {
      margin-left: 0.5em;
      margin-right: 0;
    }
  
    /* Filled Styles */
    .ds-badge--filled {
      color: #fff;
    }
  
    .ds-badge--filled.ds-badge--default {
      background-color: #6c757d;
    }
  
    .ds-badge--filled.ds-badge--informative {
      background-color: #17a2b8;
    }
  
    .ds-badge--filled.ds-badge--warning {
      background-color: #ffc107;
    }
  
    .ds-badge--filled.ds-badge--danger {
      background-color: #dc3545;
    }
  
    .ds-badge--filled.ds-badge--success {
      background-color: #28a745;
    }
  
    /* Outlined Styles */
    .ds-badge--outlined {
      background-color: transparent;
    }
  
    .ds-badge--outlined.ds-badge--default {
      color: #6c757d;
      border: 1px solid #6c757d;
    }
  
    .ds-badge--outlined.ds-badge--informative {
      color: #17a2b8;
      border: 1px solid #17a2b8;
    }
  
    .ds-badge--outlined.ds-badge--warning {
      color: #ffc107;
      border: 1px solid #ffc107;
    }
  
    .ds-badge--outlined.ds-badge--danger {
      color: #dc3545;
      border: 1px solid #dc3545;
    }
  
    .ds-badge--outlined.ds-badge--success {
      color: #28a745;
      border: 1px solid #28a745;
    }
  </style>