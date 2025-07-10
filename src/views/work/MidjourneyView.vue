<script setup>
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroMidjourneyDesktop from '@/assets/img/hero-midjourney-desktop-2x.png';
import heroMidjourneyMobile from '@/assets/img/hero-midjourney-mobile-2x.png';

import midjourneyStairsDesktop from '@/assets/img/midjourney-stairs-desktop-2x.png';
import midjourneyStairsMobile from '@/assets/img/midjourney-stairs-mobile-2x.png';

import midjourneyRockyDesktop from '@/assets/img/midjourney-rocky-desktop-2x.png';
import midjourneyRockyMobile from '@/assets/img/midjourney-rocky-mobile-2x.png';

import midjourneyAMDesktop from '@/assets/img/midjourney-am-desktop-2x.png';
import midjourneyAMMobile from '@/assets/img/midjourney-am-mobile-2x.png';

import midjourneyIBDesktop from '@/assets/img/midjourney-ib-desktop-2x.png';
import midjourneyIBMobile from '@/assets/img/midjourney-ib-mobile-2x.png';

import midjourneyVaultDesktop from '@/assets/img/midjourney-vault-desktop-2x.png';
import midjourneyVaultMobile from '@/assets/img/midjourney-vault-mobile-2x.png';

import midjourneyDressDesktop from '@/assets/img/midjourney-dress-desktop-2x.png';
import midjourneyDressMobile from '@/assets/img/midjourney-dress-mobile-2x.png';


import midjourneyWomanDesktop from '@/assets/img/midjourney-woman-desktop-2x.png';
import midjourneyWomanMobile from '@/assets/img/midjourney-woman-mobile-2x.png';

import midjourneyFaceDesktop from '@/assets/img/midjourney-face-desktop-2x.png';
import midjourneyFaceMobile from '@/assets/img/midjourney-face-mobile-2x.png';

import midjourneyColorDesktop from '@/assets/img/midjourney-color-desktop-2x.png';
import midjourneyColorMobile from '@/assets/img/midjourney-color-mobile-2x.png';

import midjourneyMasonry1Desktop from '@/assets/img/midjourney-masonry1-desktop-2x.png';
import midjourneyMasonry1Mobile from '@/assets/img/midjourney-masonry1-mobile-2x.png';
import midjourneyMasonry2Desktop from '@/assets/img/midjourney-masonry2-desktop-2x.png';
import midjourneyMasonry2Mobile from '@/assets/img/midjourney-masonry2-mobile-2x.png';
import midjourneyMasonry3Desktop from '@/assets/img/midjourney-masonry3-desktop-2x.png';
import midjourneyMasonry3Mobile from '@/assets/img/midjourney-masonry3-mobile-2x.png';
import midjourneyMasonry4Desktop from '@/assets/img/midjourney-masonry4-desktop-2x.png';
import midjourneyMasonry4Mobile from '@/assets/img/midjourney-masonry4-mobile-2x.png';
import midjourneyMasonry5Desktop from '@/assets/img/midjourney-masonry5-desktop-2x.png';
import midjourneyMasonry5Mobile from '@/assets/img/midjourney-masonry5-mobile-2x.png';
import midjourneyMasonry6Desktop from '@/assets/img/midjourney-masonry6-desktop-2x.png';
import midjourneyMasonry6Mobile from '@/assets/img/midjourney-masonry6-mobile-2x.png';

import midjourneyGirlDesktop from '@/assets/img/midjourney-girl-desktop-2x.png';
import midjourneyGirlMobile from '@/assets/img/midjourney-girl-mobile-2x.png';


import midjourneySummerDesktop from '@/assets/img/midjourney-summer-desktop-2x.png';
import midjourneySummerMobile from '@/assets/img/midjourney-summer-mobile-2x.png';

import midjourneyCloseupDesktop from '@/assets/img/midjourney-closeup-desktop-2x.png';
import midjourneyCloseupMobile from '@/assets/img/midjourney-closeup-mobile-2x.png';
import midjourneyWalkingDesktop from '@/assets/img/midjourney-walking-desktop-2x.png';
import midjourneyWalkingMobile from '@/assets/img/midjourney-walking-mobile-2x.png';

</script>

