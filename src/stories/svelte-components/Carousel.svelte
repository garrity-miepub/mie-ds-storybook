<script>
  export let slides = [];
  export let interval = 5000;

  let currentIndex = 0;
  let timer;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    resetTimer();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    resetTimer();
  }

  function goToSlide(index) {
    currentIndex = index;
    resetTimer();
  }

  function startTimer() {
    timer = setInterval(nextSlide, interval);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  // Initialize timer on component mount
  import { onMount } from 'svelte';
  onMount(startTimer);

  // Clean up timer on component unmount
  import { onDestroy } from 'svelte';
  onDestroy(() => clearInterval(timer));
</script>

<div class="ds-carousel">
  <div class="ds-carousel__slides">
    {#each slides as slide, index}
      <div class="ds-carousel__slide" class:active={index === currentIndex}>
        {@html slide}
      </div>
    {/each}
  </div>

  <button class="ds-carousel__control ds-carousel__control--prev" aria-label="Previous Slide" on:click={prevSlide}>
    <svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
  </button>
  <button class="ds-carousel__control ds-carousel__control--next" aria-label="Next Slide" on:click={nextSlide}>
    <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"/></svg>
  </button>

  <div class="ds-carousel__indicators">
    {#each slides as _, index}
      <button
        class="ds-carousel__indicator"
        class:active={index === currentIndex}
        aria-label={`Go to slide ${index + 1}`}
        on:click={() => goToSlide(index)}
      ></button>
    {/each}
  </div>
</div>