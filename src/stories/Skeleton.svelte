<script>
    export let classNames = '';
  </script>
  
  <div class={`animate-pulse bg-gray-200 rounded-md ${classNames}`} {...$$restProps}>
    <slot />
  </div>
  
  <style>
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      background: gray;
    }
  
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    }

    .rounded-md{
        border-radius: 4px;
    }

    .rounded-full{
        border-radius: 50%;
    }
  </style>