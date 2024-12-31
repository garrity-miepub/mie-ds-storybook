<!-- Button.stories.svelte -->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';
  import { fn } from '@storybook/test';

  const { Story } = defineMeta({
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],

    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'tertiary'],
      },
      label: { control: 'text' },
      leadingIcon: {
        control: { type: 'select' },
        options: ['none', 'envelope', 'lock', 'user', 'close'],
      },
      trailingIcon: {
        control: { type: 'select' },
        options: ['none', 'chevronDown', 'chevronRight', 'download'],
      },
      size: {
        control: { type: 'select' },
        options: ['default', 'small', 'large'],
      },
      customIcon: {
        control: { type: 'select' },
        options: ['default', 'icon-only'],
      },
    },

    args: {
      label: 'Button',
      // onClick: fn(),
    }
  });
</script>

<Story
  name="Primary"
  args={{ type: 'primary', label: 'Primary Button' }}
/>

<Story
  name="Secondary"
  args={{ type: 'secondary', label: 'Secondary Button' }}
/>

<Story
  name="Tertiary"
  args={{ type: 'tertiary', label: 'Tertiary Button' }}
/>

<Story
  name="Small"
  args={{ size: 'small', label: 'Small Button' }}
/>

<Story
  name="Large"
  args={{ size: 'large', label: 'Large Button' }}
/>

<Story
  name="Icon Only (Envelope)"
  args={{
    customIcon: 'icon-only',
    leadingIcon: 'envelope',
    label: 'Icon Button'
  }}
/>
