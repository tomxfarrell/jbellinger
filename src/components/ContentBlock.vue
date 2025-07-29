
<script setup>
    defineProps({
        className: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <section :class="['content-block', className]">
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .content-block {
         margin-bottom: $m-lg;
        .container {
            max-width: 860px;
            margin: 0 auto;
        }
        :deep(p){
            &:not(:last-child) {
                margin-bottom: 30px;
            }
        }
        @media (max-width: $breakpoint-sm) {
            margin-bottom: $m-md;
        }
    }
</style>