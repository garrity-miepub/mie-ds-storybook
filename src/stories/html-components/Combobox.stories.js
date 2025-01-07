import { createComboboxHTML } from './Combobox.js';
import HTMLContent from './ComboboxContent.svelte';

export default {
  title: 'HTML Components/Combobox',
  tags: ['autodocs'],
    argTypes: {
      frameworks: {
        control: 'object',
        description: 'Array of framework objects for the combobox',
        defaultValue: [
            {
                value: 'sveltekit',
                label: 'SvelteKit',
              },
              {
                value: 'next.js',
                label: 'Next.js',
              },
              {
                value: 'nuxt.js',
                label: 'Nuxt.js',
              },
              {
                value: 'remix',
                label: 'Remix',
              },
              {
                value: 'astro',
                label: 'Astro',
              },
            ],
      },
      placeholder: {
          control: 'text',
          description: 'Placeholder text for the combobox',
          defaultValue: 'Select a framework...'
      },
      open: {
          control: 'boolean',
          description: 'Whether the combobox menu is open',
        defaultValue: false
      },
      value: {
          control: 'text',
          description: 'The value of the selected framework',
        defaultValue: ''
      },
    inputValue: {
      control: 'text',
        description: 'The value of the search input',
      defaultValue: ''
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
                    return createComboboxHTML(context.args);
                },
            },
        },
    },
};


export const Default = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createComboboxHTML(args)
      }
    }),
};

export const Open = {
  render: (args) => ({
    Component: HTMLContent,
      props: {
        content: createComboboxHTML(args)
      }
  }),
    args: {
      open: true
    }
  };

export const WithSelectedValue = {
  render: (args) => ({
    Component: HTMLContent,
      props: {
        content: createComboboxHTML(args)
      }
  }),
    args: {
      value: 'next.js'
    }
  };

export const WithInputValue = {
    render: (args) => ({
        Component: HTMLContent,
          props: {
              content: createComboboxHTML(args)
          }
      }),
    args: {
        open: true,
        inputValue: 'nex'
    }
  };