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