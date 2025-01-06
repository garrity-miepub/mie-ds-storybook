import HTMLContent from './ButtonContent.svelte';
import { Button } from './Button';
import hljs from 'highlight.js';

export default {
  title: 'Html Components/Button',
  component: HTMLContent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['default', 'small', 'large'],
    },
    label: {
      control: 'text',
    },
    leadingIcon: {
      control: 'select',
      options: ['none', 'envelope', 'lock', 'user', 'close'],
    },
    trailingIcon: {
      control: 'select',
      options: ['none', 'chevronDown', 'chevronRight', 'download'],
    },
    customIcon: {
      control: 'select',
      options: ['default', 'icon-only'],
    },
    content: {
      table: {
        disable: true,
      },
    },    
  },
  render: (args) => ({
    Component: HTMLContent,
    props: {
      content: Button(args),
    },
  }),
  parameters: {
    docs: {
      source: {
        transform: (args, context) => {
          return Button(context.args);
        },
      },
    },
  },
};

const createStory = (args) => ({
  render: () => ({
    Component: HTMLContent,
    props: {
      content: Button(args),
    },
  }),
});

export const Primary = {
  render: (args) => ({
    Component: HTMLContent,
    props: {
      content: Button(args),
    },
  }),
  args: {
    type: 'primary',
    size: 'default',
    label: 'Primary Button',
  },
};

export const Secondary = {
  render: (args) => ({
    Component: HTMLContent,
    props: {
      content: Button(args),
    },
  }),
  args: {
    type: 'secondary',
    label: 'Secondary Button',
  },
};

export const Tertiary = {
  render: (args) => ({
    Component: HTMLContent,
    props: {
      content: Button(args),
    },
  }),
  args: {
    type: 'tertiary',
    label: 'Tertiary Button',
  },
};

export const PrimaryWithLeadingIcon = {
  render: (args) => ({
    Component: HTMLContent,
    props: {
      content: Button(args),
    },
  }),
  args: {
    type: 'primary',
    label: 'Button',
    leadingIcon: 'envelope',
  },
};


export const MultipleSizes = {
  render: (args) => ({
    Component: HTMLContent,
    props: {
      content: `
        <div style="display: inline-flex; align-items: center; gap: 20px;">
          ${Button({ ...args, size: 'small', label: `Small ${args.label}` })}
          ${Button({ ...args, size: 'default', label: `Default ${args.label}` })}
          ${Button({ ...args, size: 'large', label: `Large ${args.label}` })}
        </div>
      `,
    },
  }),
  args: {
    type: 'primary',
    label: 'Button',
  },
};