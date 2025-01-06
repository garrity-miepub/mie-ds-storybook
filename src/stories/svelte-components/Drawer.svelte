<script>
    import { createEventDispatcher } from 'svelte';
  
    export let isOpen = false;
    export let title = '';
    export let placement = 'bottom'; // 'bottom', 'right', 'left'
    export let showHeader = true;
    export let showCloseButton = true;
    export let triggerText = 'Open Drawer';
    export let content = '';
  
    const dispatch = createEventDispatcher();
  
    function closeDrawer() {
      isOpen = false;
      dispatch('close');
    }
  
    function handleTriggerClick() {
      isOpen = true;
    }
  
    $: drawerClass = `ds-drawer ds-drawer--${placement}`;
  </script>
  
  <button on:click={handleTriggerClick}>{triggerText}</button>
  
  {#if isOpen}
    <div class="ds-drawer__overlay" on:click|self={closeDrawer}>
      <div class={drawerClass} role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        {#if showHeader}
          <div class="ds-drawer__header">
            {#if title}
              <h2 id="drawer-title" class="ds-drawer__title">{title}</h2>
            {/if}
            {#if showCloseButton}
              <button class="ds-drawer__close-button" aria-label="Close" on:click={closeDrawer}>
                <i class="fa fa-close" />
              </button>
            {/if}
          </div>
        {/if}
        <div class="ds-drawer__content">
          {@html content}
        </div>
      </div>
    </div>
  {/if}