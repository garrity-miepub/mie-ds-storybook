import Combobox from './Combobox.svelte';

export default {
  title: 'Svelte Components/Combobox',
  component: Combobox,
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
    frameworks: {
      control: 'object',
      description: 'Array of framework objects ({ value: string, label: string })',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the combobox',
      defaultValue: 'Select a framework...',
    },
  },
};

const Template = ({ frameworks, placeholder }) => ({
  Component: Combobox,
  props: { frameworks, placeholder },
});

export const Default = Template.bind({});
Default.args = {
  frameworks: [
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'next.js', label: 'Next.js' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  frameworks: [],
  placeholder: 'No frameworks available',
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholder: 'Choose your favorite!',
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  frameworks: [
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'next.js', label: 'Next.js' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
  ],
};
WithInitialValue.parameters = {
  docs: {
    description: {
      story: 'To set an initial value, you would typically control the `value` prop of the Combobox from its parent component.',
    },
  },
};