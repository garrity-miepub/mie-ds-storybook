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

<style>
  .ds-carousel {
    position: relative;
    overflow: hidden;
  }

  .ds-carousel__slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .ds-carousel__slide {
    flex: 0 0 100%;
    width: 100%;
    display: none;
  }

  .ds-carousel__slide.active {
    display: block;
  }

  .ds-carousel__control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    padding: 0.5em;
    color: rgba(0, 0, 0, 0.5);
    transition: color 0.3s ease-in-out;
  }

  .ds-carousel__control:hover {
    color: rgba(0, 0, 0, 0.8);
  }

  .ds-carousel__control--prev {
    left: 10px;
  }

  .ds-carousel__control--next {
    right: 10px;
  }

  .ds-carousel__control svg {
    width: 1.5em;
    height: 1.5em;
  }

  .ds-carousel__indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5em;
  }

  .ds-carousel__indicator {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
    transition: background-color 0.3s ease-in-out;
  }

  .ds-carousel__indicator.active {
    background-color: rgba(0, 0, 0, 0.8);
  }
</style>