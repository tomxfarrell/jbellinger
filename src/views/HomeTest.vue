<template>
  <div class="hero-slider">
    <span class="bg-word">Passion</span>

    <Carousel
      v-slot="{ slideTo, currentSlide }"
      :items-to-show="1"
      :wrap-around="true"
      :mouse-drag="true"
      :transition="500"
      class="carousel-container"
    >
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <img :src="slide.image" :alt="slide.title" />
          <div class="text-content">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </Slide>
    </Carousel>

    <span class="fg-word">Projects</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

import brochureImage from '@/assets/img/home-elit-brochure-desktop-2x.png';

const slides = ref([
  {
    title: 'Versace',
    description: 'Sleek websites, scroll-stopping socials, and digital campaigns that truly delivered results.',
    image: brochureImage
  },
  {
    title: 'Project Two',
    description: 'Description for the second project goes here.',
    image: 'https://via.placeholder.com/600x400?text=Image+2'
  }
]);
</script>

<style scoped>
.hero-slider {
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-word, .fg-word {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: clamp(5rem, 10vw, 12rem);
  font-weight: bold;
  color: #3f3de6;
  pointer-events: none;
  user-select: none;
}
.bg-word { left: 2%; z-index: 1; }
.fg-word { right: 2%; z-index: 3; }

.carousel-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
}

.slide-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.slide-content img {
  max-width: 40vw;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.text-content {
  max-width: 500px;
}
.text-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.text-content p {
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero-slider { padding: 3rem 1rem; }
  .bg-word, .fg-word { font-size: clamp(4rem, 15vw, 9rem); top: 40%; }
  .slide-content img { max-width: 60vw; }
  .text-content h2 { font-size: 1.5rem; }
  .text-content p { font-size: .9rem; }
}
</style>
