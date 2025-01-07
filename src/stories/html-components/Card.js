export const createCardHTML = ({
    media = null,
    showMedia = true,
    primaryTitle = '',
    showPrimaryTitle = true,
    secondaryTitle = '',
    showSecondaryTitle = true,
    supportingText = '',
    showSupportingText = true,
    actions = null,
    showActions = true,
    leadingUtilityIcon = 'none',
    utilityHeader = '',
    utilityContent = '',
    utilityIcons = [],
    showUtility = true,
  }) => {

    const iconMap = {
        user: '<i class="fa fa-user"></i>',
        check: '<i class="fa fa-check-circle"></i>',
        warning: '<i class="fa fa-exclamation-triangle"></i>',
      };

    const hasContent = (showPrimaryTitle && primaryTitle) || (showSecondaryTitle && secondaryTitle) || (showSupportingText && supportingText);
    
    let cardHTML = '<div class="ds-card">';
    
    if (showMedia && media) {
        cardHTML += `<div class="media">${media}</div>`;
    }
    
    if (hasContent) {
        cardHTML += '<div class="content">';
        if (showPrimaryTitle && primaryTitle) {
          cardHTML += `<h3 class="primary-title">${primaryTitle}</h3>`;
        }
        if (showSecondaryTitle && secondaryTitle) {
            cardHTML += `<h4 class="secondary-title">${secondaryTitle}</h4>`;
        }
        if (showSupportingText && supportingText) {
            cardHTML += `<p class="supporting-text">${supportingText}</p>`;
        }
        cardHTML += '</div>';
    }

    if (showUtility) {
        cardHTML += '<div class="utility">';
        if (leadingUtilityIcon !== 'none' && iconMap[leadingUtilityIcon]) {
          cardHTML += `
            <button type="button" class="button tertiary icon-only" aria-label="Utility icon for ${leadingUtilityIcon}">
              <span class="icon">${iconMap[leadingUtilityIcon]}</span>
            </button>
          `;
        }
        cardHTML += '<div class="content">';
        if (utilityHeader) {
          cardHTML += `<div class="header">${utilityHeader}</div>`;
        }
        if (utilityContent) {
            cardHTML += `<div class="content-row">${utilityContent}</div>`
        }
        cardHTML += '</div>';
      
        cardHTML += '<div class="trailing-icon-group">'
        utilityIcons.forEach(icon => {
            if (iconMap[icon]){
            cardHTML += `
                <button type="button" class="button tertiary icon-only" aria-label="Icon button for ${icon}">
                <span class="icon">${iconMap[icon]}</span>
                </button>
            `;
            }
        });
        cardHTML += '</div>'
        cardHTML += '</div>';
    }

    if (showActions && actions) {
        cardHTML += `<div class="actions">${actions}</div>`;
    }

    cardHTML += '</div>';

    return cardHTML;
  };