export const createInputHTML = ({
    label = '',
    ariaLabel = '',
    leadingIcon = 'none',
    trailingIcon = 'none',
    state = 'default',
    helperText = '',
    value = '',
    focused = false,
  }) => {

    const iconMap = {
        user: '<i class="fa fa-user"></i>',
        check: '<i class="fa fa-check-circle"></i>',
        warning: '<i class="fa fa-exclamation-triangle"></i>',
      };

    const inputClassNames = [
        'ds-input',
        state !== 'default' ? state : '',
        (focused || value) ? 'ds-input--has-value' : '',
    ].filter(Boolean).join(' ');
    
    const helperTextClassNames = [
        'ds-helper-text',
        state !== 'default' ? state : '',
    ].filter(Boolean).join(' ');
    
    const hasLeadingIcon = leadingIcon !== 'none';
    const hasTrailingIcon = trailingIcon !== 'none';

    const containerClassNames = [
        'ds-input-container',
        (hasLeadingIcon || hasTrailingIcon) ? 'has-icon' : '',
    ].filter(Boolean).join(' ');


    let inputHTML = `
        <div class="ds-input-wrapper" data-focused="${focused}" data-value="${value}">
            <div class="${containerClassNames}">
                ${hasLeadingIcon ? `
                    <div class="ds-input-icon leading ${state}">${iconMap[leadingIcon]}</div>
                    `: ''}
                <input
                    class="${inputClassNames}"
                    ${state === 'disabled' ? 'disabled' : ''}
                     value="${value}"
                     aria-label="${ariaLabel || label}"
                  />
                  ${label ? `
                     <label class="ds-input-label ${focused || value ? 'floating' : ''} ${state === 'disabled' ? 'disabled' : ''}">
                      ${label}
                     </label>
                    ` : ''}
                    ${hasTrailingIcon ? `
                        <div class="ds-input-icon trailing ${state}">${iconMap[trailingIcon]}</div>
                    `: ''}
            </div>
            ${helperText ? `<div class="${helperTextClassNames}">${helperText}</div>` : ''}
        </div>
    `;
    
    return inputHTML;
  };