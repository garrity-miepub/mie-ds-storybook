import { createDialogHTML } from './Dialog.js';
import HTMLContent from './DialogContent.svelte';

export default {
    title: 'HTML Components/Dialog',
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Whether the dialog is open',
            defaultValue: false
        },
        title: {
          control: 'text',
          description: 'Title of the dialog',
          defaultValue: ''
        },
        content: {
          control: 'text',
          description: 'Content of the dialog',
            defaultValue: 'This is a dialog'
        },
        triggerText: {
            control: 'text',
            description: 'The text for the trigger button',
            defaultValue: 'Open Dialog'
        },
        showHeader: {
            control: 'boolean',
            description: 'Toggle the visibility of the header',
          defaultValue: true
        },
        showFooter: {
            control: 'boolean',
            description: 'Toggle the visibility of the footer',
          defaultValue: true
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
                return createDialogHTML(context.args);
                },
            },
        },
      },
};


export const Default = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createDialogHTML(args)
        }
    }),
};

export const OpenDialog = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createDialogHTML(args)
        }
      }),
    args: {
      isOpen: true
    }
};
  
  export const NoHeader = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createDialogHTML(args)
        }
      }),
      args: {
          showHeader: false
      }
  };
  
  export const NoFooter = {
      render: (args) => ({
        Component: HTMLContent,
          props: {
            content: createDialogHTML(args)
          }
        }),
        args: {
            showFooter: false
        }
  };