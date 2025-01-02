<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatavisWrapper from './DatavisWrapper.svelte';
  import './DatavisStories.css';

  const { Story } = defineMeta({
    title: 'Components/Datavis',
    component: DatavisWrapper,
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
  });
</script>

<Story name="Default" />
