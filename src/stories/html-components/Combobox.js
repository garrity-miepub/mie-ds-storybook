export const createComboboxHTML = ({
    frameworks = [
        {
          value: 'sveltekit',
          label: 'SvelteKit',
        },
        {
          value: 'next.js',
          label: 'Next.js',
        },
        {
          value: 'nuxt.js',
          label: 'Nuxt.js',
        },
        {
          value: 'remix',
          label: 'Remix',
        },
        {
          value: 'astro',
          label: 'Astro',
        },
      ],
    placeholder = 'Select a framework...',
    open = false,
    value = '',
    inputValue = '',
  }) => {

    const selectedValue = frameworks.find((f) => f.value === value)?.label ?? placeholder;
    const filteredFrameworks = frameworks.filter((f) =>
      f.label.toLowerCase().includes(inputValue.toLowerCase())
    );


    let comboboxHTML = `
    <div class="combobox" data-open="${open}" data-value="${value}" data-input-value="${inputValue}">
        <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="${open}"
            class="border border-gray-300 rounded px-4 py-2 w-[200px] text-left flex items-center justify-between"
        >
            ${selectedValue}
            <i class="fa-solid fa-chevron-down ml-2 opacity-50"></i>
        </button>
        ${open ? `
            <div class="combobox-menu" tabindex="-1" role="listbox">
                <div class="p-2">
                    <input
                        type="text"
                        placeholder="Search framework..."
                        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                         value="${inputValue}"
                    />
                </div>
                ${filteredFrameworks.length === 0 ? `
                <div class="py-2 px-4 text-gray-500">No framework found.</div>`
                :
                filteredFrameworks.map(framework => `
                    <div
                        class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                        role="option"
                        tabindex="-1"
                        aria-selected="${value === framework.value}"
                        data-value="${framework.value}"
                     >
                      <i class="fa-solid fa-check mr-2 h-4 w-4 ${value !== framework.value ? 'text-transparent' : ''}"></i>
                      ${framework.label}
                    </div>
                `).join('')}
            </div>
            `: ''}
    </div>
    `;
    
    return comboboxHTML;
};