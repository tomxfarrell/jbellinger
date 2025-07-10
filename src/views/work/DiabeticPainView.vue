<script setup>
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import NextProject from '@/components/NextProject.vue';

import heroDiabeticDesktop from '@/assets/img/hero-diabetic-pain-desktop-2x.png';
import heroDiabeticMobile from '@/assets/img/hero-diabetic-pain-mobile-2x.png';

import diabeticBannersDesktop from '@/assets/img/diabetic-banners-desktop-2x.png';
import diabeticBannersMobile from '@/assets/img/diabetic-banners-mobile-2x.png';

import diabeticScreensDesktop from '@/assets/img/diabetic-screens-desktop-2x.png';
import diabeticScreensMobile from '@/assets/img/diabetic-screens-mobile-2x.png';

import diabeticEmailDesktop from '@/assets/img/diabetic-email-desktop-2x.png';
import diabeticEmailMobile from '@/assets/img/diabetic-email-mobile-2x.png';
</script>

<template>
    <HeadlineBlock>
        <h1>Diabetic Pain</h1>
        <h2>Unbranded Campaign</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="heroDiabeticDesktop"
        :mobile="heroDiabeticMobile"
        alt="Diabetic Pain"
        className="full-width"
    />

    <ContentBlock>
        <p>I was tasked with developing an unbranded campaign for Diabetic Neuropathy Pain, which included a microsite, digital banners, and a social media strategy. The campaign zeroed in on one of the most common and debilitating symptoms of diabetes: foot pain. To visually represent the intensity of this pain, we crafted striking illustrations—one depicting a floor engulfed in flames and another showing the sensation of walking on spikes. To amplify the impact, we introduced subtle yet powerful animations: glowing embers flickered in the fire illustration, while sharp highlights brought the spikes to life. The result was a visually dynamic and emotionally resonant campaign that connected with audiences and highlighted the real challenges of living with diabetic neuropathy.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="diabeticBannersDesktop"
        :mobile="diabeticBannersMobile"
        alt=""
        className="full-width"
    />
    
    <ImageBlock
        :desktop="diabeticScreensDesktop"
        :mobile="diabeticScreensMobile"
        alt=""
        className="mw-1440 mb-xs"
    />

    <ImageBlock
        :desktop="diabeticEmailDesktop"
        :mobile="diabeticEmailMobile"
        alt=""
        className="mw-1440"
    />


    <NextProject link="/work/harley-davidson" />
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>