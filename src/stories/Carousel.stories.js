import Carousel from './Carousel.svelte';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    slides: {
      control: 'array',
      description: 'Array of slide content (can be HTML strings)',
      defaultValue: ['Slide 1 Content', 'Slide 2 Content', 'Slide 3 Content'],
    },
    interval: {
      control: 'number',
      description: 'Time interval in milliseconds for auto-scrolling',
      defaultValue: 5000,
    },
  },
};

const Template = ({ slides, interval }) => ({
  Component: Carousel,
  props: { slides, interval },
});

export const Default = Template.bind({});
Default.args = {
  slides: ['Slide 1 Content', 'Slide 2 Content', 'Slide 3 Content'],
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  slides: [
    '<img src="https://placehold.co/600x400" alt="Kitten 1" style="display: block; width: 100%; height: auto;">',
    '<h2>Second Slide with Custom Text</h2><p>More detailed information here.</p>',
    '<div style="background-color: #f0f0f0; padding: 20px; text-align: center;"><h3>Third Slide with a Box</h3></div>',
  ],
};

export const Interactive = Template.bind({});
Interactive.args = {
  slides: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  interval: 3000,
};