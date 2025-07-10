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
    <section :class="['image-block', className]">
        <div class="container">
            <picture>
                <source :srcset="mobile" media="(max-width: 767px)">
                <source :srcset="desktop" media="(min-width: 768px)">
                <img :src="`@/assets/img/${desktop}`" :alt="alt">
            </picture>
        </div>
    </section>
</template>

<style lang="scss">

.mw-1300 {
    max-width: $breakpoint-mlg;
}

.mw-1440 {
    max-width: $breakpoint-xl;
}

.mw-1300, .mw-1440 {
    margin-left: auto;
    margin-right: auto;
    .container {
        padding-left: 0;
        padding-right: 0;
    }
    img {
        width: 100%;
    }
}

.full-width {
    margin-bottom: 20px;
    .container {
        width: 100%;
        max-width: 100%;
        padding-left: 0;
        padding-right: 0;
    }
}

.full-width {
    img {
        width: 100%;
        max-width: $breakpoint-xl;
        margin: 0 auto;
        display: block;
    }
    @media (min-width: #{$breakpoint-xl + 1px}) {
        img {
            max-width: $breakpoint-dxl;
        }
    }
}
       
    
</style>