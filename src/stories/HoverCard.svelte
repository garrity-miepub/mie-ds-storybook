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
  
  <style>
    .ds-hover-card-wrapper {
      position: relative;
      display: inline-block;
    }
  
    .ds-hover-card-target {
      cursor: pointer;
      text-decoration: underline;
    }
  
    .ds-hover-card-content {
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 0.25rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      z-index: 10;
      min-width: 200px;
    }
  
    .ds-hover-card-icon {
      margin-bottom: 0.5rem;
    }
  
    .ds-hover-card-header {
      margin-bottom: 0.75rem;
    }
  
    .ds-hover-card-header h4 {
      font-weight: bold;
      font-size: 1rem;
      margin: 0;
    }
  
    .ds-hover-card-body {
      margin-bottom: 0.75rem;
    }
  
    .ds-hover-card-footer a {
      color: blue;
      text-decoration: none;
    }
  </style>