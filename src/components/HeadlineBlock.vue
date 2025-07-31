
<script setup>
    defineProps({
        className: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <section  :class="['headline-block', className]">
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="scss">
    .headline-block {
        margin: 100px auto 60px auto;

        .container {
            max-width: 860px;
            margin: 0 auto;
            &:after {
                content: '';
                width: 120px;
                height: 4px;
                background-color: $purple;
                display: block;
                margin-top: 30px;
            }
        }
        
        h1 + h2 {
            font-size: 22px;  
        }
        &.text-center {
            .container:after {
                margin-left: auto;
                margin-right: auto;
            }
        }
        
    }
</style>