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
  
  <style>
    .ds-drawer__overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 50;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      overflow: hidden;
    }
  
    .ds-drawer {
      background-color: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      z-index: 51;
      overflow-y: auto;
      transition: transform 0.3s ease-in-out;
    }
  
    /* Bottom Drawer */
    .ds-drawer--bottom {
      border-radius: 0.5rem 0.5rem 0 0;
      transform: translateY(100%);
      position: absolute;
      bottom: 40%;
      height: 40vh;
      width: 100%;
      align-self: flex-end;
    }
    .ds-drawer--bottom.svelte-1pq58b7.svelte-1pq58b7 {
      transform: translateY(0);
    }
  
    /* Left Drawer */
    .ds-drawer--left {
      position: absolute;
      top: 0;
      left: 80%;
      height: 100%;
      width: 80vw;
      border-radius: 0 0.5rem 0.5rem 0;
      transform: translateX(-100%);
    }
    .ds-drawer--left.svelte-1pq58b7.svelte-1pq58b7 {
      transform: translateX(0);
    }
    .ds-drawer__overlay {
      align-items: center;
      justify-content: flex-start;
    }
  
    /* Right Drawer */
    .ds-drawer--right {
      position: absolute;
      top: 0;
      right: 80%;
      height: 100%;
      width: 80vw;
      border-radius: 0.5rem 0 0 0.5rem;
      transform: translateX(100%);
    }
    .ds-drawer--right.svelte-1pq58b7.svelte-1pq58b7 {
      transform: translateX(0);
    }
    .ds-drawer__overlay {
      align-items: center;
      justify-content: flex-end;
    }
  
    .ds-drawer__header {
      padding: 1rem;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .ds-drawer__title {
      font-size: 1.25rem;
      font-weight: bold;
    }
  
    .ds-drawer__close-button {
      background: none;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }
  
    .ds-drawer__content {
      padding: 1rem;
    }
  
    /* Transitions for opening */
    :global(.ds-drawer--bottom) {
      transition: transform 0.3s ease-in-out;
    }
    :global(.ds-drawer--bottom.svelte-1pq58b7) {
      transform: translateY(0);
    }
  
    :global(.ds-drawer--left) {
      transition: transform 0.3s ease-in-out;
    }
    :global(.ds-drawer--left.svelte-1pq58b7) {
      transform: translateX(0);
    }
  
    :global(.ds-drawer--right) {
      transition: transform 0.3s ease-in-out;
    }
    :global(.ds-drawer--right.svelte-1pq58b7) {
      transform: translateX(0);
    }
  </style>