<template>
    <HeadlineBlock>
        <h1>Midjourney</h1>
        <h2>AI-Driven Creative Showcase</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="heroMidjourneyDesktop"
        :mobile="heroMidjourneyMobile"
        alt="Jeep"
        className="full-width"
    />

    <ContentBlock>
        <p>As a digital artist, I’m on a mission to explore and redefine the boundaries of creativity. The intersection of technology and artistry has always captivated me, and with MidJourney, Runway and Luma, I’ve found the perfect tools to bring my imagination to life. Every creation is an experiment—a harmonious blend of code and creativity, where I let the AI guide me as much as I guide it. The result is always a mesmerizing, surreal visual experience, pushing the limits of what art can be.</p>
        <p><strong>Each piece I create is more than just an image; it’s a journey of exploration, where I venture into new realms of design, abstraction, and surrealism.</strong> MidJourney has become my personal playground, allowing me to blend elements in ways that traditional mediums could never capture. It’s not just about crafting beautiful visuals—it’s about embracing the limitless possibilities that come from combining human creativity with cutting-edge AI technology. Join me in this exciting exploration, where every work is a glimpse into the future of art, a space where imagination meets innovation.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="midjourneyStairsDesktop"
        :mobile="midjourneyStairsMobile"
        alt=""
        className="full-width mb-lg"
    />
    
    <ContentBlock>
        <h2 class="text-center">“Each piece I create is more than just an image; it’s a journey of exploration”</h2>
    </ContentBlock>

    <ImageBlock
        :desktop="midjourneyRockyDesktop"
        :mobile="midjourneyRockyMobile"
        alt=""
        className="mw-1300 mb-xs"
    />

    <section class="projects">
        <div class="container">
            <div class="work-single-grid cols-6">
                
                <ImageInline
                    :desktop="midjourneyAMDesktop"
                    :mobile="midjourneyAMMobile"
                    alt=""
                    className="span-3 mb-xs"
                />
                <ImageInline
                    :desktop="midjourneyIBDesktop"
                    :mobile="midjourneyIBMobile"
                    alt=""
                    className="span-3 mb-xs"
                />
                
            </div>
        </div>
    </section>

    <ImageBlock
        :desktop="midjourneyVaultDesktop"
        :mobile="midjourneyVaultMobile"
        alt=""
        className="mw-1300 mb-xs"
    />

    <ImageBlock
        :desktop="midjourneyDressDesktop"
        :mobile="midjourneyDressMobile"
        alt=""
        className="mw-1300 mb-xs"
    />

    <ImageBlock
        :desktop="midjourneyWomanDesktop"
        :mobile="midjourneyWomanMobile"
        alt=""
        className="full-width mb-xs"
    />

    <ImageBlock
        :desktop="midjourneyFaceDesktop"
        :mobile="midjourneyFaceMobile"
        alt=""
        className="mw-1300 mb-xs"
    />

    <ImageBlock
        :desktop="midjourneyColorDesktop"
        :mobile="midjourneyColorMobile"
        alt=""
        className="mw-1300 mb-xs"
    />

    <section class="projects">
        <div class="container">
            <div class="masonry-grid">
                
                <ImageInline
                    :desktop="midjourneyMasonry1Desktop"
                    :mobile="midjourneyMasonry1Mobile"
                    alt=""
                    className=""
                />
            
                <ImageInline
                    :desktop="midjourneyMasonry4Desktop"
                    :mobile="midjourneyMasonry4Mobile"
                    alt=""
                    className=""
                />

                 <ImageInline
                    :desktop="midjourneyMasonry2Desktop"
                    :mobile="midjourneyMasonry2Mobile"
                    alt=""
                    className=""
                />
                
                 <ImageInline
                    :desktop="midjourneyMasonry5Desktop"
                    :mobile="midjourneyMasonry5Mobile"
                    alt=""
                    className=""
                />

                <ImageInline
                    :desktop="midjourneyMasonry3Desktop"
                    :mobile="midjourneyMasonry3Mobile"
                    alt=""
                    className=""
                />

                <ImageInline
                    :desktop="midjourneyMasonry6Desktop"
                    :mobile="midjourneyMasonry6Mobile"
                    alt=""
                    className=""
                />
                
            </div>
        </div>
    </section>

    <ImageBlock
        :desktop="midjourneyGirlDesktop"
        :mobile="midjourneyGirlMobile"
        alt=""
        className="mw-1300 mb-xs"
    />

    <ImageBlock
        :desktop="midjourneySummerDesktop"
        :mobile="midjourneySummerMobile"
        alt=""
        className="full-width mb-xs"
    />


    <section class="projects">
        <div class="container">
            <div class="work-single-grid">
                
                <ImageInline
                    :desktop="midjourneyCloseupDesktop"
                    :mobile="midjourneyCloseupMobile"
                    alt=""
                    className="span-2 mb-xs"
                />
                <ImageInline
                    :desktop="midjourneyWalkingDesktop"
                    :mobile="midjourneyWalkingMobile"
                    alt=""
                    className="mb-xs"
                />
                
            </div>
        </div>
    </section>
     

    <NextProject link="/work/versace" />
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>