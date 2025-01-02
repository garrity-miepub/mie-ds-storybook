<script>
    import { onMount } from 'svelte';
  
    export let selectedDate = null;
    export let onSelect = (date) => {};
  
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
  
    $: firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    $: lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    $: daysInMonth = lastDayOfMonth.getDate();
    $: firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 6 for Saturday
  
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
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
  
    $: daysArray = getDaysArray();
  
    function isSameDay(date1, date2) {
      return date1.getDate() === date2.getDate() &&
             date1.getMonth() === date2.getMonth() &&
             date1.getFullYear() === date2.getFullYear();
    }
  
    function selectDay(day) {
      if (day.monthOffset === 0) {
        selectedDate = day.date;
        onSelect(selectedDate);
      } else if (day.monthOffset === -1) {
        changeMonth(-1);
        selectedDate = new Date(currentYear, currentMonth, day.day);
        onSelect(selectedDate);
      } else if (day.monthOffset === 1) {
        changeMonth(1);
        selectedDate = new Date(currentYear, currentMonth, day.day);
        onSelect(selectedDate);
      }
    }
  
    function changeMonth(offset) {
      currentMonth += offset;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
    }
  </script>
  
  <div class="calendar">
    <div class="calendar-header">
      <button class="nav-button" on:click={() => changeMonth(-1)} aria-label="minus"></button>
      <span class="month-year">{monthNames[currentMonth]} {currentYear}</span>
      <button class="nav-button" on:click={() => changeMonth(1)} aria-label="plus"></button>
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
      {#each daysArray as day}
        <button
          class="calendar-day"
          class:other-month={day.monthOffset !== 0}
          class:selected={day.isSelected}
          on:click={() => selectDay(day)}
        >
          {day.day}
        </button>
      {/each}
    </div>
  </div>
  
  <style>
    .calendar {
      width: 280px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
      font-size: 14px;
      user-select: none;
    }
  
    .calendar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .nav-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      padding: 5px;
    }
  
    .month-year {
      font-weight: bold;
    }
  
    .calendar-days-header {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
      margin-bottom: 5px;
      text-align: center;
      font-size: 12px;
      color: #777;
    }
  
    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
    }
  
    .calendar-day {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 4px;
      text-align: center;
    }
  
    .calendar-day:hover:not(.selected) {
      background-color: #f0f0f0;
    }
  
    .calendar-day.selected {
      background-color: #007bff;
      color: white;
    }
  
    .calendar-day.other-month {
      color: #ccc;
    }
  </style>