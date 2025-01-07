import { createSkeletonHTML } from './Skeleton.js';
import SkeletonContent from './SkeletonContent.svelte';

export default {
  title: 'HTML Components/Skeleton',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases.`,
      },
      source: {
        language: 'html',
        transform: (args, context) => {
            return createSkeletonHTML(context.args);
        },
    },      
    },
  },
  argTypes: {
    classNames: {
      control: 'text',
      description: 'Additional CSS classes to apply',
      defaultValue: '',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton',
      defaultValue: null,
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton',
      defaultValue: null,
    },
    rounded: {
      control: 'boolean',
      description: 'Whether to apply rounded corners',
      defaultValue: true,
    },
  },
};

export const Default = {
    render: (args) => ({
      Component: SkeletonContent,
      props: {
          content: createSkeletonHTML(args)
      }
    })
};

export const Circle = {
    render: (args) => ({
      Component: SkeletonContent,
        props: {
            content: createSkeletonHTML(args)
        }
    }),
  args: {
    width: '50px',
    height: '50px',
    rounded: false,
    classNames: 'rounded-full',
  }
};

export const TextLine = {
    render: (args) => ({
      Component: SkeletonContent,
        props: {
            content: createSkeletonHTML(args)
        }
    }),
    args: {
      width: '200px',
      height: '1rem',
      rounded: true,
    }
};

export const WithCustomClasses = {
    render: (args) => ({
      Component: SkeletonContent,
        props: {
            content: createSkeletonHTML(args)
        }
      }),
  args: {
    width: '150px',
    height: '30px',
    classNames: 'bg-blue-300',
  }
};