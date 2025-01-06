<script>
    export let classNames = '';
  </script>
  
  <div class={`animate-pulse bg-gray-200 rounded-md ${classNames}`} {...$$restProps}>
    <slot />
  </div>