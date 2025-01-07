import { createCheckboxHTML } from './Checkbox.js';
import HTMLContent from './CheckboxContent.svelte';

export default {
  title: 'HTML Components/Checkbox',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      defaultValue: false,
    },
    label: {
      control: 'text',
      description: 'The label for the checkbox',
      defaultValue: '',
    },
      size: {
      control: 'select',
      options: ['default', 'small', 'large'],
      description: 'The size of the checkbox',
        defaultValue: 'default'
    },
    hideLabel: {
      control: 'boolean',
      description: 'Hide the label for the checkbox',
        defaultValue: false,
    },
  },
    parameters: {
        docs: {
            source: {
                language: 'html',
                transform: (args, context) => {
                    return createCheckboxHTML(context.args);
                },
            },
        },
    },
};

export const Default = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createCheckboxHTML(args),
      },
    }),
    args: {
        label: 'Checkbox Label'
    }
};


export const Checked = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createCheckboxHTML(args)
      }
    }),
    args: {
      label: 'Checked Checkbox',
      checked: true
    }
  };


export const SmallCheckbox = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createCheckboxHTML(args)
      }
    }),
    args: {
      label: 'Small Checkbox',
        size: 'small'
    }
  };

export const LargeCheckbox = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createCheckboxHTML(args)
      }
    }),
    args: {
      label: 'Large Checkbox',
        size: 'large'
    }
  };
  
  export const NoLabel = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createCheckboxHTML(args)
        }
    }),
    args: {
      hideLabel: true
    }
  };