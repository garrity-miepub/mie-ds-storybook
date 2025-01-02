<script>
    export let type = 'informative';
    export let icon = 'fa-info-circle';
    export let heading = 'Default Heading';
    export let content = 'This has no styles applied';
    export let link = 'Default Link';
    export let linkPath = '#';
  
    $: alertClass = `ds-alert--${type}`;
  
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
  