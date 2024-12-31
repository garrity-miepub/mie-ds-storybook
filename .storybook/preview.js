/** @type { import('@storybook/svelte').Preview } */
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/mie-ds-core/styles/styles.scss';
import '../node_modules/mie-ds-brand-bluehive-light/styles/styles.scss';
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
