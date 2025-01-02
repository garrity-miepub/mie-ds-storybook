<script>
    import Calendar from './Calendar.svelte';
    import { tick } from 'svelte';
  
    export let value = null; // Bindable value for the selected date (Date object)
    export let format = 'MM/DD/YYYY'; // Formatting string for the input
    export let includeTime = false;
  
    let showCalendar = false;
    let inputValue = '';
    let calendarIconRef;
    let inputRef;
  
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
  
    const parseDate = (value) => {
      const parts = value.match(/(\d+)/g);
      if (parts && parts.length === 3) {
        const [month, day, year] = parts.map(Number);
        return new Date(year, month - 1, day);
      }
      return null;
    };
  
    $: inputValue = formatDate(value);
  
    function toggleCalendar() {
      showCalendar = !showCalendar;
    }
  
    function handleDateSelect(date) {
      value = date;
      showCalendar = false;
    }
  
    function handleInputChange() {
      const parsedDate = parseDate(inputValue);
      if (parsedDate) {
        value = parsedDate;
      } else if (inputValue === '') {
        value = null;
      }
    }
  
    function handleClickOutside(event) {
      if (showCalendar && !calendarIconRef?.contains(event.target) && !inputRef?.contains(event.target) && !event.target.closest('.calendar')) {
        showCalendar = false;
      }
    }
  
    onMount(() => {
      window.addEventListener('click', handleClickOutside);
      return () => window.removeEventListener('click', handleClickOutside);
    });
    import { onMount } from 'svelte';
  </script>
  
  <div class="date-picker">
    <div class="date-input-group">
      <input
        type="text"
        bind:this={inputRef}
        class="date-input"
        placeholder={format}
        bind:value={inputValue}
        on:blur={handleInputChange}
      />
      <button type="button" class="calendar-icon-button" bind:this={calendarIconRef} on:click={toggleCalendar} aria-label="calendar icon">
        <i class="fa-regular fa-calendar"></i>
      </button>
    </div>
  
    {#if includeTime}
      <div class="time-input-group">
        <input type="time" class="time-input" />
      </div>
    {/if}
  
    {#if showCalendar}
      <div class="calendar-popup">
        <Calendar selectedDate={value} onSelect={handleDateSelect} />
      </div>
    {/if}
  </div>
  
  <style>
    .date-picker {
      position: relative;
      display: inline-block;
    }
  
    .date-input-group {
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 4px;
      overflow: hidden;
    }
  
    .date-input {
      padding: 8px;
      border: none;
      outline: none;
      flex-grow: 1;
    }
  
    .calendar-icon-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      color: #555;
    }
  
    .calendar-icon-button:hover {
      background-color: #f0f0f0;
    }
  
    .calendar-popup {
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: white;
      z-index: 10;
      margin-top: 2px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  
    .time-input-group {
      margin-top: 5px;
    }
  
    .time-input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }
  </style>