export const createCarouselHTML = ({
    slides = [],
    interval = 5000,
  }) => {
    let carouselHTML = `
    <div class="ds-carousel" data-interval="${interval}" data-current-index="0">
        <div class="ds-carousel__slides">
        ${slides.map((slide, index) =>
             `<div class="ds-carousel__slide ${index === 0 ? 'active' : ''}" data-index="${index}">
               ${slide}
             </div>`
           ).join('')}
        </div>
        <button class="ds-carousel__control ds-carousel__control--prev" aria-label="Previous Slide">
            <svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
        </button>
        <button class="ds-carousel__control ds-carousel__control--next" aria-label="Next Slide">
           <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"/></svg>
        </button>
        <div class="ds-carousel__indicators">
        ${slides.map((_, index) =>
             `<button class="ds-carousel__indicator ${index === 0 ? 'active' : ''}" aria-label="Go to slide ${index + 1}" data-index="${index}"></button>`
        ).join('')}
         </div>
    </div>
    `;
  
    return carouselHTML;
};