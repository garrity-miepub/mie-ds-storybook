import ContextMenu from './ContextMenu.svelte';

export default {
  title: 'Svelte Components/Context Menu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases.`,
      },
    },
  },
  argTypes: {
    items: {
      control: 'array',
      description: 'Array of menu items (strings)',
      defaultValue: ['Option 1', 'Option 2', 'Option 3'],
    },
  },
};

const Template = ({ items }) => ({
  Component: ContextMenu,
  props: { items },
  on: {},
});

export const Default = Template.bind({});
Default.args = {
  items: ['Back', 'Forward', 'Reload'],
};

export const WithSubmenu = Template.bind({});
WithSubmenu.args = {
  items: ['Cut', 'Copy', 'Paste', '---', 'More Options'],
};
WithSubmenu.parameters = {
  docs: {
    description: {
      story: 'This is a simplified context menu. Implementing actual submenus would require more complex logic.',
    },
  },
};

export const WithCustomTrigger = Template.bind({});
WithCustomTrigger.args = {
  items: ['Download', 'Share', 'Delete'],
};
WithCustomTrigger.parameters = { // Corrected assignment
  docs: {
    source: {
      code: `<ContextMenu items={['Download', 'Share', 'Delete']}>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Right-Click Me
  </button>
</ContextMenu>`,
      language: 'svelte',
      type: 'code',
    },
  },
};
WithCustomTrigger.decorators = [
  (Story) => {
    return {
      Component: Story,
    };
  },
];
WithCustomTrigger.render = (args) => ({
  Component: ContextMenu,
  props: args,
  slots: {
    default: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Right-Click Me
              </button>`,
  },
});