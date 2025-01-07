export const createCheckboxHTML = ({
    checked = false,
    label = '',
    size = 'default',
    hideLabel = false,
  }) => {
    const checkboxClass = ['checkbox-container', size !== 'default' ? size : ''].join(' ');
  
    return `
    <label class="${checkboxClass}">
      <input
        type="checkbox"
        ${checked ? 'checked' : ''}
      />
      <span class="checkbox"></span>
      ${!hideLabel && label ? `<span class="label">${label}</span>` : ''}
    </label>
    `;
  };