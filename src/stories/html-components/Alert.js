export const AlertHTML = ({
    type = 'informative',
    icon = 'fa-info-circle',
    heading = 'Informative Alert',
    content = 'This is an informative alert.',
    link = 'Learn more',
    linkPath = '#',
}) => {
    const alertClass = `ds-alert--${type}`;

    return `
    <div class="${alertClass}" role="alert" aria-label="alert text">
      <div class="ds-col--1">
        <span class="ds-icon--info--filled" role="img" aria-label="${type} icon" >
          <i class="fas ${icon}"></i>
        </span>
      </div>
      <div class="ds-col--10">
        <span class="label">${heading}</span>
        <span>${content}</span>
        <span><a href="${linkPath}">${link}</a></span>
      </div>
    </div>
  `;
};