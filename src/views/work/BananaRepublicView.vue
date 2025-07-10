<script setup>
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroBananaRepublicDesktop from '@/assets/img/hero-banana-republic-desktop-2x.png';

import heroBananaRepublicMobile from '@/assets/img/hero-banana-republic-mobile-2x.png';   

import bananaRepublicEmailsDesktop from '@/assets/img/banana-republic-emails-desktop-2x.png';

import bananaRepublicImage1Desktop from '@/assets/img/banana-republic-image1-desktop-2x.png';
import bananaRepublicImage1Mobile from '@/assets/img/banana-republic-image1-mobile-2x.png';

import bananaRepublicImage2Desktop from '@/assets/img/banana-republic-image2-desktop-2x.png';
import bananaRepublicImage2Mobile from '@/assets/img/banana-republic-image2-mobile-2x.png';

import bananaRepublicWomanDesktop from '@/assets/img/banana-republic-woman-desktop-2x.png';
import bananaRepublicWomanMobile from '@/assets/img/banana-republic-woman-mobile-2x.png';
import bananaRepublicImage3Desktop from '@/assets/img/banana-republic-image3-desktop-2x.png';
import bananaRepublicImage3Mobile from '@/assets/img/banana-republic-image3-mobile-2x.png'; 

import bananaRepublicWoman2Desktop from '@/assets/img/banana-republic-woman2-desktop-2x.png';
import bananaRepublicWoman2Mobile from '@/assets/img/banana-republic-woman2-mobile-2x.png';

import bananaRepublicWoman3Desktop from '@/assets/img/banana-republic-woman3-desktop-2x.png';
import bananaRepublicWoman3Mobile from '@/assets/img/banana-republic-woman3-mobile-2x.png';


</script>

<template>
    <HeadlineBlock>
        <h1>Banana Republic</h1>
        <h2>Mad for Mod Pop Up</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="heroBananaRepublicDesktop"
        :mobile="heroBananaRepublicMobile"
        alt="Diabetic Pain"
        className="full-width"
    />

    <ContentBlock>
        <p>How do you take an already highly anticipated launch and make it unforgettable? You bring it to L.A.—because that’s exactly what Don Draper would do (or at least wish he had).</p>
        <p>To debut Banana Republic’s exclusive Mad Men collection, we created the “Mod Pod” pop-up shop, transforming a classic Airstream trailer into a chic, retro-inspired makeover station. Guests, including media and shoppers, were invited to step into the world of 1960s style with head-to-toe mod makeovers and a chance to snag pieces from the coveted limited-edition collection.</p>
        <p>My role in the project included designing the overall space, creating the custom Airstream wrap, and crafting eye-catching signage, interactive photo-op areas, and digital media assets to drive buzz and traffic. The result? A stylish, immersive brand experience that was as timeless as Don Draper himself.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="bananaRepublicEmailsDesktop"
        :mobile="bananaRepublicEmailsDesktop"
        alt=""
        className="full-width"
    />
    
    <ImageBlock
        :desktop="bananaRepublicImage1Desktop"
        :mobile="bananaRepublicImage1Mobile"
        alt=""
        className="mw-1300 mb-20"
    />
    
    <ImageBlock
        :desktop="bananaRepublicImage2Desktop"
        :mobile="bananaRepublicImage2Mobile"
        alt=""
        className="mw-1300 mb-20"
    />

    <section class="projects">
        <div class="container">
            <div class="work-single-grid">
                <ImageInline
                    :desktop="bananaRepublicWomanDesktop"
                    :mobile="bananaRepublicWomanMobile"
                    alt=""
                    className="mb-20"
                />
                <ImageInline
                    :desktop="bananaRepublicImage3Desktop"
                    :mobile="bananaRepublicImage3Mobile"
                    alt=""
                    className="mb-20 span-2"
                />
                <ImageInline
                    :desktop="bananaRepublicWoman2Desktop"
                    :mobile="bananaRepublicWoman2Mobile"
                    alt=""
                    className="mb-20 span-2"
                />
                <ImageInline
                    :desktop="bananaRepublicWoman3Desktop"
                    :mobile="bananaRepublicWoman3Mobile"
                    alt=""
                    className="mb-20"
                />
                
            </div>
        </div>
    </section>


    <NextProject link="/work/jeep" />
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>