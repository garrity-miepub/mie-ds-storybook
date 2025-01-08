import Menubar from './Menubar.svelte';

export default {
    title: 'Svelte Components/Menubar',
    component: Menubar,
    tags: ['autodocs'],
    argTypes: {
      items: { control: 'object' },
    }
};

const Template = (args) => ({
    Component: Menubar,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    items: [
        {
            title: 'File',
            items: [
              { title: 'New Tab', shortcut: '⌘T' },
              { title: 'New Window', shortcut: '⌘N' },
              { title: 'New Incognito Window' },
              { type: 'separator' },
              {
                type: 'sub',
                title: 'Share',
                items: [
                  { title: 'Email link' },
                  { title: 'Messages' },
                  { title: 'Notes' },
                ],
              },
              { type: 'separator' },
              { title: 'Print...', shortcut: '⌘P' },
            ]
          },
          {
            title: 'Edit',
            items: [
              { title: 'Undo', shortcut: '⌘Z' },
              { title: 'Redo', shortcut: '⇧⌘Z' },
              { type: 'separator' },
              {
                type: 'sub',
                title: 'Find',
                items: [
                  { title: 'Search the web' },
                  { type: 'separator' },
                  { title: 'Find...' },
                  { title: 'Find Next' },
                  { title: 'Find Previous' },
                ],
              },
              { type: 'separator' },
              { title: 'Cut' },
              { title: 'Copy' },
              { title: 'Paste' },
            ]
          },
          {
            title: 'View',
            items: [
                { type: 'separator' },
                { title: 'Reload', shortcut: '⌘R' ,inset:true},
                { title: 'Force Reload', shortcut: '⇧⌘R' ,inset:true},
                { type: 'separator' },
                { title: 'Toggle Fullscreen',inset:true},
                { type: 'separator' },
                { title: 'Hide Sidebar',inset:true},
            ]
          },
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
    ],
};