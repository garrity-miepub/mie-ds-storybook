import HTMLContent from './AlertDialogContent.svelte';
import { AlertDialogHTML } from './AlertDialog';

export default {
    title: 'Html Components/Alert Dialog',
    component: HTMLContent,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
      docs: {
          source: {
              transform: (args, context) => AlertDialogHTML(context.args),
          },
          description: {
            component: `**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases.`,
          },          
        },
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Title of the alert dialog',
            defaultValue: 'Default Title',
        },
        content: {
            control: 'text',
            description: 'Content of the alert dialog',
            defaultValue: 'This is the default alert dialog content.',
        },
        type: {
            control: { type: 'select' },
            options: ['Default', 'Informative', 'Warning', 'Danger', 'Success'],
            description: 'Type/severity of the alert dialog',
            defaultValue: 'Default',
        },
        icon: {
            control: 'text',
            description: 'Optional Font Awesome icon class to display next to the title',
            defaultValue: null,
        }
    },
     render: (args) => ({
       Component: HTMLContent,
       props: {
           content: AlertDialogHTML(args),
       }
    }),

};


//Default Alert Dialog
export const Default = {
    args: {
        title: 'Default Alert',
        content: 'This is a standard alert dialog.',
        type: 'Default',
    },
};


//Informative Alert Dialog
export const Informative = {
    args: {
        title: 'Informative Alert',
        content: 'This dialog provides some useful information.',
        type: 'Informative',
        icon: 'fa-info-circle',
    },
};

//Warning Alert Dialog
export const Warning = {
    args: {
        title: 'Warning Alert',
        content: 'Be careful with this action.',
        type: 'Warning',
        icon: 'fa-exclamation-triangle',
    },
};

//Danger Alert Dialog
export const Danger = {
    args: {
        title: 'Danger Alert',
        content: 'An error has occurred! Please take action.',
        type: 'Danger',
        icon: 'fa-exclamation-circle',
    },
};

//Success Alert Dialog
export const Success = {
    args: {
        title: 'Success Alert',
        content: 'Your operation was completed successfully!',
        type: 'Success',
        icon: 'fa-check-circle',
    },
};

//Interactive Alert Dialog
export const Interactive = {
    args: {
        title: 'Interactive Alert',
        content: 'You can customize the title and content here.',
        type: 'Default',
        icon: 'fa-cog',
    },
};