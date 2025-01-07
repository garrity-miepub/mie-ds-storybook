import { createCardHTML } from './Card.js';
import HTMLContent from './CardContent.svelte';

export default {
    title: 'HTML Components/Card',
    tags: ['autodocs'],
    argTypes: {
        media: {
            control: 'text',
            description: 'HTML for the media section of the card',
            defaultValue: null,
            table: {
              category: 'Media',
            },
        },
        showMedia: {
            control: 'boolean',
            description: 'Toggle visibility of media section',
            defaultValue: true,
            table: {
              category: 'Media',
            },
        },
        primaryTitle: {
          control: 'text',
          description: 'The primary title of the card',
          defaultValue: '',
          table: {
            category: 'Titles',
          },
        },
        showPrimaryTitle: {
            control: 'boolean',
            description: 'Toggle visibility of the primary title',
            defaultValue: true,
            table: {
              category: 'Titles',
            },
        },
        secondaryTitle: {
          control: 'text',
          description: 'The secondary title of the card',
          defaultValue: '',
          table: {
            category: 'Titles',
          },
        },
        showSecondaryTitle: {
            control: 'boolean',
            description: 'Toggle visibility of the secondary title',
            defaultValue: true,
            table: {
              category: 'Titles',
            },
        },
      supportingText: {
        control: 'text',
        description: 'The supporting text of the card',
        defaultValue: '',
        table: {
          category: 'Text',
        },
      },
      showSupportingText: {
            control: 'boolean',
            description: 'Toggle visibility of supporting text',
            defaultValue: true,
            table: {
              category: 'Text',
            },
        },
      actions: {
          control: 'text',
        description: 'HTML for the action buttons at the bottom of the card',
            defaultValue: null,
             table: {
                category: 'Actions',
            },
      },
      showActions: {
          control: 'boolean',
        description: 'Toggle visibility of the action buttons',
          defaultValue: true,
           table: {
                category: 'Actions',
            },
      },
      leadingUtilityIcon: {
          control: 'select',
          options: ['none', 'user', 'check', 'warning'],
          description: 'Leading utility icon',
        defaultValue: 'none',
          table: {
              category: 'Utility',
            },
      },
      utilityHeader: {
        control: 'text',
        description: 'The utility header',
        defaultValue: '',
          table: {
              category: 'Utility',
            },
      },
      utilityContent: {
        control: 'text',
        description: 'The utility content row',
        defaultValue: '',
          table: {
              category: 'Utility',
            },
      },
      utilityIcons: {
        control: 'array',
        options: ['user', 'check', 'warning'],
        description: 'Trailing utility icons',
          defaultValue: [],
        table: {
          category: 'Utility',
        },
      },
       showUtility: {
            control: 'boolean',
           description: 'Toggle visibility of the utility section',
           defaultValue: true,
            table: {
              category: 'Utility',
            },
        },
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                transform: (args, context) => {
                    return createCardHTML(context.args);
                }
            }
        }
    }
};


export const Default = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
            content: createCardHTML(args)
        }
    }),
    args: {
        media: '<img src="https://fastly.picsum.photos/id/204/936/204.jpg?hmac=Bqz3HnPUeEFJ6DyzhRugEziG6DkOLFY5Hqg2cdVn3FQ" alt="Placeholder" />',
        primaryTitle: 'Primary Title',
        secondaryTitle: 'Secondary Title',
        supportingText: 'This is some supporting text for the card.',
        actions: `
          <button type="button" class="button tertiary"><label>Cancel</label></button>
          <button type="button" class="button primary"><label>Save</label></button>
        `,
        showMedia: true,
        showPrimaryTitle: true,
        showSecondaryTitle: true,
        showSupportingText: true,
        showActions: true,
        leadingUtilityIcon: 'user',
        utilityHeader: 'Utility Header',
        utilityContent: 'Utility Content',
        utilityIcons: ['check', 'warning'],
        showUtility: true,
      }
  };
  
  export const WithMedia = {
      render: (args) => ({
          Component: HTMLContent,
          props: {
            content: createCardHTML(args)
          }
      }),
    args: {
        media: '<img src="https://placekitten.com/300/200" alt="Card Media" style="width: 100%; height: auto;" />',
      primaryTitle: 'Card with Media',
      supportingText: 'This card includes an image.',
    }
  };
  
  export const WithActions = {
        render: (args) => ({
          Component: HTMLContent,
            props: {
              content: createCardHTML(args)
            }
        }),
    args: {
        primaryTitle: 'Card with Actions',
        supportingText: 'This card has some actions.',
        actions: '<button class="button primary">Action 1</button> <button class="button secondary">Action 2</button>'
    }
  };
  
  export const WithUtility = {
      render: (args) => ({
          Component: HTMLContent,
          props: {
              content: createCardHTML(args)
          }
      }),
    args: {
        primaryTitle: 'Card with Utility',
        supportingText: 'This card has a utility section',
        leadingUtilityIcon: 'user',
        utilityHeader: 'Utility Header',
        utilityContent: 'Utility Content'
    }
  };
  
  export const WithTrailingUtilityIcons = {
      render: (args) => ({
          Component: HTMLContent,
          props: {
              content: createCardHTML(args)
          }
      }),
    args: {
        primaryTitle: 'Card with utility icons',
        supportingText: 'This card has a utility section with icons',
        utilityIcons: ['check', 'warning']
    }
  };
  
  
  export const FullCard = {
      render: (args) => ({
          Component: HTMLContent,
          props: {
            content: createCardHTML(args)
          }
      }),
    args: {
        media: '<img src="https://placekitten.com/300/200" alt="Card Media" style="width: 100%; height: auto;" />',
        primaryTitle: 'Full Card Example',
        secondaryTitle: 'Subtitle',
        supportingText: 'This is a card with media, supporting text, utility and actions.',
        leadingUtilityIcon: 'warning',
        utilityHeader: 'Utility Header',
        utilityContent: 'Some useful content.',
        utilityIcons: ['user', 'check'],
        actions: '<button class="button primary">Action 1</button> <button class="button secondary">Action 2</button>'
    }
  }