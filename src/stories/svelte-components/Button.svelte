<!-- Button.svelte -->
<script>
  export let type = 'primary';
  export let label = 'Button';
  export let leadingIcon = 'none';
  export let trailingIcon = 'none';
  export let size = 'default';
  export let customIcon = 'default';

  $: buttonClass = [
    'button',
    type,
    size !== 'default' ? size : '',
    customIcon === 'icon-only' ? 'icon-only' : ''
  ].filter(Boolean);

  // Function to render Font Awesome icons
  function renderIcon(icon) {
    switch (icon) {
      case 'envelope':
        return `<i class="fas fa-envelope"></i>`;
      case 'close':
        return `<i class="fas fa-times"></i>`;
      case 'user':
        return `<i class="fas fa-user"></i>`;
      case 'lock':
        return `<i class="fas fa-lock"></i>`;
      case 'chevronDown':
        return `<i class="fas fa-chevron-down"></i>`;
      case 'chevronRight':
        return `<i class="fas fa-chevron-right"></i>`;
      case 'download':
        return `<i class="fas fa-download"></i>`;
      default:
        return '';
    }
  }

  // Set ariaLabel based on 'customIcon' prop
  $: ariaLabel =
    customIcon === 'icon-only' ? (label || 'Icon button') : null;
</script>

<button
  type="button"
  class={buttonClass.join(' ')}
  aria-label={ariaLabel}
  title={ariaLabel}
>
  {#if leadingIcon !== 'none'}
    <span class="icon leading-icon">
      {@html renderIcon(leadingIcon)}
    </span>
  {/if}

  {#if customIcon !== 'icon-only'}
    <label>{label}</label>
  {/if}

  {#if trailingIcon !== 'none'}
    <span class="icon trailing-icon">
      {@html renderIcon(trailingIcon)}
    </span>
  {/if}
</button>