import Pagination from './Pagination.svelte';

export default {
  title: 'Svelte Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    onPageChange: { action: 'onPageChange' },
  },
};

const Template = (args) => ({
  Component: Pagination,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  totalPages: 10,
};

export const InitialPage = Template.bind({});
InitialPage.args = {
  totalPages: 10,
  currentPage: 3,
};

export const FewPages = Template.bind({});
FewPages.args = {
  totalPages: 3,
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  totalPages: 20,
};