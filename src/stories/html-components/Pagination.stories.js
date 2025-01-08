import { createPaginationHTML } from './Pagination.js';
import HTMLContent from './PaginationContent.svelte';

export default {
    title: 'HTML Components/Pagination',
    component: HTMLContent,
    tags: ['autodocs'],
    argTypes: {
            currentPage: {
                control: 'number',
                description: 'Current page number',
            },
            totalPages: {
              control: 'number',
              description: 'Total number of pages',
            }
        },
    parameters: {
        docs: {
            description: {
                component: `**IN PROGRESS** This component is currently under development and is not yet complete. For a fully functional version, please refer to the Svelte implementation.`,
            },            
            source: {
                language: 'html',
                transform: (args, context) => {
                    return createPaginationHTML(context.args);
                },
            },
        },
    },
};


export const Default = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createPaginationHTML(args)
      }
    }),
   args: {
       currentPage: 1,
       totalPages: 10,
   }
};
export const Truncated = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createPaginationHTML(args)
        }
    }),
   args: {
       currentPage: 6,
      totalPages: 20,
   }
};