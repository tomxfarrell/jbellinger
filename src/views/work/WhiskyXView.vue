<script setup>
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroWhiskyXDesktop from '@/assets/img/hero-whisky-x-desktop-2x.png';
import heroWhiskyXMobile from '@/assets/img/hero-whisky-x-mobile-2x.png';

import whiskyBannersDesktop from '@/assets/img/whisky-banners-desktop-2x.png';
import whiskyBannersMobile from '@/assets/img/whisky-banners-mobile-2x.png';

import whiskyScreensDesktop from '@/assets/img/whisky-screens-desktop-2x.png';
import whiskyScreensMobile from '@/assets/img/whisky-screens-mobile-2x.png';    

</script>

<template>
    <HeadlineBlock>
        <h1>The Whisky X</h1>
        <h2>Web & Digital Campaign</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="heroWhiskyXDesktop"
        :mobile="heroWhiskyXMobile"
        alt="The Whisky X"
        className="full-width"
    />

    <ContentBlock>
        <p>The WhiskyX stands as the pinnacle of whisky events. This extraordinary experience introduces attendees to over 60 premium whisky brands sourced globally, inviting them to indulge in a sensory adventure, exploring the intricate nuances of various whisky varieties. As the creative director shaping The WhiskyX’s essence from its inception, I played a central role in defining the event’s identity. From conceptualizing the design and developing the website to crafting all advertising materials, I meticulously curated every detail. This included not only their website but also captivating web banners, engaging emails, compelling presentations that resonates with the spirit of innovation, quality, and celebration within the whisky community. It was a journey of creativity and passion, ensuring that every facet of The WhiskyX reflected the vibrant essence of the whisky world.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="whiskyBannersDesktop"
        :mobile="whiskyBannersMobile"
        alt=""
        className="full-width"
    />

    <ImageBlock
        :desktop="whiskyScreensDesktop"
        :mobile="whiskyScreensMobile"
        alt=""
        className="mw-1440"
    />
    
    <NextProject link="/work/jeep" />
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>