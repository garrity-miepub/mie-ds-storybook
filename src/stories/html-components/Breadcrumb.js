export const createBreadcrumbHTML = ({
    items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details', href: '/products/details' },
    ],
  }) => {
    let breadcrumbHTML = '<nav aria-label="Breadcrumb"><ol class="ds-breadcrumb">';
  
    if (items.length <= 3) {
      items.forEach((item, index) => {
        breadcrumbHTML += `
          <li class="ds-breadcrumb__item">
            <a href="${item.href}" aria-current="${index === items.length - 1 ? 'page' : undefined}">
              ${item.label}
            </a>
            ${index < items.length - 1 ? '<span class="ds-breadcrumb__separator">/</span>' : ''}
          </li>
        `;
      });
    } else {
      breadcrumbHTML += `
        <li class="ds-breadcrumb__item">
          <a href="${items[0].href}">
            ${items[0].label}
          </a>
          <span class="ds-breadcrumb__separator">/</span>
        </li>
         <li class="ds-breadcrumb__item ds-breadcrumb__item--collapse-trigger">
            <button aria-haspopup="true" aria-expanded="false">
              ...
            </button>
             <ul class="ds-breadcrumb__dropdown">
                ${items.slice(1, items.length - 2).map(item =>
                    `<li class="ds-breadcrumb__dropdown-item">
                      <a href="${item.href}">${item.label}</a>
                    </li>`
                  ).join('')}
              </ul>
          </li>
      `;
        items.slice(-2).forEach((item, index) => {
            breadcrumbHTML += `
              <li class="ds-breadcrumb__item">
                <a href="${item.href}" aria-current="${index === 1 ? 'page' : undefined}">
                  ${item.label}
                </a>
                ${index === 0 && items.length > 1 ? '<span class="ds-breadcrumb__separator">/</span>' : ''}
              </li>
            `;
          });
  
      
    }
  
    breadcrumbHTML += '</ol></nav>';
    return breadcrumbHTML;
  };