<template>
    <section class="passion-projects">
      <img :src="require(`@/assets/${image}`)" alt="Passion Project Image" />
      <p>{{ content }}</p>
    </section>
</template>

<script>
export default {
  name: 'PassionProjects',
  props: {
    // Define the image prop
    image: String,
    content: String
  }
};
</script>

<style lang="scss" scoped>
  @import '@/styles/_passion-projects.scss';
</style>