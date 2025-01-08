<script>
    export let currentPage = 1;
      export let totalPages = 10;
      export let onPageChange = (page) => {};
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        currentPage -= 1;
        onPageChange(currentPage);
      }
    };
  
      const handleNext = () => {
          if (currentPage < totalPages) {
              currentPage += 1;
            onPageChange(currentPage);
          }
      };
  
      const handlePageClick = (page) => {
        currentPage = page;
        onPageChange(currentPage);
      };
      
    $: pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  </script>
  
  <nav aria-label="Pagination">
      <ul class="pagination">
          <li class="page-item" class:disabled={currentPage === 1}>
              <button class="page-link" on:click={handlePrevious} aria-label="Previous">
                  <i class="fas fa-chevron-left size-4"></i>
                  <span class="hidden sm:block">Previous</span>
              </button>
          </li>
      {#each pages as page}
          <li class="page-item" class:active={page === currentPage}>
              <button class="page-link" on:click={() => handlePageClick(page)}>
                  {page}
              </button>
        </li>
      {/each}
      <li class="page-item" class:disabled={currentPage === totalPages}>
          <button class="page-link" on:click={handleNext} aria-label="Next">
              <span class="hidden sm:block">Next</span>
               <i class="fas fa-chevron-right size-4"></i>
          </button>
      </li>
      </ul>
  </nav>