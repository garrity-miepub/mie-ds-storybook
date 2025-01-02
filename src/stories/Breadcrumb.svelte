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
  
  <style>
    .ds-breadcrumb {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style: none;
    }
  
    .ds-breadcrumb__item {
      display: flex;
      align-items: center;
    }
  
    .ds-breadcrumb__separator {
      margin: 0 0.5em;
      color: #999;
    }
  
    .ds-breadcrumb__item a {
      color: #007bff;
      text-decoration: none;
    }
  
    .ds-breadcrumb__item a:hover {
      text-decoration: underline;
    }
  
    .ds-breadcrumb__item a[aria-current="page"] {
      color: #333;
      font-weight: bold;
      pointer-events: none;
    }
  
    .ds-breadcrumb__item--collapse-trigger {
      position: relative;
    }
  
    .ds-breadcrumb__item--collapse-trigger button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1em;
      padding: 0.2em 0.5em;
    }
  
    .ds-breadcrumb__dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0.5em 0;
      margin-top: 0.2em;
      min-width: 100px;
      z-index: 10;
      list-style: none;
      padding: 0;
      margin: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  
    .ds-breadcrumb__dropdown-item a {
      display: block;
      padding: 0.5em 1em;
      color: #333;
      text-decoration: none;
    }
  
    .ds-breadcrumb__dropdown-item a:hover {
      background-color: #f0f0f0;
    }
  </style>