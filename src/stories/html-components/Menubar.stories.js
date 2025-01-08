import { createMenubarHTML } from './Menubar.js';
import HTMLContent from './MenubarContent.svelte';

export default {
    title: 'HTML Components/Menubar',
    tags: ['autodocs'],
    argTypes: {
        items: { control: 'object' },
    },
    parameters: {
        docs: {
            description: {
                component: `**IN PROGRESS** This component is currently under development and is not yet complete. For a fully functional version, please refer to the Svelte implementation.`,
            },
            source: {
                language: 'html',
                transform: (args, context) => {
                    return createMenubarHTML(context.args);
                },
            },
        },
    },
};

export const Default = {
    render: (args) => ({
      Component: HTMLContent,
      props: {
        content: createMenubarHTML(args)
      }
    }),
};

export const WithCheckboxes = {
    render: (args) => ({
        Component: HTMLContent,
        props: {
            content: createMenubarHTML(args)
        }
      }),
      args:{
        items: [
            {
              title: 'View',
              items: [
                  { type: 'checkbox', title: 'Always Show Bookmarks Bar', bindValue: false },
                  { type: 'checkbox', title: 'Always Show Full URLs', bindValue: true },
                  { type: 'separator' },
                  { title: 'Reload', shortcut: '⌘R' ,inset:true},
                  { title: 'Force Reload', shortcut: '⇧⌘R' ,inset:true},
                  { type: 'separator' },
                  { title: 'Toggle Fullscreen',inset:true},
                  { type: 'separator' },
                  { title: 'Hide Sidebar',inset:true},
              ]
            },
        ]
      }
};


export const WithRadioGroups = {
    render: (args) => ({
        Component: HTMLContent,
         props: {
             content: createMenubarHTML(args)
        }
      }),
      args: {
          items: [
              {
                title: 'Profiles',
                items: [
                  { type: 'radioGroup',items: [
                    {title: 'Andy', value: "andy"},
                    {title: 'Benoit', value:"benoit"},
                    {title: 'Luis', value:"Luis"},
                  ]},
                  { type: 'separator' },
                  {title: 'Edit...',inset:true},
                  { type: 'separator' },
                  {title: 'Add Profile...',inset:true},
                ]
              }
          ]
      }
}