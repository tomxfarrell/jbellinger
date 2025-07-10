<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';
import NextProject from '@/components/NextProject.vue';

import budweiserHeroDesktop from '@/assets/img/hero-budweiser-desktop-2x.png';
import budweiserHeroMobile from '@/assets/img/hero-budweiser-mobile-2x.png';

import budweiserWithLogoDesktop from '@/assets/img/budweiser-with-logo-desktop-2x.png';
import budweiserWithLogoMobile from '@/assets/img/budweiser-with-logo-mobile-2x.png';

import budweiserCapDesktop from '@/assets/img/budweiser-cap-desktop-2x.png';
import budweiserCapMobile from '@/assets/img/budweiser-cap-mobile-2x.png';


</script>

<template>
    <HeadlineBlock>
        <h1>Budweiser</h1>
        <h2>Playoff Payoff Logo Designs</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="budweiserHeroDesktop"
        :mobile="budweiserHeroMobile"
        alt="Budweiser Playoff Payoff Logo"
        className="full-width"
    />
    
    <ContentBlock>
        <p>For a Canadian hockey promotion “Playoff Payoff”, the NHL and Budweiser teamed up to offer fans the chance to win tickets for life. I was tasked with creating the promotional logo design sought to combine the two worlds of hockey and beer seamlessly.</p>
        <p>To achieve this, I incorporated several hockey elements, such as the red light, netting, and goal posts, into the design. These cues not only helped to create a cohesive and visually appealing design, but also tapped into the excitement and energy of the sport, effectively capturing the attention of hockey fans and beer enthusiasts alike. The end result was a design that effectively promoted the partnership between Budweiser and the NHL, and provided an enticing opportunity for fans to engage with the brand and potentially win an incredible prize.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="budweiserWithLogoDesktop"
        :mobile="budweiserWithLogoMobile"
        alt="Budweiser"
        className="mw-1300 mb-20"
    />
    <ImageBlock
        :desktop="budweiserCapDesktop"
        :mobile="budweiserCapMobile"
        alt="Budweiser"
        className="mw-1300"
    />

    <NextProject link="/work/stockeld-dreamery" />
    
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>