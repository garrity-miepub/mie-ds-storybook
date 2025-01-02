<script>
    export let checked = false;
    export let onChange;
    export let label = '';
    export let size = 'default';
    export let hideLabel = false;
  
    $: isChecked = checked; // Reactive declaration for internal state
  
    $: checkboxClass = ['checkbox-container', size !== 'default' ? size : ''];
  
    function handleChange(event) {
      const newChecked = event.target.checked;
      isChecked = newChecked;
      if (onChange) {
        onChange(newChecked);
      }
    }
  </script>
  
  <label class={checkboxClass.join(' ')}>
    <input
      type="checkbox"
      bind:checked={isChecked}
      on:change={handleChange}
    />
    <span class="checkbox"></span>
    {#if !hideLabel && label}
      <span class="label">{label}</span>
    {/if}
  </label>
  