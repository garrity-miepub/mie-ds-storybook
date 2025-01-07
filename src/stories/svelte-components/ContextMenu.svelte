<script>
    let isOpen = false;
    let menuX = 0;
    let menuY = 0;
  
    export let items = [];
  
    function openMenu(event) {
      event.preventDefault();
      isOpen = true;
      menuX = event.clientX;
      menuY = event.clientY;
    }
  
    function closeMenu() {
      isOpen = false;
    }
  
    function handleClickOutside(event) {
      if (isOpen && !event.target.closest('.context-menu')) {
        closeMenu();
      }
    }
  
    onDestroy(() => {
      window.removeEventListener('click', handleClickOutside);
    });
  
    onMount(() => {
      window.addEventListener('click', handleClickOutside);
    });
  
    import { onMount, onDestroy } from 'svelte';
  </script>
  
  <div role="button" aria-haspopup="true" on:contextmenu={openMenu} class="relative" tabindex="0">
    <slot />Trigger
  
    {#if isOpen}
      <div class="context-menu" style="left: {menuX}px; top: {menuY}px;">
        {#each items as item}
          <button class="context-menu-item" on:click={() => {
            console.log(`Clicked: ${item}`);
            closeMenu();
          }}>
            {item}
          </button>
        {/each}
      </div>
    {/if}
  </div>