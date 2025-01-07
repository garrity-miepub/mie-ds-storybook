export const createCalendarHTML = ({
  selectedDate = null,
  currentDate = new Date(),
  onSelect = () => {},
}) => {
    
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 6 for Saturday

    function getDaysArray() {
        const days = [];
        const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
        const daysFromPrevMonth = firstDayOfWeek;
        const daysFromNextMonth = 42 - daysInMonth - daysFromPrevMonth;
    
        // Days from previous month
        for (let i = 0; i < daysFromPrevMonth; i++) {
          days.push({ day: prevMonthLastDay - daysFromPrevMonth + i + 1, monthOffset: -1 });
        }
    
        // Days in current month
        for (let i = 1; i <= daysInMonth; i++) {
          const date = new Date(currentYear, currentMonth, i);
          const isSelected = selectedDate && isSameDay(selectedDate, date);
          days.push({ day: i, monthOffset: 0, date, isSelected });
        }
    
        // Days from next month
        for (let i = 1; i <= daysFromNextMonth; i++) {
          days.push({ day: i, monthOffset: 1 });
        }
    
        return days;
      }
    
      function isSameDay(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
      }


      const daysArray = getDaysArray();

      let calendarHTML = `
        <div class="calendar">
          <div class="calendar-header">
              <button class="nav-button" aria-label="minus"></button>
            <span class="month-year">${monthNames[currentMonth]} ${currentYear}</span>
              <button class="nav-button" aria-label="plus"></button>
          </div>
          <div class="calendar-days-header">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div class="calendar-grid">
            ${daysArray.map(day => `
                <button
                    class="calendar-day ${day.monthOffset !== 0 ? 'other-month' : ''} ${day.isSelected ? 'selected' : ''}"
                    data-day="${day.day}"
                    data-month-offset="${day.monthOffset}"
                    ${day.monthOffset === 0 ? `data-date="${day.date}"` : ''}
                >
                ${day.day}
                </button>
             `).join('')}
          </div>
        </div>
      `;

    return calendarHTML
};