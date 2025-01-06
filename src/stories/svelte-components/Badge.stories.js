import Badge from './Badge.svelte';

export default {
  title: 'Svelte Components/Badge',
  component: Badge,
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
    filled: {
      control: 'boolean',
      description: 'Whether the badge is filled or outlined',
      defaultValue: true,
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'informative', 'warning', 'danger', 'success'],
      description: 'Type/severity of the badge',
      defaultValue: 'default',
    },
    leadingIcon: {
      control: 'text',
      description: 'Optional Font Awesome icon class to display at the beginning',
      defaultValue: null,
    },
    trailingIcon: {
      control: 'text',
      description: 'Optional Font Awesome icon class to display at the end',
      defaultValue: null,
    },
    label: { 
      control: 'text',
      description: 'Text content of the badge',
      defaultValue: 'Badge',
    },
  },
};

const Template = ({ filled, type, leadingIcon, trailingIcon, label = 'Badge' }) => ({
  Component: Badge,
  props: { filled, type, leadingIcon, trailingIcon, label },
});

//Filled Default Badge
export const FilledDefault = Template.bind({});
FilledDefault.args = {
  filled: true,
  type: 'default',
  label: 'Default',
};


//Outlined Default Badge
export const OutlinedDefault = Template.bind({});
OutlinedDefault.args = {
  filled: false,
  type: 'default',
  label: 'Default',
};


//Filled Informative Badge
export const FilledInformative = Template.bind({});
FilledInformative.args = {
  filled: true,
  type: 'informative',
  label: 'Informative',
};


//Outlined Informative Badge

export const OutlinedInformative = Template.bind({});
OutlinedInformative.args = {
  filled: false,
  type: 'informative',
  label: 'Informative',
};

//Badge with Leading Icon 
export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  label: 'With Icon',
  leadingIcon: 'fa-user',
};

//Badge with Trailing Icon
export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  label: 'With Icon',
  trailingIcon: 'fa-check',
};

//Badge with Leading and Trailing Icons
export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  label: 'With Icons',
  leadingIcon: 'fa-arrow-left',
  trailingIcon: 'fa-arrow-right',
};

//Interactive Badge
export const Interactive = Template.bind({});
Interactive.args = {
  filled: true,
  type: 'default',
  leadingIcon: null,
  trailingIcon: null,
  label: 'Interactive Badge',
};
Interactive.argTypes = {
  label: { control: 'text' },
};