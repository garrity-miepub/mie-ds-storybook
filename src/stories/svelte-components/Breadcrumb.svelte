<script>
    export let items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details', href: '/products/details' },
    ];
  
    let isDropdownOpen = false;
  
    function toggleDropdown() {
      isDropdownOpen = !isDropdownOpen;
    }
  </script>
  
  <nav aria-label="Breadcrumb">
    <ol class="ds-breadcrumb">
      {#if items.length <= 3}
        {#each items as item, index}
          <li class="ds-breadcrumb__item">
            <a href={item.href} aria-current={index === items.length - 1 ? 'page' : undefined}>
              {item.label}
            </a>
            {#if index < items.length - 1}
              <span class="ds-breadcrumb__separator">/</span>
            {/if}
          </li>
        {/each}
      {:else}
        <li class="ds-breadcrumb__item">
          <a href={items[0].href}>
            {items[0].label}
          </a>
          <span class="ds-breadcrumb__separator">/</span>
        </li>
        <li class="ds-breadcrumb__item ds-breadcrumb__item--collapse-trigger">
          <button on:click={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
            ...
          </button>
          {#if isDropdownOpen}
            <ul class="ds-breadcrumb__dropdown">
              {#each items.slice(1, items.length - 2) as item}
                <li class="ds-breadcrumb__dropdown-item">
                  <a href={item.href}>{item.label}</a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
        {#each items.slice(-2) as item, index}
          <li class="ds-breadcrumb__item">
            <a href={item.href} aria-current={index === 1 ? 'page' : undefined}>
              {item.label}
            </a>
            {#if index === 0 && items.length > 1}
              <span class="ds-breadcrumb__separator">/</span>
            {/if}
          </li>
        {/each}
      {/if}
    </ol>
  </nav>