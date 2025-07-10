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
    <div :class="['image-inline', className]">
        <picture>
            <source :srcset="mobile" media="(max-width: 767px)">
            <source :srcset="desktop" media="(min-width: 768px)">
            <img :src="`@/assets/img/${desktop}`" :alt="alt">
        </picture>
    </div>
</template>