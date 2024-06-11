<template>
  <section :class="['static-hero', className]"></section>
</template>
 
<script>
export default {
  name: 'StaticHero',
  props: {
    className: String
  }
};
</script>

<style lang="scss" scoped>
  
</style>