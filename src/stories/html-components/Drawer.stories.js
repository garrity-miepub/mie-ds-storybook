import { createDrawerHTML } from './Drawer.js';
import HTMLContent from './DrawerContent.svelte';

export default {
    title: 'HTML Components/Drawer',
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Whether the drawer is open or not',
            defaultValue: false
        },
        title: {
            control: 'text',
            description: 'Title of the drawer',
            defaultValue: ''
        },
        placement: {
            control: 'select',
            options: ['bottom', 'right', 'left'],
          description: 'Placement of the drawer',
          defaultValue: 'bottom'
        },
        showHeader: {
            control: 'boolean',
            description: 'Toggle the visibility of the header',
            defaultValue: true
        },
        showCloseButton: {
            control: 'boolean',
            description: 'Toggle the visibility of the close button',
            defaultValue: true
        },
        triggerText: {
            control: 'text',
            description: 'Text for the trigger button',
          defaultValue: 'Open Drawer'
        },
        content: {
            control: 'text',
            description: 'The content of the drawer',
            defaultValue: 'This is the drawer content'
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
            return createDrawerHTML(context.args);
          },
        },
      },
    },
};


export const Default = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createDrawerHTML(args)
      }
    }),
};

export const OpenDrawer = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createDrawerHTML(args)
        }
      }),
    args: {
      isOpen: true
    }
};

export const RightPlacement = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createDrawerHTML(args)
        }
      }),
  args: {
      placement: 'right',
        isOpen: true
    }
  };

export const LeftPlacement = {
  render: (args) => ({
    Component: HTMLContent,
      props: {
          content: createDrawerHTML(args)
      }
    }),
  args: {
      placement: 'left',
      isOpen: true
    }
};

export const NoHeader = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createDrawerHTML(args)
      }
    }),
    args: {
        showHeader: false,
        isOpen: true
    }
};

export const NoCloseButton = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createDrawerHTML(args)
      }
    }),
    args: {
        showCloseButton: false,
        isOpen: true
    }
};