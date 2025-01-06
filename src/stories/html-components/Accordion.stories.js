import HTMLContent from './AccordionContent.svelte';
import { AccordionHTML } from './Accordion';

export default {
    title: 'Html Components/Accordion',
    component: HTMLContent,
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: 'object',
            description: 'Array of accordion items',
        },
        size: {
            control: 'select',
            options: ['default', 'condensed'],
            description: 'Size of the accordion',
        },
        content: {
            table: { disable: true },
        },
    },
    render: (args) => {
        const accordionHTML = AccordionHTML(args);

        // Function to be called after the component is rendered
        const enhanceAccordion = (container) => {
            if (!container) return;

            container.addEventListener('click', (event) => {
                if (!(event.target instanceof HTMLElement)) return;
                const target = event.target;
                const button = target.closest('.accordion-button');
                if (!button) return;
                const content = button.nextElementSibling;
                 if (!(content instanceof HTMLElement)) return;
                    const isExpanded = button.getAttribute('aria-expanded') === 'true';
                    button.setAttribute('aria-expanded', (!isExpanded).toString());


                    const icon = button.querySelector('i.fa');
                    if (!icon) return;
                   if (isExpanded) {
                     icon.classList.remove('fa-chevron-up');
                     icon.classList.add('fa-chevron-down');
                   } else {
                     icon.classList.remove('fa-chevron-down');
                     icon.classList.add('fa-chevron-up');
                   }
                 const allItems = Array.from(container.querySelectorAll('.item'));
                 const allContents = allItems.map(item => item.querySelector('.content')).filter(Boolean)


                // Toggle the open class
                if (content.classList.contains('open')) {
                    content.classList.remove('open');
                }
                else{
                      allContents.forEach(el => {
                        if(el instanceof HTMLElement) el.classList.remove('open');
                      });
                       content.classList.add('open');
                }
            });
        };
        return {
            Component: HTMLContent,
            props: {
                content: accordionHTML,
                onCreated: enhanceAccordion,
            },
        };
    },
    parameters: {
        docs: {
            source: {
                transform: (args, context) => AccordionHTML(context.args),
            },
        },
    },
};

const defaultItems = [
    { title: 'Accordion Item 1', content: 'Content for item 1.' },
    { title: 'Accordion Item 2', content: 'Content for item 2.' },
    { title: 'Accordion Item 3', content: 'Content for item 3.' },
];

export const Default = {
    args: {
        items: defaultItems,
        size: 'default',
    },
};

export const Condensed = {
    args: {
        items: defaultItems,
        size: 'condensed',
    },
};