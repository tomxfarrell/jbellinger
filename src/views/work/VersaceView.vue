<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import NextProject from '@/components/NextProject.vue';

import heroVersaceDesktop from '@/assets/img/hero-versace-desktop-2x.png';
import heroVersaceMobile from '@/assets/img/hero-versace-mobile-2x.png';


import versaceLaptopDesktop from '@/assets/img/versace-laptop-desktop-2x.png';
import versaceLaptopMobile from '@/assets/img/versace-laptop-mobile-2x.png';

import versaceScreenshotDesktop from '@/assets/img/versace-screenshot-desktop-2x.png';
import versaceScreenshotMobile from '@/assets/img/versace-screenshot-mobile-2x.png';

import versaceEmailsDesktop from '@/assets/img/versace-emails-desktop-2x.png';
import versaceEmailsMobile from '@/assets/img/versace-emails-mobile-2x.png';

import versaceEmailPhoneDesktop from '@/assets/img/versace-email-phone-desktop-2x.png';
import versaceEmailPhoneMobile from '@/assets/img/versace-email-phone-mobile-2x.png';



</script>

<template>
    <HeadlineBlock>
        <h1>Versace</h1>
        <h2>Web & Digital Campaigns</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="heroVersaceDesktop"
        :mobile="heroVersaceMobile"
        alt="Versace"
        className="full-width"
     />

    <ContentBlock>
        <p>My collaboration with Versace presented a unique challenge and a remarkable opportunity to showcase my creative skills. Versace, synonymous with luxury and sophistication, sought e-blast and microsite designs that could seamlessly mirror the opulence of their products and resonate with their discerning clientele. To meet this challenge, I embarked on a meticulous design journey, crafting visuals and layouts that exuded elegance while maintaining a user-friendly interface.</p>
        <p>The results of the e-marketing campaign with Versace were nothing short of remarkable. The 500% increase in email subscriptions underscored the effectiveness of our designs in capturing the interest of a wider audience. This surge in subscribers not only expanded Versace’s reach but also translated into a substantial ROI, demonstrating the tangible impact of my design work on the brand’s growth and profitability. Ultimately, our collaboration with Versace was a testament to my ability to combine aesthetic excellence with measurable success, forging a stronger bond between the brand and its loyal clientele.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="versaceLaptopDesktop"
        :mobile="versaceLaptopMobile"
        alt="Versace Laptop"
        className="full-width mb-lg"
    />
   
    <ContentBlock>
        <h2 class="text-center">An incredible opportunity to design for a truly iconic brand.</h2>
    </ContentBlock>

    <ImageBlock
        :desktop="versaceScreenshotDesktop"
        :mobile="versaceScreenshotMobile"
        alt="Versace Screenshot"
        className="mw-1440 mb-20"
    />

    <ImageBlock
        :desktop="versaceEmailsDesktop"
        :mobile="versaceEmailsMobile"
        alt="Versace Emails"
        className="full-width"
    />

    <ImageBlock
        :desktop="versaceEmailPhoneDesktop"
        :mobile="versaceEmailPhoneMobile"
        alt="Versace Email"
        className="mw-1300"
    />

    <NextProject link="/work/dos-equis" />

</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>