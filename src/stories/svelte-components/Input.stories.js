import Input from './Input.svelte';

export default {
  title: 'Svelte Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases.`,
      },
    },
  },  
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input',
      table: {
        category: 'General',
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Aria label for accessibility',
      table: {
        category: 'General',
      },
    },
    leadingIcon: {
      control: {
        type: 'select',
        options: ['none', 'user', 'check', 'warning'],
      },
      description: 'Leading icon for the input',
      table: {
        category: 'Icons',
      },
    },
    trailingIcon: {
      control: {
        type: 'select',
        options: ['none', 'user', 'check', 'warning'],
      },
      description: 'Trailing icon for the input',
      table: {
        category: 'Icons',
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['default', 'success', 'danger', 'disabled'],
      },
      description: 'State of the input',
      table: {
        category: 'State',
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input',
      table: {
        category: 'General',
      },
    },
    value: {
      control: 'text',
      description: 'Controlled value of the input',
      table: {
        category: 'Data',
      },
    },
    onFocus: {
      action: 'focus',
      description: 'Fires when the input is focused',
      table: {
        category: 'Events',
      },
    },
    onBlur: {
      action: 'blur',
      description: 'Fires when the input loses focus',
      table: {
        category: 'Events',
      },
    },
    onChange: {
      action: 'change',
      description: 'Fires when the input value changes (for controlled component)',
      table: {
        category: 'Events',
      },
    },
  },
};

const Template = (args) => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur,
  },
});

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  label: 'Username',
  state: 'default',
};

export const Controlled = Template.bind({});
Controlled.args = {
  label: 'Username',
  state: 'default',
  value: 'Initial Value',
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  label: 'Email',
  leadingIcon: 'user',
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  label: 'Confirm',
  trailingIcon: 'check',
  state: 'success',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Password',
  helperText: 'Minimum 8 characters',
};

export const DangerState = Template.bind({});
DangerState.args = {
  label: 'Error Field',
  state: 'danger',
  helperText: 'This field has an error',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  label: 'Disabled Field',
  state: 'disabled',
  value: 'This is disabled',
};

export const AllOptions = Template.bind({});
AllOptions.args = {
  label: 'Full Example',
  leadingIcon: 'user',
  trailingIcon: 'check',
  state: 'success',
  helperText: 'Everything looks good!',
  value: 'Validated Input',
};