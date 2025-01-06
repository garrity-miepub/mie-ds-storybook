<script>
    import { createEventDispatcher } from 'svelte';
  
    export let label = '';
    export let ariaLabel = '';
    export let leadingIcon = 'none';
    export let trailingIcon = 'none';
    export let state = 'default';
    export let helperText = '';
    export let value = undefined; // Make it undefined initially for uncontrolled
    export let onFocus = (_event) => {}; // Accept an optional event argument
    export let onBlur = (_event) => {};  // Accept an optional event argument
  
    const dispatch = createEventDispatcher();
    let focused = false;
    let internalValue = '';
    let inputId = `input-${Math.random().toString(36).substring(2, 15)}`; // Generate a unique ID
  
    // Determine if the component is controlled
    $: isControlled = value !== undefined;
  
    // Use either controlled value or internal state
    $: inputValue = isControlled ? value : internalValue;
  
    // Handle input changes
    const handleChange = (event) => {
      if (isControlled) {
        dispatch('change', event.target.value);
      } else {
        internalValue = event.target.value;
      }
    };
  
    const handleFocus = (event) => {
      focused = true;
      onFocus(event);
    };
  
    const handleBlur = (event) => {
      focused = false;
      onBlur(event);
    };
  
    const inputClassNames = [
      'ds-input',
      state !== 'default' ? state : '',
      (focused || inputValue) ? 'ds-input--has-value' : '',
    ].filter(Boolean).join(' ');
  
    const helperTextClassNames = [
      'ds-helper-text',
      state !== 'default' ? state : '',
    ].filter(Boolean).join(' ');
  
    // Determine if icons are present
    $: hasLeadingIcon = leadingIcon !== 'none';
    $: hasTrailingIcon = trailingIcon !== 'none';
    $: containerClassNames = [
      'ds-input-container',
      (hasLeadingIcon || hasTrailingIcon) ? 'has-icon' : '',
    ].filter(Boolean).join(' ');
  
    const iconMap = {
      user: '<i class="fa fa-user"></i>',
      check: '<i class="fa fa-check-circle"></i>',
      warning: '<i class="fa fa-exclamation-triangle"></i>',
    };
  </script>
  
  <div class="ds-input-wrapper">
    <div class={containerClassNames}>
      {#if hasLeadingIcon}
        <div class={`ds-input-icon leading ${state}`}>{@html iconMap[leadingIcon]}</div>
      {/if}
      <input
        class={inputClassNames}
        disabled={state === 'disabled'}
        on:focus={handleFocus}
        on:blur={handleBlur}
        on:input={handleChange}
        bind:value={inputValue}
        aria-label={ariaLabel || label}
        id={inputId}
      />
      {#if label}
        <label
          class={`ds-input-label ${
            focused || inputValue ? 'floating' : ''
          } ${state === 'disabled' ? 'disabled' : ''}`}
          for={inputId}
        >
          {label}
        </label>
      {/if}
      {#if hasTrailingIcon}
        <div class={`ds-input-icon trailing ${state}`}>{@html iconMap[trailingIcon]}</div>
      {/if}
    </div>
    {#if helperText}
      <div class={helperTextClassNames}>{helperText}</div>
    {/if}
  </div>