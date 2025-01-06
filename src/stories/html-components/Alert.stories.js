import HTMLContent from './AlertContent.svelte';
import { AlertHTML } from './Alert';

export default {
    title: 'HTML Components/Alert',
    component: HTMLContent,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['informative', 'warning', 'success', 'danger'],
            description: 'Type of the alert',
        },
        icon: {
            control: 'text',
            description: 'Icon class for the alert',
        },
        heading: {
            control: 'text',
            description: 'Heading text of the alert',
        },
        content: {
            control: 'text',
            description: 'Content text of the alert',
        },
        link: {
            control: 'text',
            description: 'Link text of the alert',
        },
        linkPath: {
            control: 'text',
            description: 'Link path (href) of the alert',
        }
    },
     render: (args) => ({
       Component: HTMLContent,
       props: {
           content: AlertHTML(args),
       }
    }),
    parameters: {
        docs: {
            source: {
                transform: (args, context) => AlertHTML(context.args),
            },
        },
    },
};


export const Informative = {
    args: {
        type: 'informative',
        icon: 'fa-info-circle',
        heading: 'Informative Alert',
        content: 'This is an informative alert. Quis mihi dabit adquiescere in te? quis dabit mihi, ut venias in cor meum et inebries illud.',
        link: 'Informative link',
        linkPath: '#',
    },
};


export const Warning = {
    args: {
        type: 'warning',
        icon: 'fa-exclamation-triangle',
        heading: 'Warning Alert',
        content: 'This is a warning alert. Ed tamen sine me loqui apud misericordiam tuam, me terram et cinerem,sine tamen loqui, quoniam ecce misericordia tua est.',
        link: 'Warning link',
        linkPath: '#',
    },
};


export const Success = {
    args: {
        type: 'success',
        icon: 'fa-check-circle',
        heading: 'Success Alert',
        content: 'This is a success alert. Post et ridere coepi, dormiens primo, deinde vigilans. hoc enim de me mihi indicatum est et credidi, quoniam sic videmus alios infantes; namista mea non memini',
        link: 'Success link',
        linkPath: '#',
    },
};

export const Danger = {
    args: {
        type: 'danger',
        icon: 'fa-exclamation-circle',
        heading: 'Danger Alert',
        content: 'This is an error alert. Nonne ab infantia huc pergens veni in pueritiam? vel potius ipsa in me venit et successit infantiae?',
        link: 'Danger link',
        linkPath: '#',
    },
};