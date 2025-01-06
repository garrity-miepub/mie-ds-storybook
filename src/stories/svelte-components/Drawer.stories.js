import Drawer from './Drawer.svelte';

export default {
  title: 'Svelte Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases.`,
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the drawer is open',
      defaultValue: false,
    },
    title: {
      control: 'text',
      description: 'Title of the drawer',
      defaultValue: 'Drawer Title',
    },
    placement: {
      control: { type: 'select' },
      options: ['bottom', 'left', 'right'],
      description: 'Where the drawer appears from',
      defaultValue: 'bottom',
    },
    showHeader: {
      control: 'boolean',
      description: 'Whether to display the header',
      defaultValue: true,
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to display the close button in the header',
      defaultValue: true,
    },
    triggerText: {
      control: 'text',
      description: 'Text for the button that opens the drawer',
      defaultValue: 'Open Drawer',
    },
    content: {
      control: 'text',
      description: 'HTML content of the drawer',
      defaultValue: '<p>This is the drawer content.</p>',
    },
  },
};

const Template = (args) => ({
  Component: Drawer,
  props: args,
});

export const Bottom = Template.bind({});
Bottom.args = {
  isOpen: false,
  placement: 'bottom',
  title: 'Bottom Drawer',
  content: '<p>This drawer slides up from the bottom.</p>',
};

export const Left = Template.bind({});
Left.args = {
  isOpen: false,
  placement: 'left',
  title: 'Left Drawer',
  content: '<p>This drawer slides in from the left.</p>',
};

export const Right = Template.bind({});
Right.args = {
  isOpen: false,
  placement: 'right',
  title: 'Right Drawer',
  content: '<p>This drawer slides in from the right.</p>',
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  isOpen: false,
  placement: 'right',
  showHeader: false,
  content: '<p>This drawer has no header.</p>',
};

export const NoCloseButton = Template.bind({});
NoCloseButton.args = {
  isOpen: false,
  placement: 'bottom',
  title: 'Drawer without Close',
  showCloseButton: false,
  content: '<p>This drawer does not have a close button in the header.</p>',
};

export const WithHTMLContent = Template.bind({});
WithHTMLContent.args = {
  isOpen: false,
  placement: 'bottom',
  title: 'HTML Content',
  content: `
    <h2>Important Information</h2>
    <p>You can include <strong>HTML</strong> content here, like lists:</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <img src="https://via.placeholder.com/50" alt="Placeholder Image">
  `,
};