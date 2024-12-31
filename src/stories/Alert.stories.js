// src/components/Alert/Alert.stories.js
import Alert from './Alert.svelte';

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Adjust layout as needed
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['informative', 'warning', 'success', 'danger'],
      description: 'Type of the alert',
      defaultValue: 'informative',
    },
    icon: {
      control: { type: 'select' },
      options: [
        'fa-info-circle',
        'fa-exclamation-triangle',
        'fa-check-circle',
        'fa-exclamation-circle',
        // Add more icon classes as needed
      ],
      description: 'Font Awesome icon class',
      defaultValue: 'fa-info-circle',
    },
    heading: {
      control: 'text',
      description: 'Heading text of the alert',
      defaultValue: 'Default Heading',
    },
    content: {
      control: 'text',
      description: 'Content/message of the alert',
      defaultValue: 'This has no styles applied',
    },
    link: {
      control: 'text',
      description: 'Text for the alert link',
      defaultValue: 'Default Link',
    },
    linkPath: {
      control: 'text',
      description: 'URL for the alert link',
      defaultValue: '#',
    },
  },
};

const Template = ({ type, icon, heading, content, link, linkPath }) => ({
  Component: Alert,
  props: { type, icon, heading, content, link, linkPath },
});

/**
 * Interactive Story with Controls
 */
export const Interactive = Template.bind({});
Interactive.args = {
  type: 'informative',
  icon: 'fa-info-circle',
  heading: 'Informative Alert',
  content: 'This is an informative alert. It provides useful information to the user.',
  link: 'Learn More',
  linkPath: '#',
};

/**
 * Informative Alert Story
 */
export const Informative = Template.bind({});
Informative.args = {
  type: 'informative',
  icon: 'fa-info-circle',
  heading: 'Informative Alert',
  content: 'This is an informative alert. It provides useful information to the user.',
  link: 'Learn More',
  linkPath: '#',
};

/**
 * Warning Alert Story
 */
export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  icon: 'fa-exclamation-triangle',
  heading: 'Warning Alert',
  content: 'This is a warning alert. Be cautious about the information presented here.',
  link: 'Take Action',
  linkPath: '#',
};

/**
 * Success Alert Story
 */
export const Success = Template.bind({});
Success.args = {
  type: 'success',
  icon: 'fa-check-circle',
  heading: 'Success Alert',
  content: 'This is a success alert. Your operation was completed successfully!',
  link: 'View Details',
  linkPath: '#',
};

/**
 * Danger Alert Story
 */
export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  icon: 'fa-exclamation-circle',
  heading: 'Danger Alert',
  content: 'This is a danger alert. An error has occurred!',
  link: 'Report Issue',
  linkPath: '#',
};
