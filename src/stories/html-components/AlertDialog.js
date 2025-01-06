export const AlertDialogHTML = ({
  title = 'Default Title',
  content = 'This is the default alert dialog content.',
  type = 'Default',
  icon = null,
}) => {
  const dialogClass = `ds-alert-dialog--${type.toLowerCase()}`;

  const renderIcon = (iconClass) => {
    return iconClass ? `<span class="ds-alert-dialog__icon" role="img" aria-label="Alert Icon"><i class="fas ${iconClass}"></i></span>` : '';
  };


  return `
    <div class="ds-alert-dialog ${dialogClass}" role="dialog" aria-modal="true" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <div class="ds-alert-dialog__header">
        <h2 id="alert-dialog-title">
           ${renderIcon(icon)}
          ${title}
        </h2>
      </div>
      <div id="alert-dialog-description">
        <p>${content}</p>
      </div>
    </div>
  `;
};