<script>
    export let items = [];
    export let size = 'default';
  
    let openIndex = null;
  
    const handleToggle = (index) => {
      openIndex = openIndex === index ? null : index;
    };
  </script>
  
  <div class={`accordion ds-accordion ${size === 'condensed' ? 'condensed' : ''}`} id="accordionExample">
    {#each items as item, index}
      <div class="accordion-item">
        <h2 class="accordion-header" id={`heading-${index}`}>
          <button
            class="accordion-button {openIndex === index ? '' : 'collapsed'}"
            type="button"
            aria-expanded={openIndex === index}
            aria-controls={`collapse-${index}`}
            on:click={() => handleToggle(index)}
          >
            {item.title}
            <i class="fa fa-chevron-down"></i>
          </button>
        </h2>
        <div
          id={`collapse-${index}`}
          class={`content ${openIndex === index ? 'open' : ''}`}
          aria-labelledby={`heading-${index}`}
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {item.content}
          </div>
        </div>
      </div>
    {/each}
  </div>
  