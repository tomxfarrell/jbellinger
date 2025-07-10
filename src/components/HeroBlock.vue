<script setup>
    defineProps({
        desktop: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ''
        },
        className: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <section :class="['hero-block', className]">
        <div class="container">
            <picture>
                <source :srcset="mobile" media="(max-width: 767px)">
                <source :srcset="desktop" media="(min-width: 768px)">
                <img :src="`@/assets/img/${desktop}`" :alt="alt">
            </picture>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.hero-block {
    margin-bottom: 90px;
}

.full-width {
    img {
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
        img, .container {
            max-width: $breakpoint-dxl;
        }
    }
}

       
    
</style>