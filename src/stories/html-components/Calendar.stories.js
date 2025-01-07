import { createCalendarHTML } from './Calendar.js';
import HTMLContent from './CalendarContent.svelte';

export default {
    title: 'HTML Components/Calendar',
    tags: ['autodocs'],
    argTypes: {
        selectedDate: {
          control: 'date',
            description: 'The selected date',
          defaultValue: null,
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
                return createCalendarHTML(context.args);
                },
          },
        },
    },
};

export const Default = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
            content: createCalendarHTML(args)
        }
    }),
    args: {
        selectedDate: null
    }
};

export const WithSelectedDate = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
            content: createCalendarHTML(args)
        }
    }),
    args: {
        selectedDate: new Date(2024, 2, 15)
    }
};