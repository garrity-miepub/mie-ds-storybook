// Accordion.js
export const AccordionHTML = ({ items, size = 'default' }) => {
  const accordionClass = ['ds-accordion'];
  if (size === 'condensed') {
    accordionClass.push('condensed');
  }

  const accordionItemsHTML = items.map((item, index) => `
    <div class="item">
      <button class="accordion-button" type="button" aria-expanded="false" data-index="${index}">
        ${item.title}
        <i class="fa fa-chevron-down"></i>
      </button>
      <div class="content">${item.content}</div>
    </div>
  `);

    const script = `
      <script>
          document.addEventListener('DOMContentLoaded', () => {
          console.log('DOMContentLoaded event fired');

              const accordions = document.querySelectorAll('.ds-accordion');
              console.log('accordions', accordions);
              accordions.forEach(accordion => {
                  const buttons = accordion.querySelectorAll('.accordion-button');
              console.log('buttons', buttons);

                  buttons.forEach(button => {
                      button.addEventListener('click', () => {
                        console.log('Button Clicked', button);

                        const content = button.nextElementSibling;
                        console.log('content', content);

                          const expanded = button.getAttribute('aria-expanded') === 'true';
                          button.setAttribute('aria-expanded', (!expanded).toString());
                          content.classList.toggle('open');
                          const icon = button.querySelector('i.fa');
                          console.log('icon', icon);

                          if (!icon) return;
                          if (expanded) {
                              icon.classList.remove('fa-chevron-up');
                              icon.classList.add('fa-chevron-down');
                          } else {
                              icon.classList.remove('fa-chevron-down');
                              icon.classList.add('fa-chevron-up');
                          }
                      });
                  });
              });
          });
      </script>
    `;

  return `
    <div class="${accordionClass.join(' ')}">
      ${accordionItemsHTML.join('')}
    </div>
    ${script}
  `;
};

