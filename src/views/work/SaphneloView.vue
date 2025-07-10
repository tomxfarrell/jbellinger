<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';
import NextProject from '@/components/NextProject.vue';

import saphneloHeroDesktop from '@/assets/img/hero-saphnelo-desktop-2x.png';
import saphneloHeroMobile from '@/assets/img/hero-saphnelo-mobile-2x.png';

import saphneloMockupDesktop from '@/assets/img/saphnelo-mockup-desktop-2x.png';
import saphneloMockupMobile from '@/assets/img/saphnelo-mockup-mobile-2x.png';

import budweiserCapDesktop from '@/assets/img/budweiser-cap-desktop-2x.png';
import budweiserCapMobile from '@/assets/img/budweiser-cap-mobile-2x.png';


</script>

<template>
    <HeadlineBlock>
        <h1>Saphnelo</h1>
        <h2>The Speed of Saphnelo Campaign</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="saphneloHeroDesktop"
        :mobile="saphneloHeroMobile"
        alt="Saphnelo"
        className="full-width"
    />
    
    <ContentBlock>
        <p>AstraZeneca approached Ogilvy to redesign the website for the Saphnelo brand, aligning it with the fresh and dynamic aesthetic of their latest campaign. The campaign emphasized the speed and efficiency of Saphnelo, visually represented by a striking image of a woman walking on the platform of a high-speed train.</p>
        <p>To bring this concept to life on the website, I incorporated design elements that echoed the sleek, modern feel of high-speed travel. Subtle metallic textures were used throughout to evoke the industrial strength and elegance of train materials, while train ticket stubs were creatively integrated as design accents, adding an authentic touch to the digital experience. Additionally, I used passenger-inspired photography to convey a sense of motion, capturing the energy and purpose of travelers in transit. The result is a website that not only aligns with the brand's refreshed campaign but also tells a cohesive story of speed, precision, and efficacy.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="saphneloMockupDesktop"
        :mobile="saphneloMockupMobile"
        alt="Saphnelo mockup"
        className="full-width mb-20"
    />
    <ImageBlock
        :desktop="saphnelo"
        :mobile="budweiserCapMobile"
        alt="Budweiser"
        className="mw-1300"
    />

    <NextProject link="/work/stockeld-dreamery" />
    
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>