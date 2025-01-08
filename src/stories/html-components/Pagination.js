export const createPaginationHTML = ({
    currentPage = 1,
    totalPages = 10,
    ...props
  }) => {

  let menubarElement;

 const handlePrevious = () => {
      if (currentPage > 1) {
         currentPage -= 1;
          render()
      }
    };

 const handleNext = () => {
        if (currentPage < totalPages) {
           currentPage += 1;
          render();
       }
  };

 const handlePageClick = (page) => {
     currentPage = page;
     render()
 };

 const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const render = () => {
        if(!menubarElement){
           menubarElement = document.getElementById('pagination');
         }
        if(!menubarElement){return;}
        
         const pages = range(1, totalPages)

         menubarElement.innerHTML = `
         <ul class="pagination">
              <li class="page-item" ${currentPage === 1 ? 'disabled' : ''}>
                <button class="page-link" onclick="handlePrevious()" aria-label="Previous">
                   <i class="fas fa-chevron-left size-4"></i>
                  <span class="hidden sm:block">Previous</span>
                </button>
              </li>
            ${pages.map((page) => {
                return `
                <li class="page-item" ${page === currentPage ? 'class="active"' : ''}>
                  <button class="page-link" onclick="handlePageClick(${page})">
                    ${page}
                  </button>
              </li>
            `;
          }).join('')}
            <li class="page-item"  ${currentPage === totalPages ? 'disabled' : ''}>
                <button class="page-link" onclick="handleNext()" aria-label="Next">
                  <span class="hidden sm:block">Next</span>
                   <i class="fas fa-chevron-right size-4"></i>
                </button>
            </li>
         </ul>
        `;
    };
     setTimeout(render, 0);

    return `
    <nav aria-label="Pagination"  ${Object.entries(props).map(([key, value]) => `${key}="${value}"`).join(' ')}>
          <div id="pagination"></div>
     </nav>
        <script>
             let currentPage = ${currentPage};
           let totalPages = ${totalPages};
            const handlePrevious = () => {
                  ${handlePrevious.toString()}
                  handlePrevious();
              };
          
            const handleNext = () => {
                ${handleNext.toString()}
                handleNext();
            };
        
            const handlePageClick = (page) => {
                 ${handlePageClick.toString()}
                handlePageClick(page)
            };
            function render() {
              ${render.toString()}
              render();
             }
        </script>
    `;
};