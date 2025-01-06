import Avatar from './Avatar.svelte';

export default {
  title: 'Svelte Components/Avatar',
  component: Avatar,
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
    letter: {
      control: 'text',
      description: 'Letter to display when no image is provided',
      defaultValue: 'A',
    },
    image: {
      control: 'text',
      description: 'URL of the image to display (overrides letter)',
      defaultValue: null,
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the avatar',
      defaultValue: 'medium',
    },
  },
};

const Template = ({ letter, image, size }) => ({
  Component: Avatar,
  props: { letter, image, size },
});

export const WithLetter = Template.bind({});
WithLetter.args = {
  letter: 'J',
};

export const WithImage = Template.bind({});
WithImage.args = {
  image: 'https://www.w3schools.com/howto/img_avatar.png',
};

export const SmallWithLetter = Template.bind({});
SmallWithLetter.args = {
  size: 'small',
  letter: 'S',
};

export const MediumWithLetter = Template.bind({});
MediumWithLetter.args = {
  size: 'medium',
  letter: 'M',
};

export const LargeWithLetter = Template.bind({});
LargeWithLetter.args = {
  size: 'large',
  letter: 'L',
};

export const SmallWithImage = Template.bind({});
SmallWithImage.args = {
  size: 'small',
  image: 'https://www.w3schools.com/howto/img_avatar.png',
};

export const MediumWithImage = Template.bind({});
MediumWithImage.args = {
  size: 'medium',
  image: 'https://www.w3schools.com/howto/img_avatar.png',
};

export const LargeWithImage = Template.bind({});
LargeWithImage.args = {
  size: 'large',
  image: 'https://www.w3schools.com/howto/img_avatar.png',
};

export const Interactive = Template.bind({});
Interactive.args = {
  letter: 'U',
  image: null,
  size: 'medium',
};