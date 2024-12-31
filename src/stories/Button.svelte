<!-- <script>
  import './button.css';

  /**
   * @typedef {Object} Props
   * @property {boolean} [primary] Is this the principal call to action on the page?
   * @property {string} [backgroundColor] What background color to use
   * @property {'small' | 'medium' | 'large'} [size] How large should the button be?
   * @property {string} label Button contents
   * @property {() => void} [onClick] The onclick event handler
   */

  /** @type {Props} */
  const { primary = false, backgroundColor, size = 'medium', label, onClick } = $props();
</script>

<button
  type="button"
  class={['storybook-button', `storybook-button--${size}`].join(' ')}
  class:storybook-button--primary={primary}
  class:storybook-button--secondary={!primary}
  style:background-color={backgroundColor}
  onclick={onClick}
>
  {label}
</button> -->


<script>
  import './button.css';

  /**
   * Similar props as the React version
   */
  export let type = 'primary';            // 'primary' | 'secondary' | 'tertiary'
  export let label = 'Button';            // string
  export let leadingIcon = 'none';        // 'none' | 'envelope' | 'lock' | 'user' | 'close'
  export let trailingIcon = 'none';       // 'none' | 'chevronDown' | 'chevronRight' | 'download'
  export let size = 'default';            // 'default' | 'small' | 'large'
  export let customIcon = 'default';      // 'default' | 'icon-only'

  /**
   * Build the button's CSS classes, mirroring the React logic
   */
  $: buttonClass = ['button'];

  $: {
    if (type === 'primary') {
      buttonClass.push('primary');
    } else if (type === 'secondary') {
      buttonClass.push('secondary');
    } else if (type === 'tertiary') {
      buttonClass.push('tertiary');
    }
  }

  $: {
    if (size === 'small') {
      buttonClass.push('small');
    } else if (size === 'large') {
      buttonClass.push('large');
    }
  }

  $: {
    if (customIcon === 'icon-only') {
      buttonClass.push('icon-only');
    }
  }

  /**
   * Render the icon markup based on the string name
   * (requires appropriate CSS or Font Awesome setup)
   */
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

  /**
   * For icon-only buttons, set `aria-label` and `title`
   * so screen readers (and maybe tooltips) are available
   */
  $: ariaLabel = customIcon === 'icon-only'
    ? (label || 'Icon button')
    : null;
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
