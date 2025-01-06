export const Button = ({
    type = 'primary',
    label,
    leadingIcon = 'none',
    trailingIcon = 'none',
    size = 'default',
    customIcon = 'default',
    ...props
  }) => {
    const buttonClass = ['button'];
  
    if (type === 'primary') {
      buttonClass.push('primary');
    } else if (type === 'secondary') {
      buttonClass.push('secondary');
    } else if (type === 'tertiary') {
      buttonClass.push('tertiary');
    }
  
    if (size === 'small') {
      buttonClass.push('small');
    } else if (size === 'large') {
      buttonClass.push('large');
    }
  
    if (customIcon === 'icon-only') {
      buttonClass.push('icon-only');
    }
  
    const renderIcon = (icon) => {
      switch (icon) {
        case 'envelope':
          return '<i class="fas fa-envelope"></i>';
        case 'close':
          return '<i class="fas fa-times"></i>';
        case 'user':
          return '<i class="fas fa-user"></i>';
        case 'lock':
          return '<i class="fas fa-lock"></i>';
        case 'chevronDown':
          return '<i class="fas fa-chevron-down"></i>';
        case 'chevronRight':
          return '<i class="fas fa-chevron-right"></i>';
        case 'download':
          return '<i class="fas fa-download"></i>';
        default:
          return '';
      }
    };
  
    const getAriaLabel = () => {
      if (customIcon === 'icon-only') {
        return label || 'Icon button';
      }
      return null;
    };
  
return `<button type="button" class="${buttonClass.join(' ')}" aria-label="${getAriaLabel() || ''}" title="${getAriaLabel() || ''}" ${Object.entries(props) .map(([key, value]) => `${key}="${value}"`) .join(' ')}>
    ${leadingIcon !== 'none' ? `<span class="icon leading-icon">${renderIcon(leadingIcon)}</span>` : ''}${customIcon !== 'icon-only' ? `<label>${label}</label>` : ''}${trailingIcon !== 'none' ? `<span class="icon trailing-icon">${renderIcon(trailingIcon)}</span>` : ''}
</button>`;
};