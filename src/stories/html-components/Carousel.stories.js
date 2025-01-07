import { createCarouselHTML } from './Carousel.js';
import HTMLContent from './CarouselContent.svelte';

export default {
  title: 'HTML Components/Carousel',
  tags: ['autodocs'],
  argTypes: {
    slides: {
      control: 'array',
      description: 'Array of HTML strings for the carousel slides',
      defaultValue: [
        '<img src="https://placekitten.com/800/400" alt="First slide" style="width: 100%; height: auto;">',
        '<img src="https://placekitten.com/801/400" alt="Second slide" style="width: 100%; height: auto;">',
        '<img src="https://placekitten.com/802/400" alt="Third slide" style="width: 100%; height: auto;">',
      ],
    },
      interval: {
          control: 'number',
          description: 'The interval at which the carousel rotates',
          defaultValue: 5000,
      }
  },
  parameters: {
        docs: {
            description: {
                component: `**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases.`,
            },              
            source: {
                language: 'html',
                transform: (args, context) => {
                    return createCarouselHTML(context.args);
                },
            },
        },
  }
};


export const Default = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createCarouselHTML(args),
      },
    }),
    args: {
      slides: [
        '<img src="https://placekitten.com/800/400" alt="First slide" style="width: 100%; height: auto;">',
        '<img src="https://placekitten.com/801/400" alt="Second slide" style="width: 100%; height: auto;">',
        '<img src="https://placekitten.com/802/400" alt="Third slide" style="width: 100%; height: auto;">',
      ],
    },
  };
  
  
  export const CustomInterval = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createCarouselHTML(args),
      },
    }),
    args: {
        slides: [
          '<img src="https://placekitten.com/800/400" alt="First slide" style="width: 100%; height: auto;">',
          '<img src="https://placekitten.com/801/400" alt="Second slide" style="width: 100%; height: auto;">',
          '<img src="https://placekitten.com/802/400" alt="Third slide" style="width: 100%; height: auto;">',
        ],
        interval: 3000
    },
  };