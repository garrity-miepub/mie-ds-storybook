// Button.stories.js
import Button from './Button.svelte';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    label: { control: 'text' },
    leadingIcon: {
      control: { type: 'select' },
      options: ['none', 'envelope', 'lock', 'user', 'close'],
    },
    trailingIcon: {
      control: { type: 'select' },
      options: ['none', 'chevronDown', 'chevronRight', 'download'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'small', 'large'],
    },
    customIcon: {
      control: { type: 'select' },
      options: ['default', 'icon-only'],
    },
  },
};

const Template = (args) => ({
  Component: Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = { type: 'primary', label: 'Primary Button' };

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary', label: 'Secondary Button' };

export const Tertiary = Template.bind({});
Tertiary.args = { type: 'tertiary', label: 'Tertiary Button' };

export const Small = Template.bind({});
Small.args = { size: 'small', label: 'Small Button' };

export const Large = Template.bind({});
Large.args = { size: 'large', label: 'Large Button' };

export const IconOnlyEnvelope = Template.bind({});
IconOnlyEnvelope.args = {
  customIcon: 'icon-only',
  leadingIcon: 'envelope',
  label: 'Icon Button',
};
