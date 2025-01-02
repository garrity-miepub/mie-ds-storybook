import HoverCard from './HoverCard.svelte';

export default {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    targetText: {
      control: 'text',
      description: 'Text of the element that triggers the hover card',
      defaultValue: 'Hover Over Me',
    },
    iconClass: {
      control: 'text',
      description: 'Optional Font Awesome class for an icon',
      defaultValue: null,
    },
    header: {
      control: 'text',
      description: 'Optional header text for the hover card',
      defaultValue: null,
    },
    content: {
      control: 'text',
      description: 'Optional content text for the hover card',
      defaultValue: null,
    },
    linkHref: {
      control: 'text',
      description: 'Optional URL for a link in the hover card',
      defaultValue: null,
    },
    linkText: {
      control: 'text',
      description: 'Optional text for the link in the hover card',
      defaultValue: null,
    },
  },
};

const Template = (args) => ({
  Component: HoverCard,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    iconClass: 'fa fa-info-circle',
    header: 'This is the header',
    content: 'This hover card has an icon and a link.',
    linkHref: '#',
    linkText: 'Learn More',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  iconClass: 'fa fa-info-circle',
  header: 'Information',
  content: 'This hover card has an icon.',
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  header: 'Profile Details',
  content: 'Some details about the profile.',
};

export const WithContent = Template.bind({});
WithContent.args = {
  content: 'This hover card displays some important content.',
};

export const WithLink = Template.bind({});
WithLink.args = {
  header: 'Learn More',
  content: 'Click the link below for more information.',
  linkHref: '#',
  linkText: 'Learn More',
};

export const ComplexCard = Template.bind({});
ComplexCard.args = {
  targetText: 'More Info',
  iconClass: 'fa fa-user',
  header: 'User Profile',
  content: 'View detailed information about this user.',
  linkHref: '/profile',
  linkText: 'View Profile',
};