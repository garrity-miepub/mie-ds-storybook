import Breadcrumb from './Breadcrumb.svelte';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items (label and href)',
      defaultValue: [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Details', href: '/products/details' },
      ],
    },
  },
};

const Template = ({ items }) => ({
  Component: Breadcrumb,
  props: { items },
});

/**
 * Default Breadcrumb (3 Levels)
 */
export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Details', href: '/products/details' },
  ],
};

/**
 * Long Breadcrumb with Collapse
 */
export const LongBreadcrumb = Template.bind({});
LongBreadcrumb.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Section 1', href: '/section1' },
    { label: 'Category A', href: '/section1/categoryA' },
    { label: 'Subcategory X', href: '/section1/categoryA/subcategoryX' },
    { label: 'Product List', href: '/section1/categoryA/subcategoryX/products' },
    { label: 'Product Details', href: '/section1/categoryA/subcategoryX/products/details' },
  ],
};

/**
 * Interactive Breadcrumb
 */
export const Interactive = Template.bind({});
Interactive.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Section', href: '/section' },
    { label: 'Page', href: '/section/page' },
  ],
};