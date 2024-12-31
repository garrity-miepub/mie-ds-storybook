/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],
  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-essentials",
    // "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/svelte-vite",
    options: {
      docs: {
        autodocs: true,
      },      
    },
  },
  staticDirs: ['../public'],
  viteFinal: async (config, { configType }) => {
    config.base = "/wgarrity/mie-ds-storybook-sveltestrap/";
    return config;
  },  
};
export default config;
