<script>
    let isOpen = false;
    let menuX = 0;
    let menuY = 0;
  
    export let items = []; // Array of menu items (text)
  
    function openMenu(event) {
      event.preventDefault(); // Prevent default browser context menu
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
  
    // Close the menu when the component is unmounted
    onDestroy(() => {
      window.removeEventListener('click', handleClickOutside);
    });
  
    // Attach the click outside listener when the component mounts
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
  
  <style>
/* ContextMenu.svelte */
.context-menu {
  min-width: 150px;
  border-radius: 0.375rem; /* Equivalent to Tailwind's rounded-md */
  border: 1px solid #e5e7eb; /* Equivalent to Tailwind's border-gray-200 */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1); /* Similar to Tailwind's shadow-md */
  background-color: white;
  z-index: 50; /* Ensure it's above other content */
  overflow: hidden; /* Prevents rounded corners from being clipped by content */
  outline: none; /* Remove default focus outline */
}

.context-menu-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 1rem; /* Equivalent to Tailwind's px-4 */
  padding-right: 1rem;
  padding-top: 0.5rem; /* Equivalent to Tailwind's py-2 */
  padding-bottom: 0.5rem;
  text-align: left;
  font-size: 0.875rem; /* Equivalent to Tailwind's text-sm */
  color: #374151; /* Equivalent to Tailwind's text-gray-700 */
  cursor: pointer;
  outline: none; /* Remove default focus outline */
}

.context-menu-item:hover {
  background-color: #f9fafb; /* Equivalent to Tailwind's hover:bg-gray-50 or hover:bg-gray-100 */
}

.context-menu-item:focus {
  background-color: #f9fafb; /* Keep hover color on focus */
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px #bfdbfe; /* Example focus ring - adjust color */
}

.context-menu-item-inset {
  padding-left: 2rem; /* Increased left padding for inset items */
}

.context-menu-separator {
  border-bottom: 1px solid #e5e7eb; /* Equivalent to Tailwind's border-gray-200 */
  margin-top: 0.25rem; /* Small top margin */
  margin-bottom: 0.25rem; /* Small bottom margin */
}

.context-menu-sub {
  position: relative;
}

.context-menu-sub-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  outline: none;
}

.context-menu-sub-trigger:hover {
  background-color: #f9fafb;
}

.context-menu-sub-trigger:focus {
  background-color: #f9fafb;
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px #bfdbfe;
}

.context-menu-sub-content {
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 150px;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 60; /* Ensure it's above the parent menu */
}

.context-menu-checkbox-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  outline: none;
}

.context-menu-checkbox-item:hover {
  background-color: #f9fafb;
}

.context-menu-checkbox-item:focus {
  background-color: #f9fafb;
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px #bfdbfe;
}

.context-menu-checkbox-item::before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 1px solid #9ca3af; /* Equivalent to Tailwind's border-gray-400 */
  border-radius: 0.25rem; /* Equivalent to Tailwind's rounded */
  margin-right: 0.5rem;
  vertical-align: middle;
}

.context-menu-checkbox-item[data-checked="true"]::before {
  background-color: #3b82f6; /* Example checked color - Tailwind's bg-blue-500 */
  border-color: #3b82f6;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

.context-menu-radio-group-label {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem; /* Equivalent to Tailwind's text-xs */
  font-weight: 500; /* Equivalent to Tailwind's font-medium */
  color: #6b7280; /* Equivalent to Tailwind's text-gray-500 */
}

.context-menu-radio-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  outline: none;
}

.context-menu-radio-item:hover {
  background-color: #f9fafb;
}

.context-menu-radio-item:focus {
  background-color: #f9fafb;
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px #bfdbfe;
}

.context-menu-radio-item::before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 1px solid #9ca3af;
  border-radius: 50%;
  margin-right: 0.5rem;
  vertical-align: middle;
}

.context-menu-radio-item[data-state="checked"]::before {
  border-color: #3b82f6;
  background-color: #3b82f6;
  background-clip: content-box;
  padding: 0.2rem; /* Adjust for the inner circle size */
  border: 0.2rem solid white; /* Creates the inner circle effect */
}

.context-menu-shortcut {
  margin-left: auto;
  opacity: 0.6;
  font-size: 0.75rem;
  color: #6b7280;
}
  </style>