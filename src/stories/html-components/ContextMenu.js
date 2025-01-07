export const createContextMenuHTML = ({
    items = [],
    isOpen = false,
    menuX = 0,
    menuY = 0,
  }) => {

    let contextMenuHTML = `
        <div role="button" aria-haspopup="true" class="relative" tabindex="0" data-is-open="${isOpen}" data-menu-x="${menuX}" data-menu-y="${menuY}">
        Trigger
        ${isOpen ? `
            <div class="context-menu" style="left: ${menuX}px; top: ${menuY}px;">
            ${items.map(item =>
                `<button class="context-menu-item" data-item="${item}">
                ${item}
                </button>`
              ).join('')}
            </div>
          `: ''}
        </div>
      `;
    return contextMenuHTML;
  };