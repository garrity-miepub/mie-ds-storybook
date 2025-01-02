import Calendar from './Calendar.svelte';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selectedDate: {
      control: 'date',
      description: 'The currently selected date',
    },
    onSelect: {
      action: 'selectedDate',
      description: 'Action triggered when a date is selected',
    },
  },
};

const Template = ({ selectedDate, onSelect }) => ({
  Component: Calendar,
  props: { selectedDate, onSelect },
});

export const Default = Template.bind({});

export const WithSelectedDate = Template.bind({});
WithSelectedDate.args = {
  selectedDate: new Date(),
};

export const DifferentMonth = Template.bind({});
DifferentMonth.args = {
  selectedDate: new Date(2024, 9, 15), // October 15, 2024
};