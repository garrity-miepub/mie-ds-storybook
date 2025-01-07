import { createDatePickerHTML } from './DatePicker.js';
import HTMLContent from './DatePickerContent.svelte';

export default {
    title: 'HTML Components/DatePicker',
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'date',
            description: 'The selected date',
            defaultValue: null
        },
        format: {
            control: 'text',
            description: 'The date format',
            defaultValue: 'MM/DD/YYYY'
        },
        includeTime: {
          control: 'boolean',
          description: 'Include time input',
          defaultValue: false
        },
        showCalendar: {
          control: 'boolean',
            description: 'Whether the calendar is open or not',
          defaultValue: false
        },
       inputValue: {
            control: 'text',
           description: 'The value of the input',
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
                    return createDatePickerHTML(context.args);
                },
            },
        },
    },
};

export const Default = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
            content: createDatePickerHTML(args)
        }
    })
};

export const WithSelectedDate = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
            content: createDatePickerHTML(args)
        }
    }),
    args: {
        value: new Date(2024, 2, 15)
    }
};

export const WithTime = {
    render: (args) => ({
      Component: HTMLContent,
        props: {
          content: createDatePickerHTML(args)
        }
    }),
    args: {
      includeTime: true
    }
  };

export const CalendarOpen = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createDatePickerHTML(args)
        }
    }),
    args: {
        showCalendar: true
    }
};