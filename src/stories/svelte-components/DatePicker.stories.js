import DatePicker from './DatePicker.svelte';

export default {
  title: 'Svelte Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases.`,
      },
    },
  },
  argTypes: {
    value: {
      control: 'date',
      description: 'The selected date',
    },
    format: {
      control: 'text',
      description: 'Format string for the date input',
      defaultValue: 'MM/DD/YYYY',
    },
    includeTime: {
      control: { type: 'select' },
      options: [true, false],
      description: 'Include a time input field',
      defaultValue: false,
    },
  },
};

const Template = ({ value, format, includeTime }) => ({
  Component: DatePicker,
  props: { value, format, includeTime },
});

export const Basic = Template.bind({});

export const WithInitialDate = Template.bind({});
WithInitialDate.args = {
  value: new Date(),
};

export const CustomFormat = Template.bind({});
CustomFormat.args = {
  format: 'YYYY-MM-DD',
};

export const WithTimeEnabled = Template.bind({});
WithTimeEnabled.args = {
  includeTime: true,
};

export const WithTimeDisabled = Template.bind({});
WithTimeDisabled.args = {
  includeTime: false,
};