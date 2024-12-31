<!-- src/components/Alert.svelte -->
<script>
    // Define component props with default values
    export let type = 'informative'; // 'informative', 'warning', 'success', 'danger'
    export let icon = 'fa-info-circle'; // Font Awesome icon class
    export let heading = 'Default Heading';
    export let content = 'This has no styles applied';
    export let link = 'Default Link';
    export let linkPath = '#'; // URL for the link
  
    // Compute the alert class based on the `type` prop
    $: alertClass = `ds-alert--${type}`;
  
    // Function to render Font Awesome icons
    function renderIcon(iconClass) {
      return `<i class="fas ${iconClass}"></i>`;
    }
  </script>
  
  <div class={alertClass} role="alert" aria-label="alert message">
    <div class="ds-col--1">
    <span
        class="ds-icon"
        role="img"
        aria-label={type + ' icon'}
        >
        {@html renderIcon(icon)}
    </span>        
    </div>
    <div class="ds-col--10">
        <span class="label">{heading}</span>
        <span>{content}</span>
        <span><a href={linkPath}>{link}</a></span>    
    </div>
  </div>
  