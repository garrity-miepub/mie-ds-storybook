<script lang="ts">
    import { writable, type Writable } from 'svelte/store';
    const { items } = $props<{
        items: any[]
    }>();
  
    let bookmarks = $state(false);
    let fullUrls = $state(true);
    let profileRadioValue = $state("benoit");
    let openMenuIndex = $state<number | null>(null);
     let openSubmenuIndex = $state<Writable<{[key:number]:{[key:number]:boolean | null}}>>(writable({}));
  
    function toggleMenu(index: number) {
        if(openMenuIndex === index){
          openMenuIndex = null;
        }else{
          openMenuIndex = index;
        }
    }
  
    const toggleSubmenu = (menuIndex, subIndex) => {
      openSubmenuIndex.update(current => {
         if(!current[menuIndex]){
             current[menuIndex] = {}
         }
         current[menuIndex][subIndex] = current[menuIndex][subIndex] ? null : true;
         return current;
       })
      };
  
    const handleKeyDown = (event, menuIndex, subIndex = null) => {
      if (event.key === 'Escape') {
          openMenuIndex = null;
          if(subIndex != null){
              openSubmenuIndex.update(current => {
                current[menuIndex][subIndex] = null
                 return current;
               })
          }
          return;
      }
  
      if(event.key === 'Enter' || event.key === " "){
          if(subIndex == null){
              toggleMenu(menuIndex);
          }else{
              toggleSubmenu(menuIndex, subIndex);
          }
      }
    };
  </script>
  
  <nav class="menubar">
    <ul class="menubar__list">
      {#each items as item, menuIndex}
        <li class="menubar__item">
          <button
            class="menubar__trigger"
            aria-haspopup="true"
            aria-expanded={openMenuIndex === menuIndex}
            onclick={() => toggleMenu(menuIndex)}
            onkeydown={(event) => handleKeyDown(event, menuIndex)}
          >
            {item.title}
          </button>
          {#if openMenuIndex === menuIndex}
            <ul class="menubar__dropdown">
              {#each item.items as subItem, subIndex}
                {#if subItem.type === 'separator'}
                  <li class="menubar__separator" ></li>
                {:else if subItem.type === 'sub'}
                    <li class="menubar__dropdown-item" >
                      <button
                         class="menubar__sub-trigger"
                         aria-haspopup="true"
                         aria-expanded={$openSubmenuIndex?.[menuIndex]?.[subIndex]}
                         onkeydown={(event) => handleKeyDown(event, menuIndex, subIndex)}
                         onclick={() => toggleSubmenu(menuIndex, subIndex)}
                     >
                          {subItem.title}
                      </button>
                         {#if $openSubmenuIndex?.[menuIndex]?.[subIndex]}
                             <ul class="menubar__sub-dropdown">
                                 {#each subItem.items as subSubItem}
                                   <li class="menubar__sub-dropdown-item">
                                    <button class="menu-item" role="menuitem">{subSubItem.title}</button>
                                    </li>
                                 {/each}
                             </ul>
                         {/if}
                      </li>
                {:else if subItem.type === 'checkbox'}
                     <li class="menubar__dropdown-item">
                       <label class="menu-checkbox-item" role="menuitemcheckbox">
                          <input type="checkbox" bind:checked={subItem.bindValue} />{subItem.title}
                       </label>
                     </li>
                 {:else if subItem.type === 'radioGroup'}
                     <li class="menubar__dropdown-item">
                          <div class="radio-group" role="radiogroup">
                             {#each subItem.items as radioItem}
                                <label class="radio-item" role="menuitemradio">
                                   <input type="radio"  bind:group={profileRadioValue}  value={radioItem.value}/>{radioItem.title}
                               </label>
                             {/each}
                          </div>
                    </li>
                {:else}
                <li class="menubar__dropdown-item">
                  <button class="menu-item" role="menuitem">
                      {subItem.title}
                      {#if subItem.shortcut}
                          <span class="menu-shortcut">{subItem.shortcut}</span>
                      {/if}
                  </button>
                </li>
                {/if}
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>