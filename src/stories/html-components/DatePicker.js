export const createDatePickerHTML = ({
    value = null,
    format = 'MM/DD/YYYY',
    includeTime = false,
    showCalendar = false,
    inputValue = '',
  }) => {
    
    const formatDate = (date) => {
      if (!date) return '';
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      return format
        .replace('MM', month)
        .replace('DD', day)
        .replace('YYYY', year);
    };
    
    const formattedInputValue = value ? formatDate(value) : inputValue;
    
    let datePickerHTML = `
    <div class="date-picker" data-show-calendar="${showCalendar}" data-value="${value}">
        <div class="date-input-group">
            <input
                type="text"
                class="date-input"
                placeholder="${format}"
                value="${formattedInputValue}"
                data-input-value="${inputValue}"
                
                />
            <button type="button" class="calendar-icon-button" aria-label="calendar icon">
                <i class="fa-regular fa-calendar"></i>
            </button>
        </div>
        ${includeTime ? `
            <div class="time-input-group">
                <input type="time" class="time-input" />
            </div>
            ` : ''}
            ${showCalendar ? `
                <div class="calendar-popup"></div>
            `: ''}
    </div>
    `;
  
    return datePickerHTML;
};