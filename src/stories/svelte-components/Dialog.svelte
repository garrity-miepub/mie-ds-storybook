<script>
    import { createEventDispatcher } from 'svelte';
  
    export let isOpen = false;
    export let title = '';
    export let content = '';
    export let triggerText = 'Open Dialog';
    export let showHeader = true;
    export let showFooter = true;
  
    const dispatch = createEventDispatcher();
  
    function closeDialog() {
      isOpen = false;
      dispatch('close');
    }
  
    function handleTriggerClick() {
      isOpen = true;
    }
  </script>
  
  {#if isOpen}
    <div class="ds-dialog__overlay" on:click|self={closeDialog}>
      <div class="ds-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-description">
        {#if showHeader}
          <div class="ds-dialog__header">
            {#if title}
              <h2 id="dialog-title" class="ds-dialog__title">{title}</h2>
            {/if}
          </div>
        {/if}
        <div id="dialog-description" class="ds-dialog__body">
          <slot>{content}</slot>
        </div>
        {#if showFooter}
          <div class="ds-dialog__footer">
            <slot name="footer">
              <button on:click={closeDialog}>Close</button>
            </slot>
          </div>
        {/if}
      </div>
    </div>
  {/if}
  
  <button on:click={handleTriggerClick}>{triggerText}</button>
  
  <style>
    .ds-dialog__overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .ds-dialog__content {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      width: 90vw;
      max-width: 500px;
    }
  
    .ds-dialog__header {
      margin-bottom: 15px;
    }
  
    .ds-dialog__title {
      font-size: 1.5rem;
      font-weight: bold;
    }
  
    .ds-dialog__body {
      margin-bottom: 20px;
    }
  
    .ds-dialog__footer {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
  </style>