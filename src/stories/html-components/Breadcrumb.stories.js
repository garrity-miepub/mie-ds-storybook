import { createBreadcrumbHTML } from './Breadcrumb.js';
import HTMLContent from './BreadcrumbContent.svelte'; // reusing ButtonContent

export default {
  title: 'HTML Components/Breadcrumb',
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
      defaultValue: [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Details', href: '/products/details' },
      ],
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
            return createBreadcrumbHTML(context.args);
            },
        },
    },
  },
};


export const Default = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createBreadcrumbHTML(args),
        },
    }),
    args: {
      items: [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Details', href: '/products/details' },
      ],
    },
  };
  
  export const WithMoreItems = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createBreadcrumbHTML(args),
        },
      }),
    args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Category 1', href: '/products/category1' },
      { label: 'Category 2', href: '/products/category2' },
      { label: 'Details', href: '/products/details' },
    ],
    },
  };
  
  export const WithEvenMoreItems = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
          content: createBreadcrumbHTML(args)
        }
      }),
    args: {
    items: [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Category 1', href: '/products/category1' },
        { label: 'Category 2', href: '/products/category2' },
        { label: 'Category 3', href: '/products/category3' },
        { label: 'Category 4', href: '/products/category4' },
        { label: 'Details', href: '/products/details' },
    ],
    },
  }