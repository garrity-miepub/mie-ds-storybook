export const createBadgeHTML = ({
    filled = true,
    type = 'default',
    leadingIcon = null,
    trailingIcon = null,
    label = 'Badge',
  }) => {
    const badgeClass = `ds-badge--${type}`;
    const badgeStyleClass = filled ? 'ds-badge--filled' : 'ds-badge--outlined';
  
      const renderIcon = (iconClass) => {
        return `<i class="fas ${iconClass}"></i>`;
      };
  
  
    return `
      <span class="ds-badge ${badgeClass} ${badgeStyleClass}">${leadingIcon ? `<span class="ds-badge__icon ds-badge__icon--leading" role="img" aria-label="Leading Icon">${renderIcon(leadingIcon)}</span>` : ''}${label} ${trailingIcon ? `<span class="ds-badge__icon ds-badge__icon--trailing" role="img" aria-label="Trailing Icon">${renderIcon(trailingIcon)}</span>` : ''}</span>
    `;
  };