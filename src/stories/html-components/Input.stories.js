import { createInputHTML } from './Input.js';
import HTMLContent from './InputContent.svelte';

export default {
    title: 'HTML Components/Input',
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Label for the input field',
            defaultValue: ''
        },
         ariaLabel: {
            control: 'text',
            description: 'Aria label for the input field',
            defaultValue: ''
        },
        leadingIcon: {
            control: 'select',
            options: ['none', 'user', 'check', 'warning'],
          description: 'Leading icon of the input',
          defaultValue: 'none'
        },
        trailingIcon: {
            control: 'select',
            options: ['none', 'user', 'check', 'warning'],
          description: 'Trailing icon of the input',
            defaultValue: 'none'
        },
        state: {
            control: 'select',
            options: ['default', 'success', 'warning', 'danger', 'disabled'],
          description: 'State of the input',
          defaultValue: 'default'
        },
        helperText: {
            control: 'text',
            description: 'Helper text for the input',
            defaultValue: ''
        },
       value: {
            control: 'text',
            description: 'The value of the input',
            defaultValue: ''
        },
       focused: {
            control: 'boolean',
            description: 'Whether the input is focused or not',
            defaultValue: false
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
                    return createInputHTML(context.args);
                },
            },
        },
    },
};


export const Default = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createInputHTML(args)
      }
    }),
    args: {
      label: 'Input label'
    }
};

export const WithLeadingIcon = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createInputHTML(args)
      }
    }),
    args: {
      label: 'Input label',
        leadingIcon: 'user'
    }
};

export const WithTrailingIcon = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createInputHTML(args)
      }
    }),
    args: {
      label: 'Input label',
        trailingIcon: 'user'
    }
};

export const WithHelperText = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createInputHTML(args)
      }
    }),
    args: {
      label: 'Input label',
        helperText: 'Helper text'
    }
  };
  
export const FocusedInput = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createInputHTML(args)
      }
    }),
      args: {
          label: 'Input label',
          focused: true
      }
  };

export const SuccessInput = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createInputHTML(args)
      }
    }),
      args: {
        label: 'Input label',
        state: 'success',
        helperText: 'This is a successful input'
      }
  };

export const WarningInput = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createInputHTML(args)
        }
      }),
    args: {
        label: 'Input label',
      state: 'warning',
        helperText: 'This is a warning input'
    }
};

export const DangerInput = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createInputHTML(args)
        }
      }),
    args: {
        label: 'Input label',
      state: 'danger',
        helperText: 'This is a danger input'
    }
};

export const DisabledInput = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createInputHTML(args)
        }
      }),
    args: {
        label: 'Input label',
      state: 'disabled',
        helperText: 'This input is disabled'
    }
};
  
export const WithValue = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createInputHTML(args)
      }
    }),
      args: {
          label: 'Input label',
          value: 'some input value'
      }
  };