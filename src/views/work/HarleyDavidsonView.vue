<script setup>
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';


import heroHarleyDesktop from '@/assets/img/hero-harley-davidson-desktop-2x.png';
import heroHarleyMobile from '@/assets/img/hero-harley-davidson-mobile-2x.png';

import harleySignupDesktop from '@/assets/img/harley-signup-desktop-2x.png';
import harleySignupMobile from '@/assets/img/harley-signup-mobile-2x.png';

import harleyPosterDesktop from '@/assets/img/harley-poster-desktop-2x.png';
import harleyPosterMobile from '@/assets/img/harley-poster-mobile-2x.png';

import harleyPullupDesktop from '@/assets/img/harley-pullup-desktop-2x.png';
import harleyPullupMobile from '@/assets/img/harley-pullup-mobile-2x.png';

import harleyBannerDesktop from '@/assets/img/harley-banner-desktop-2x.png';
import harleyBannerMobile from '@/assets/img/harley-banner-mobile-2x.png';

import harleyMonitorDesktop from '@/assets/img/harley-monitor-desktop-2x.png';
import harleyMonitorMobile from '@/assets/img/harley-monitor-mobile-2x.png';
</script>

<template>
    <HeadlineBlock>
        <h1>Harley Davidson</h1>
        <h2>Motorcycle Boot Camp</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="heroHarleyDesktop"
        :mobile="heroHarleyMobile"
        alt="Harley Davidson Motorcycle Boot Camp"
        className="full-width"
    />

    <ContentBlock>
        <p>Get ready to rev your engines and feel the wind in your hair - the Harley-Davidson Motorcycle Boot Camp is here! Geared towards guys who are eager to dive into the world of Harley, this exciting program was an introduction to riding and all things Harley. But how do you get the attention of these bold individuals and entice them to sign up for the Boot Camp? With designs that scream bad-ass, of course.</p>
        <p>As the designer behind the Boot Camp’s marketing materials, I knew that we needed designs that would appeal to the rugged and adventurous side of our target audience. From the logo to the banners, posters, and online ads, every element was carefully crafted to showcase the thrill and excitement of riding a Harley-Davidson motorcycle. With these eye-catching designs, we were able to effectively drive traffic to the Boot Camp and get guys revved up to hit the road on their own Harley.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="harleySignupDesktop"
        :mobile="harleySignupMobile"
        alt="Harley Signup"
        className="full-width"
    />

    <section class="projects">
        <div class="container">
            <div class="work-single-grid">
                <ImageInline
                    :desktop="harleyPosterDesktop"
                    :mobile="harleyPosterMobile"
                    alt=""
                    className="span-2 mb-20"
                />
                <ImageInline
                    :desktop="harleyPullupDesktop"
                    :mobile="harleyPullupMobile"
                    alt=""
                    className=""
                />
            </div>
        </div>
    </section>

    <ImageBlock
        :desktop="harleyBannerDesktop"
        :mobile="harleyBannerMobile"
        alt="Harley Banner"
        className="mw-1300 mb-20"
    />

    <ImageBlock
        :desktop="harleyMonitorDesktop"
        :mobile="harleyMonitorMobile"
        alt="Harley Monitor"
        className="full-width"
    />



    <NextProject link="/work/harley-davidson" />
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>