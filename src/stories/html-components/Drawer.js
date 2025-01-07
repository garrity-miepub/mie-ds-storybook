export const createDrawerHTML = ({
    isOpen = false,
    title = '',
    placement = 'bottom',
    showHeader = true,
    showCloseButton = true,
    triggerText = 'Open Drawer',
    content = '',
  }) => {
    const drawerClass = `ds-drawer ds-drawer--${placement}`;
    
    let drawerHTML = `
        <div data-is-open="${isOpen}">
            <button>${triggerText}</button>
            ${isOpen ? `
                <div class="ds-drawer__overlay">
                    <div class="${drawerClass}" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
                        ${showHeader ? `
                            <div class="ds-drawer__header">
                                ${title ? `<h2 id="drawer-title" class="ds-drawer__title">${title}</h2>` : ''}
                                ${showCloseButton ? `
                                    <button class="ds-drawer__close-button" aria-label="Close">
                                        <i class="fa fa-close" />
                                    </button>
                                ` : ''}
                            </div>
                        ` : ''}
                        <div class="ds-drawer__content">
                            ${content}
                        </div>
                    </div>
                </div>
            `: ''}
        </div>
    `;
  
    return drawerHTML;
  };