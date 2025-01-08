export const createMenubarHTML = ({
    items = [],
    bookmarks = false,
    fullUrls = true,
    profileRadioValue = "benoit",
      openMenuIndex = null,
      openSubmenuIndex = {},
    ...props
  }) => {
      
    let menubarElement;
  
        const toggleMenu = (index) => {
             openMenuIndex = openMenuIndex === index ? null : index;
           render();
         };
     
        const toggleSubmenu = (menuIndex, subIndex) => {
             if(!openSubmenuIndex[menuIndex]){
                  openSubmenuIndex[menuIndex] = {}
              }
              openSubmenuIndex[menuIndex][subIndex] = openSubmenuIndex[menuIndex][subIndex] ? null : true;
              render();
         };
     
         const handleKeyDown = (event, menuIndex, subIndex = null) => {
              if (event.key === 'Escape') {
                  openMenuIndex = null;
                  if(subIndex != null){
                    openSubmenuIndex[menuIndex][subIndex] = null;
                  }
                  render();
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
    
        const renderMenuItem = (subItem) => {
            if (subItem.type === 'separator') {
                return '<div class="menubar__separator"></div>'
            } else if (subItem.type === 'sub') {
                    return `
                    <button
                         class="menubar__sub-trigger"
                        aria-haspopup="true"
                        aria-expanded=${openSubmenuIndex[subItem.menuIndex]?.[subItem.subIndex] || false}
                        onkeydown="handleKeyDown(event, ${subItem.menuIndex}, ${subItem.subIndex})"
                        onclick="toggleSubmenu(${subItem.menuIndex}, ${subItem.subIndex})"
                        >${subItem.title}</button>
                    ${ openSubmenuIndex[subItem.menuIndex]?.[subItem.subIndex] ? `
                     <ul class="menubar__sub-dropdown">
                         ${subItem.items.map(subSubItem => `<li class="menubar__sub-dropdown-item">
                          <button class="menu-item" role="menuitem">${subSubItem.title}</button>
                          </li>`).join('')}
                     </ul>` : ''}
                 `;
            } else if (subItem.type === 'checkbox') {
                 return `
                  <label class="menu-checkbox-item" role="menuitemcheckbox">
                      <input type="checkbox" ${subItem.bindValue ? 'checked' : ''} onchange="this.dataset.bindValue = this.checked;render()"  />${subItem.title}
                  </label>
                 `;
             } else if (subItem.type === 'radioGroup'){
                return `
                     <div class="radio-group" role="radiogroup">
                         ${subItem.items.map(radioItem => `
                          <label class="radio-item" role="menuitemradio">
                              <input type="radio" onchange="this.dataset.value = this.value;render()"  name="profileRadio"  value="${radioItem.value}" ${radioItem.value == profileRadioValue ? 'checked' : ''} />${radioItem.title}
                           </label>
                        `).join('')}
                     </div>
                 `;
             } else {
                return `
                 <button class="menu-item" role="menuitem">
                     ${subItem.title}
                      ${subItem.shortcut ? `<span class="menu-shortcut">${subItem.shortcut}</span>` : ''}
                </button>
                 `;
             }
         };
    
         const render = () => {
             if(!menubarElement){
                 menubarElement = document.getElementById('menubar');
             }
            if(!menubarElement){return;}
            menubarElement.innerHTML = `
                <ul class="menubar__list">
                    ${items.map((item, menuIndex) => `
                      <li class="menubar__item">
                           <button
                                 class="menubar__trigger"
                                aria-haspopup="true"
                                aria-expanded=${openMenuIndex === menuIndex}
                                onkeydown="handleKeyDown(event, ${menuIndex})"
                                onclick="toggleMenu(${menuIndex})"
                             >${item.title}</button>
                        ${openMenuIndex === menuIndex ? `
                         <ul class="menubar__dropdown">
                             ${item.items.map((subItem,subIndex) => {
                                return renderMenuItem({...subItem, menuIndex, subIndex});
                             }).join('')}
                         </ul>
                         ` : ''}
                       </li>
                    `).join('')}
                </ul>
            `;
          Object.values(menubarElement.querySelectorAll('.menu-checkbox-item input[type="checkbox"]')).forEach(e => {
               if (e instanceof HTMLInputElement && e.dataset.bindValue != null) {
                  e.checked = e.dataset.bindValue == 'true';
               }
           })
          Object.values(menubarElement.querySelectorAll('.radio-item input[type="radio"]')).forEach(e => {
               if (e instanceof HTMLElement && e.dataset.value != null) {
                    profileRadioValue = e.dataset.value;
               }
          })
        };
    
    
    
        let initialHTML =  `
         <nav class="menubar" id="menubar" ${Object.entries(props).map(([key, value]) => `${key}="${value}"`).join(' ')}>
         </nav>
         <script>
            window.toggleMenu =  ${toggleMenu.toString()};
             window.toggleSubmenu =  ${toggleSubmenu.toString()};
             window.handleKeyDown =  ${handleKeyDown.toString()};
         </script>
         `;
        render();
       setTimeout(render, 0);

       return initialHTML;
  };