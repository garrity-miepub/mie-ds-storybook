<script>
    import { tick } from 'svelte';
  
    export let frameworks = [
      {
        value: 'sveltekit',
        label: 'SvelteKit',
      },
      {
        value: 'next.js',
        label: 'Next.js',
      },
      {
        value: 'nuxt.js',
        label: 'Nuxt.js',
      },
      {
        value: 'remix',
        label: 'Remix',
      },
      {
        value: 'astro',
        label: 'Astro',
      },
    ];
  
    export let placeholder = 'Select a framework...';
  
    let open = false;
    let value = '';
    let inputValue = '';
    let triggerElement;
  
    $: selectedValue = frameworks.find((f) => f.value === value)?.label ?? placeholder;
    $: filteredFrameworks = frameworks.filter((f) =>
      f.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  
    function toggleOpen() {
      open = !open;
      if (open) {
        tick().then(() => {
          document.getElementById('combobox-input')?.focus();
        });
      }
    }
  
    function closeAndFocusTrigger() {
      open = false;
      tick().then(() => {
        triggerElement?.focus();
      });
    }
  
    function handleItemClick(itemValue) {
      value = itemValue;
      closeAndFocusTrigger();
    }
  </script>
  
  <div class="combobox">
    <button
      bind:this={triggerElement}
      type="button"
      aria-haspopup="listbox"
      aria-expanded={open}
      class="border border-gray-300 rounded px-4 py-2 w-[200px] text-left flex items-center justify-between"
      on:click={toggleOpen}
    >
      {selectedValue}
      <i class="fa-solid fa-chevron-down ml-2 opacity-50"></i>
    </button>
  
    {#if open}
      <div class="combobox-menu" tabindex="-1" role="listbox">
        <div class="p-2">
          <input
            type="text"
            id="combobox-input"
            placeholder="Search framework..."
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={inputValue}
          />
        </div>
        {#if filteredFrameworks.length === 0}
          <div class="py-2 px-4 text-gray-500">No framework found.</div>
        {:else}
          {#each filteredFrameworks as framework}
            <div
              class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              role="option"
              tabindex="-1"
              aria-selected={value === framework.value}
              on:click={() => handleItemClick(framework.value)}
              on:keydown={(event) => {
                if (event.key === 'Enter') {
                  handleItemClick(framework.value);
                }
              }}
            >
              <i class={`fa-solid fa-check mr-2 h-4 w-4 ${value !== framework.value ? 'text-transparent' : ''}`}></i>
              {framework.label}
            </div>
          {/each}
        {/if}
      </div>
    {/if}
  </div>
  
  <style>
    .combobox{
        position: relative;
    }

    .combobox-menu{
        position: absolute;
    }
  </style>