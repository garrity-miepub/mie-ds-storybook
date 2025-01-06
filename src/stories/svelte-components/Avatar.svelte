<script>
    export let letter = 'A';
    export let image = null;
    export let size = 'medium';
  
    $: avatarClass = `ds-avatar--${size}`;
  </script>
  
  <div class="ds-avatar {avatarClass}">
    {#if image}
      <img src={image} alt="Avatar" />
    {:else}
      <span>{letter}</span>
    {/if}
  </div>