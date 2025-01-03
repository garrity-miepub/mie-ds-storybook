import Skeleton from './Skeleton.svelte';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    classNames: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton',
    },
    rounded: {
      control: 'boolean',
      description: 'Whether to apply rounded corners',
      defaultValue: true,
    },
  },
};

const Template = ({ classNames, width, height, rounded }) => ({
  Component: Skeleton,
  props: {
    classNames: classNames + (rounded ? ' rounded-md' : ''),
    style: `width: ${width}; height: ${height};`,
  },
});

export const Default = Template.bind({});
Default.args = {
  width: '100px',
  height: '20px',
};

export const Circle = Template.bind({});
Circle.args = {
  width: '50px',
  height: '50px',
  rounded: false,
  classNames: 'rounded-full',
};

export const TextLine = Template.bind({});
TextLine.args = {
  width: '200px',
  height: '1rem',
  rounded: true,
};

export const WithCustomClasses = Template.bind({});
WithCustomClasses.args = {
  width: '150px',
  height: '30px',
  classNames: 'bg-blue-300', // Example of overriding default styling
};