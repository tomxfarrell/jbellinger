<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
      :class="{ 'active': activeIndex === index }"
    >
      <div class="accordion-title" @click="toggleItem(index)">
        {{ item.title }}
        <span class="arrow" :class="{ 'open': activeIndex === index }">&#9660;</span>
      </div>
      <div v-if="activeIndex === index" class="accordion-content" v-html="item.content">
      </div>
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
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>

.accordion {
  width: 100%;
}

.accordion-item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.accordion-item.active {
  border: 1px solid #000;
}

.accordion-title {
  cursor: pointer;
  padding: 10px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
}

.accordion-content {
  padding: 10px;
  background-color: #fff;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.accordion-content.show {
  max-height: 200px; /* Adjust as needed */
}

.arrow {
  transition: transform 0.3s ease-out;
}

.arrow.open {
  transform: rotate(180deg);
}
</style>
