import Checkbox from './Checkbox.svelte';

export default {
  title: 'Svelte Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['default', 'small', 'large'],
    },
    onChange: { action: 'changed' },
    hideLabel: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: Checkbox,
  props: args,
  on: {
    change: args.onChange,
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Checkbox',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Checkbox',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Checkbox',
  size: 'large',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked Checkbox',
  checked: true,
};