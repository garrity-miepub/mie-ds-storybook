// src/components/Accordion.stories.js
import Accordion from './Accordion.svelte';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select', // Dropdown control
      options: ['default', 'condensed'], // Options for the dropdown
      description: 'Size of the accordion',
      defaultValue: 'default',
    },
    items: {
      control: 'object',
      description: 'Array of accordion items',
      defaultValue: [
        { title: 'Accordion Item 1', content: 'Content for accordion item 1.' },
        { title: 'Accordion Item 2', content: 'Content for accordion item 2.' },
        { title: 'Accordion Item 3', content: 'Content for accordion item 3.' },
      ],
    },
  },
};

/**
 * Template for the Interactive story
 * Allows users to interact with the `size` and `items` props via controls
 */
const InteractiveTemplate = (args) => ({
  Component: Accordion,
  props: args,
});

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  size: 'default',
  items: [
    { title: 'Accordion Item 1', content: 'Content for accordion item 1.' },
    { title: 'Accordion Item 2', content: 'Content for accordion item 2.' },
    { title: 'Accordion Item 3', content: 'Content for accordion item 3.' },
  ],
};

/**
 * Template for the Default story
 * Sets the `size` prop to 'default' without controls
 */
const DefaultTemplate = () => ({
  Component: Accordion,
  props: {
    size: 'default',
    items: [
      { title: 'Accordion Item 1', content: 'Content for accordion item 1.' },
      { title: 'Accordion Item 2', content: 'Content for accordion item 2.' },
      { title: 'Accordion Item 3', content: 'Content for accordion item 3.' },
    ],
  },
});

export const Default = DefaultTemplate.bind({});
Default.storyName = 'Default Size';

/**
 * Template for the Condensed story
 * Sets the `size` prop to 'condensed' without controls
 */
const CondensedTemplate = () => ({
  Component: Accordion,
  props: {
    size: 'condensed',
    items: [
      { title: 'Accordion Item 1', content: 'Content for accordion item 1.' },
      { title: 'Accordion Item 2', content: 'Content for accordion item 2.' },
      { title: 'Accordion Item 3', content: 'Content for accordion item 3.' },
    ],
  },
});

export const Condensed = CondensedTemplate.bind({});
Condensed.storyName = 'Condensed Size';
