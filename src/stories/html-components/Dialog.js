export const createDialogHTML = ({
    isOpen = false,
    title = '',
    content = '',
    triggerText = 'Open Dialog',
    showHeader = true,
    showFooter = true,
  }) => {
    let dialogHTML = `
    <div data-is-open="${isOpen}" >
        ${isOpen ? `
        <div class="ds-dialog__overlay">
            <div class="ds-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-description">
                ${showHeader ? `
                    <div class="ds-dialog__header">
                        ${title ? `<h2 id="dialog-title" class="ds-dialog__title">${title}</h2>` : ''}
                    </div>
                `: ''}
                <div id="dialog-description" class="ds-dialog__body">
                    ${content}
                </div>
                ${showFooter ? `
                    <div class="ds-dialog__footer">
                        <button >Close</button>
                    </div>
                `: ''}
            </div>
        </div>
            ` : ''}
        <button >${triggerText}</button>
    </div>
    `;
  
    return dialogHTML;
  };