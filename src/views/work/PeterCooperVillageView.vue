<script setup>
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroPeterCooperDesktop from '@/assets/img/hero-peter-cooper-desktop-2x.png';
import heroPeterCooperMobile from '@/assets/img/hero-peter-cooper-mobile-2x.png';

import peterCooperBannersDesktop from '@/assets/img/peter-cooper-banners-desktop-2x.png';
// import peterCooperBannersMobile from '@/assets/img/peter-cooper-banners-mobile-2x.png';

import peterCooperGrassDesktop from '@/assets/img/peter-cooper-grass-desktop-2x.png';
import peterCooperGrassMobile from '@/assets/img/peter-cooper-grass-mobile-2x.png';
import peterCooperFloorDesktop from '@/assets/img/peter-cooper-floor-desktop-2x.png';
import peterCooperFloorMobile from '@/assets/img/peter-cooper-floor-mobile-2x.png';
</script>

<template>
    <HeadlineBlock>
        <h1>Peter Cooper Village</h1>
        <h2>More Space Campaign</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="heroPeterCooperDesktop"
        :mobile="heroPeterCooperMobile"
        alt="Peter Cooper Village"
        className="full-width"
    />

    <ContentBlock>
        <p>When Tishman Speyer acquired Peter Cooper Village/Stuyvesant Town, they set out to completely reimagine the brand to align with their vision for the property. Known for its spacious apartments and vibrant, family-friendly lifestyle, Peter Cooper Village offered a unique blend of urban living and community charm. To highlight these qualities, I designed and helped direct an above shot/aerial-style photoshoot that beautifully captured the property’s expansive apartments, lush green parks, and tranquil, park-like setting nestled within the city. The resulting visuals became the cornerstone of the rebrand, showcasing the exceptional space and lifestyle that Peter Cooper Village offers to its residents.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="peterCooperBannersDesktop"
        :mobile="peterCooperBannersDesktop"
        alt=""
        className="full-width"
    />

    
    <ImageBlock
        :desktop="peterCooperGrassDesktop"
        :mobile="peterCooperGrassMobile"
        alt=""
        className="mw-1300 mb-20"
    />

    <ImageBlock
        :desktop="peterCooperFloorDesktop"
        :mobile="peterCooperFloorMobile"
        alt=""
        className="mw-1300 mb-20"
    />


    <NextProject link="/work/banana-republic" />
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>