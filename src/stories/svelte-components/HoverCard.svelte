<script>
    export let targetText = 'Hover Over Me';
    export let iconClass = null; // Font Awesome class or similar
    export let header = null;
    export let content = null;
    export let linkHref = null;
    export let linkText = null;
  
    let isHovering = false;
  
    function handleMouseEnter() {
      isHovering = true;
    }
  
    function handleMouseLeave() {
      isHovering = false;
    }
  </script>
  
  <div class="ds-hover-card-wrapper">
    <span
      class="ds-hover-card-target"
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
    >
      {targetText}
    </span>
  
    {#if isHovering}
      <div class="ds-hover-card-content">
        {#if iconClass}
          <div class="ds-hover-card-icon">
            <i class={iconClass}></i>
          </div>
        {/if}
        {#if header}
          <div class="ds-hover-card-header">
            <h4>{header}</h4>
          </div>
        {/if}
        {#if content}
          <div class="ds-hover-card-body">
            <p>{content}</p>
          </div>
        {/if}
        {#if linkHref && linkText}
          <div class="ds-hover-card-footer">
            <a href={linkHref}>{linkText}</a>
          </div>
        {/if}
      </div>
    {/if}
    </div>