import { createHoverCardHTML } from './HoverCard.js';
import HTMLContent from './HoverCardContent.svelte';

export default {
  title: 'HTML Components/HoverCard',
  tags: ['autodocs'],
  argTypes: {
    targetText: {
      control: 'text',
      description: 'Text to trigger hover',
        defaultValue: 'Hover Over Me'
    },
    iconClass: {
      control: 'text',
      description: 'Font Awesome class for the icon',
        defaultValue: null
    },
    header: {
      control: 'text',
      description: 'Header text',
        defaultValue: null
    },
    content: {
      control: 'text',
      description: 'Main content text',
        defaultValue: null
    },
    linkHref: {
        control: 'text',
        description: 'Link for the content footer',
        defaultValue: null
    },
    linkText: {
        control: 'text',
        description: 'Link text for the footer',
        defaultValue: null
    },
      isHovering: {
        control: 'boolean',
        description: 'Set to true to show hover card',
          defaultValue: false
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
                    return createHoverCardHTML(context.args);
                },
            },
        },
    },
};

export const Default = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createHoverCardHTML(args)
      }
    }),
};

export const WithContent = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createHoverCardHTML(args)
        }
      }),
    args: {
      header: 'Header',
      content: 'This is some content for the card',
    }
  };
  
  export const WithIcon = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
            content: createHoverCardHTML(args)
        }
      }),
      args: {
      iconClass: 'fa fa-info-circle',
        header: 'Header',
        content: 'This is some content with an icon'
      }
  };
  
  export const WithLink = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createHoverCardHTML(args)
        }
      }),
      args: {
      linkHref: '#',
        linkText: 'Link text',
        header: 'Header',
        content: 'This content includes a link'
      }
  };
  
  export const OpenCard = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
            content: createHoverCardHTML(args)
        }
      }),
      args: {
        isHovering: true,
        header: 'Header',
        content: 'This is a card that has been set to the open state'
      }
  };