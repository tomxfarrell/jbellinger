<script setup>
defineProps({
  desktop: {
    type: [String, Object],
    required: true,
  },
  mobile: {
    type: [String, Object],
    default: null,
  },
  alt: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <section :class="['hero-video-block', className]">
    <div class="container">
      <video autoplay muted loop playsinline class="hero-video">
        <source v-if="mobile" :src="mobile" media="(max-width: 767px)" />
        <source :src="desktop" />
      </video>
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-video-block {
  margin-bottom: 90px;
}

.full-width {
  video {
    width: 100%;
    max-width: $breakpoint-xl;
    margin: 0 auto;
    display: block;
  }
  .container {
    width: 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: #{$breakpoint-xl + 1px}) {
    video,
    .container {
      max-width: $breakpoint-dxl;
    }
  }
}
</style>
