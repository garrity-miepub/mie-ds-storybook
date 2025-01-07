import { createContextMenuHTML } from './ContextMenu.js';
import HTMLContent from './ContextMenuContent.svelte';

export default {
  title: 'HTML Components/Context Menu',
  tags: ['autodocs'],
  argTypes: {
      items: {
        control: 'array',
          description: 'Array of strings for context menu items',
        defaultValue: ['Item 1', 'Item 2', 'Item 3'],
      },
      isOpen: {
        control: 'boolean',
          description: 'Whether the context menu is open',
        defaultValue: false
      },
       menuX: {
        control: 'number',
           description: 'The x position of the menu',
        defaultValue: 0
      },
      menuY: {
        control: 'number',
          description: 'The y position of the menu',
        defaultValue: 0
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
            return createContextMenuHTML(context.args);
          },
        },
      },
    },
};


export const Default = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createContextMenuHTML(args),
      },
    }),
};

export const OpenMenu = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createContextMenuHTML(args),
      },
    }),
    args: {
      isOpen: true,
        menuX: 100,
        menuY: 100
    }
  };