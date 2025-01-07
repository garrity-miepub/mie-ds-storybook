export const createHoverCardHTML = ({
    targetText = 'Hover Over Me',
    iconClass = null,
    header = null,
    content = null,
    linkHref = null,
    linkText = null,
    isHovering = false,
  }) => {

    let hoverCardHTML = `
    <div class="ds-hover-card-wrapper" data-is-hovering="${isHovering}">
      <span class="ds-hover-card-target">
        ${targetText}
      </span>
        ${isHovering ? `
            <div class="ds-hover-card-content">
                ${iconClass ? `
                    <div class="ds-hover-card-icon">
                        <i class="${iconClass}"></i>
                    </div>
                `: ''}
                ${header ? `
                    <div class="ds-hover-card-header">
                        <h4>${header}</h4>
                    </div>
                `: ''}
                 ${content ? `
                    <div class="ds-hover-card-body">
                         <p>${content}</p>
                    </div>
                `: ''}
                  ${linkHref && linkText ? `
                    <div class="ds-hover-card-footer">
                        <a href="${linkHref}">${linkText}</a>
                    </div>
                `: ''}
            </div>
            `: ''}
    </div>
    `;
  
    return hoverCardHTML;
  };