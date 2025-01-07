import { createBadgeHTML } from './Badge.js';
import HTMLContent from './BadgeContent.svelte'; // reusing ButtonContent

export default {
    title: 'HTML Components/Badge',
    tags: ['autodocs'],
    argTypes: {
      filled: {
        control: 'boolean',
        description: 'Whether the badge should be filled or outlined',
        defaultValue: true,
      },
      type: {
        control: 'select',
        options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
        description: 'Type of the badge',
        defaultValue: 'default',
      },
      leadingIcon: {
        control: 'select',
        options: [null, 'fa-user', 'fa-bell', 'fa-envelope'],
        description: 'Font Awesome icon class for the leading icon',
        defaultValue: null,
      },
      trailingIcon: {
        control: 'select',
        options: [null, 'fa-check', 'fa-times', 'fa-arrow-right'],
        description: 'Font Awesome icon class for the trailing icon',
        defaultValue: null,
      },
       label: {
        control: 'text',
        description: 'Text content of the badge',
        defaultValue: 'Badge',
      },
    },
  parameters: {
    docs: {
        description: {
            component: `**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases.`,
        },        
        source: {
        language: 'html',
        transform: (args, context) => {
            return createBadgeHTML(context.args);
            },
        },
    },
  },
};

const createStory = (args) => ({
    render: () => ({
        Component: HTMLContent,
        props: {
            content: createBadgeHTML(args)
        }
    })
});

export const Default = {
    render: (args) => ({
      Component: HTMLContent,
        props: {
            content: createBadgeHTML(args)
        }
    }),
    args: {
        label: 'Default Badge'
    }
};


export const Primary = {
    render: (args) => ({
        Component: HTMLContent,
          props: {
              content: createBadgeHTML(args)
          }
    }),
    args: {
      type: 'primary',
        label: 'Primary Badge'
    }
};

export const Secondary = {
    render: (args) => ({
        Component: HTMLContent,
          props: {
              content: createBadgeHTML(args)
          }
    }),
    args: {
      type: 'secondary',
        label: 'Secondary Badge'
    }
};


export const Success = {
    render: (args) => ({
        Component: HTMLContent,
          props: {
              content: createBadgeHTML(args)
          }
    }),
    args: {
        type: 'success',
        label: 'Success Badge'
    }
};


export const Warning = {
    render: (args) => ({
        Component: HTMLContent,
          props: {
              content: createBadgeHTML(args)
          }
    }),
    args: {
        type: 'warning',
        label: 'Warning Badge'
    }
};

export const Danger = {
    render: (args) => ({
        Component: HTMLContent,
          props: {
              content: createBadgeHTML(args)
          }
    }),
    args: {
        type: 'danger',
        label: 'Danger Badge'
    }
};

export const Outlined = {
    render: (args) => ({
        Component: HTMLContent,
          props: {
              content: createBadgeHTML(args)
          }
    }),
    args: {
        filled: false,
        label: 'Outlined Badge',
    }
}
export const LeadingIcon = {
    render: (args) => ({
      Component: HTMLContent,
        props: {
            content: createBadgeHTML(args)
        }
    }),
  args: {
        leadingIcon: 'fa-user',
        label: 'Leading Icon'
    }
};

export const TrailingIcon = {
    render: (args) => ({
      Component: HTMLContent,
        props: {
            content: createBadgeHTML(args)
        }
    }),
  args: {
      trailingIcon: 'fa-arrow-right',
        label: 'Trailing Icon'
  }
};

export const WithBothIcons = {
    render: (args) => ({
      Component: HTMLContent,
        props: {
            content: createBadgeHTML(args)
        }
    }),
  args: {
      leadingIcon: 'fa-bell',
        trailingIcon: 'fa-check',
        label: 'Both Icons'
    }
};