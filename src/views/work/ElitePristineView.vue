<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';

import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroElitDesktop from '@/assets/img/hero-elit-pristine-water-series-desktop-2x.png';
import heroElitMobile from '@/assets/img/hero-elit-pristine-water-series-mobile-2x.png';

import elitBrochureDesktop from '@/assets/img/elit-brochure-desktop-2x.png';
import elitBrochureMobile from '@/assets/img/elit-brochure-mobile-2x.png';
import elitPrintDesktop from '@/assets/img/elit-print-desktop-2x.png';
import elitPrintMobile from '@/assets/img/elit-print-mobile-2x.png';

import elitBrochure2Desktop from '@/assets/img/elit-brochure2-desktop-2x.png';
import elitBrochure2Mobile from '@/assets/img/elit-brochure2-mobile-2x.png';

import elitAwardDesktop from '@/assets/img/elit-award-desktop-2x.png';
import elitAwardMobile from '@/assets/img/elit-award-mobile-2x.png';

import elitBrochure3Desktop from '@/assets/img/elit-brochure3-desktop-2x.png';
import elitBrochure3Mobile from '@/assets/img/elit-brochure3-mobile-2x.png';

import elitShotDesktop from '@/assets/img/elit-shot-desktop-2x.png';
import elitShotMobile from '@/assets/img/elit-shot-mobile-2x.png';

</script>

<template>
    <HeadlineBlock>
        <h1>Elit Pristine Water Series</h1>
        <h2>New Zealand Edition Brochure Design</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="heroElitDesktop"
        :mobile="heroElitMobile"
        alt="Elit Pristine Water Series"
        className="full-width"
    />

    <ContentBlock>
        <p>Elit Pristine Water Series – New Zealand Edition is an extremely exclusive, ultra luxury Stolichnaya vodka. In fact, only 300 bottles are released each year to VIP’s at a cost of $3,000. To enhance the experience, Stoli wanted a brochure to go along with the bottle. I designed the brochure to reflect the luxurious nature of the product itself. I incorporated the signature fern leaf, a reflection of the product’s New Zealand roots. From there, I also incorporate the fern leaf into the bottle itself. It’s made of Palladium and inlaid with New Zealand Deer Leather. On the back of each cuff is the bottle’s serial number.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="elitBrochureDesktop"
        :mobile="elitBrochureMobile"
        alt="Elit Brochure"
        className="full-width"
    />
    <ImageBlock
        :desktop="elitPrintDesktop"
        :mobile="elitPrintMobile"
        alt="Elit Print"
        className="full-width"
    />

    <section class="projects">
        <div class="container">
            <div class="work-single-grid">
                <ImageInline
                    :desktop="elitBrochure2Desktop"
                    :mobile="elitBrochure2Mobile"
                    alt="Elit Brochure"
                    className="mb-20 span-2"
                />
                <ImageInline
                    :desktop="elitAwardDesktop"
                    :mobile="elitAwardMobile"
                    alt="Elit Award"
                    className="mb-20"
                />
                
            </div>
        </div>
    </section>

    <ImageBlock
        :desktop="elitBrochure3Desktop"
        :mobile="elitBrochure3Mobile"
        alt="Elit Brochure"
        className="mb-20 mw-1300"
    />
    <ImageBlock
        :desktop="elitShotDesktop"
        :mobile="elitShotMobile"
        alt="Elit Shot"
        className="mw-1300"
    />

    <NextProject link="/work/harley-davidson" />

</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>