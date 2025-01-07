import { createAvatarHTML } from './Avatar.js';
import HTMLContent from './AvatarContent.svelte'; // reusing ButtonContent

export default {
  title: 'HTML Components/Avatar',
  tags: ['autodocs'],
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
    render: (args) => ({
    Component: HTMLContent,
      props: {
        content: createAvatarHTML(args),
      }
    }),
  parameters: {
        docs: {
            description: {
                component: `**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases.`,
            },
            source: {
                transform: (args, context) => {
                    return createAvatarHTML(context.args);
                },
            },
        },
  }
};


const createStory = (args) => ({
    render: () => ({
        Component: HTMLContent,
        props: {
          content: createAvatarHTML(args),
        },
    }),
});


export const WithLetter = {
  render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createAvatarHTML(args),
      },
  }),
  args: {
    letter: 'J',
  },
};

export const WithImage = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createAvatarHTML(args),
        },
    }),
  args: {
    image: 'https://www.w3schools.com/howto/img_avatar.png',
  },
};

export const SmallWithLetter = {
  render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createAvatarHTML(args),
      },
  }),
  args: {
    size: 'small',
    letter: 'S',
  },
};

export const MediumWithLetter = {
  render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createAvatarHTML(args),
      },
  }),
  args: {
    size: 'medium',
    letter: 'M',
  },
};

export const LargeWithLetter = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createAvatarHTML(args),
        },
    }),
  args: {
    size: 'large',
    letter: 'L',
  },
};

export const SmallWithImage = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createAvatarHTML(args),
        },
    }),
  args: {
    size: 'small',
    image: 'https://www.w3schools.com/howto/img_avatar.png',
  },
};

export const MediumWithImage = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createAvatarHTML(args),
        },
    }),
  args: {
    size: 'medium',
    image: 'https://www.w3schools.com/howto/img_avatar.png',
  },
};

export const LargeWithImage = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createAvatarHTML(args),
        },
    }),
  args: {
    size: 'large',
    image: 'https://www.w3schools.com/howto/img_avatar.png',
  },
};

export const Interactive = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createAvatarHTML(args),
        },
    }),
  args: {
    letter: 'U',
    image: null,
    size: 'medium',
  },
};