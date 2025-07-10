<script setup>
    defineProps({
        className: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <section :class="['static-hero', className]"></section>
</template>

<style lang="scss">
    .static-hero {
        margin-bottom: $m-lg;
    }
</style>