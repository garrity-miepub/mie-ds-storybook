import Dialog from './Dialog.svelte';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the dialog is open',
      defaultValue: false,
    },
    title: {
      control: 'text',
      description: 'Title of the dialog',
      defaultValue: 'Dialog Title',
    },
    content: {
      control: 'text',
      description: 'Content of the dialog',
      defaultValue: 'This is the dialog content.',
    },
    triggerText: {
      control: 'text',
      description: 'Text for the button that opens the dialog',
      defaultValue: 'Open Dialog',
    },
    showHeader: {
      control: 'boolean',
      description: 'Whether to display the header (including the title)',
      defaultValue: true,
    },
    showFooter: {
      control: 'boolean',
      description: 'Whether to display the footer (including the close button)',
      defaultValue: true,
    },
  },
};

const Template = (args) => ({
  Component: Dialog,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isOpen: true, // Set isOpen to true to show the dialog by default
  title: 'Default Dialog',
  content: 'This is the default dialog content shown on load.',
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  title: 'Confirmation',
  content: 'Are you sure you want to perform this action?',
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  showHeader: false,
  content: 'This dialog has no header.',
};

export const WithoutFooter = Template.bind({});
WithoutFooter.args = {
  showFooter: false,
  title: 'Important Information',
  content: 'This dialog has no default footer.',
};

export const WithCustomTriggerText = Template.bind({});
WithCustomTriggerText.args = {
  triggerText: 'Click to Show Dialog',
  title: 'Custom Trigger',
  content: 'The button text for opening this dialog is customized.',
};

export const WithCustomFooter = (args) => ({
  Component: Dialog,
  props: args,
  slots: {
    footer: `
      <button style="background-color: red; color: white; padding: 8px 12px; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
      <button style="background-color: green; color: white; padding: 8px 12px; border: none; border-radius: 4px; cursor: pointer;">Confirm</button>
    `,
  },
});
WithCustomFooter.args = {
  title: 'Custom Actions',
  content: 'This dialog has a custom footer with different buttons.',
};

export const WithSlotContent = (args) => ({
  Component: Dialog,
  props: args,
  slots: {
    default: '<p>This content is passed through the default slot.</p> <input type="text" placeholder="Enter text here" />',
  },
});
WithSlotContent.args = {
  title: 'Slot Content Example',
};