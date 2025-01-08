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
  viteFinal: async (viteConfig, { configType }) => {
    // Set the base path dynamically based on PUBLIC_URL
    viteConfig.base = process.env.PUBLIC_URL || "/wgarrity/mie-ds-storybook-sveltestrap/";
    return viteConfig;
  },
};
export default config;
