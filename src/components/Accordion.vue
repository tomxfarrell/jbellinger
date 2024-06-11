<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
      :class="{ 'active': activeIndex === index }"
    >
      <div
        ref="accordionTitles"
        class="accordion-title"
        @click="toggleItem(index)"
      >
        {{ item.title }}
        <span class="arrow" :class="{ 'open': activeIndex === index }">
          <img src="../assets/icon-plus.svg">
        </span>
      </div>
      <div v-if="activeIndex === index" class="accordion-content" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: null
    };
  },
  methods: {
    toggleItem(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
        this.$nextTick(() => {
          this.$refs.accordionTitles[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        });
      }
    }
  }
};
</script>

<style lang="scss">
  @import '@/styles/_accordion.scss';
</style>
