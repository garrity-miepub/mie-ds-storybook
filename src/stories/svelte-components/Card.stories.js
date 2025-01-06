// src/components/Card/Card.stories.js
import Card from './Card.svelte';

export default {
  title: 'Svelte Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    media: {
      control: 'text',
      description: 'Rich media area of the card (HTML string)',
      table: {
        category: 'Media',
      },
    },
    showMedia: {
      control: 'boolean',
      description: 'Toggle the visibility of the media area',
      table: {
        category: 'Media',
      },
    },
    primaryTitle: {
      control: 'text',
      description: 'Primary title of the card',
      table: {
        category: 'Titles',
      },
    },
    showPrimaryTitle: {
      control: 'boolean',
      description: 'Toggle the visibility of the primary title',
      table: {
        category: 'Titles',
      },
    },
    secondaryTitle: {
      control: 'text',
      description: 'Secondary title of the card',
      table: {
        category: 'Titles',
      },
    },
    showSecondaryTitle: {
      control: 'boolean',
      description: 'Toggle the visibility of the secondary title',
      table: {
        category: 'Titles',
      },
    },
    supportingText: {
      control: 'text',
      description: 'Supporting text of the card',
      table: {
        category: 'Text',
      },
    },
    showSupportingText: {
      control: 'boolean',
      description: 'Toggle the visibility of the supporting text',
      table: {
        category: 'Text',
      },
    },
    actions: {
      control: 'text',
      description: 'Actions area of the card (HTML string)',
      table: {
        category: 'Actions',
      },
    },
    showActions: {
      control: 'boolean',
      description: 'Toggle the visibility of the actions area',
      table: {
        category: 'Actions',
      },
    },
    leadingUtilityIcon: {
      control: 'select',
      options: ['none', 'user', 'check', 'warning'],
      description: 'Leading icon of the utility section',
      table: {
        category: 'Utility',
      },
    },
    utilityHeader: {
      control: 'text',
      description: 'Header row of the utility section',
      table: {
        category: 'Utility',
      },
    },
    utilityContent: {
      control: 'text',
      description: 'Content row of the utility section',
      table: {
        category: 'Utility',
      },
    },
    utilityIcons: {
      control: 'array',
      options: ['user', 'check', 'warning'],
      description: 'Icons displayed on hover in the utility section',
      table: {
        category: 'Utility',
      },
    },
    showUtility: {
      control: 'boolean',
      description: 'Toggle the visibility of the utility section',
      table: {
        category: 'Utility',
      },
    },
  },
};

const Template = (args) => ({
  Component: Card,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  media: '<img src="https://fastly.picsum.photos/id/204/936/204.jpg?hmac=Bqz3HnPUeEFJ6DyzhRugEziG6DkOLFY5Hqg2cdVn3FQ" alt="Placeholder" />',
  primaryTitle: 'Primary Title',
  secondaryTitle: 'Secondary Title',
  supportingText: 'This is some supporting text for the card.',
  actions: `
    <button type="button" class="button tertiary"><label>Cancel</label></button>
    <button type="button" class="button primary"><label>Save</label></button>
  `,
  showMedia: true,
  showPrimaryTitle: true,
  showSecondaryTitle: true,
  showSupportingText: true,
  showActions: true,
  leadingUtilityIcon: 'user',
  utilityHeader: 'Utility Header',
  utilityContent: 'Utility Content',
  utilityIcons: ['check', 'warning'],
  showUtility: true,
};