<script setup>
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroJeepDesktop from '@/assets/img/hero-jeep-desktop-2x.png';
import heroJeepMobile from '@/assets/img/hero-jeep-mobile-2x.png';

import jeepRedDesktop from '@/assets/img/jeep-red-desktop-2x.png';
import jeepRedMobile from '@/assets/img/jeep-red-mobile-2x.png';

import jeepWomenDesktop from '@/assets/img/jeep-women-desktop-2x.png';
import jeepWomenMobile from '@/assets/img/jeep-women-mobile-2x.png';

import jeepManDesktop from '@/assets/img/jeep-man-desktop-2x.png';
import jeepManMobile from '@/assets/img/jeep-man-mobile-2x.png';

import jeepWomanDesktop from '@/assets/img/jeep-woman-desktop-2x.png';
import jeepWomanMobile from '@/assets/img/jeep-woman-mobile-2x.png';

import jeepMan2Desktop from '@/assets/img/jeep-man2-desktop-2x.png';
import jeepMan2Mobile from '@/assets/img/jeep-man2-mobile-2x.png';

import jeepDJDesktop from '@/assets/img/jeep-dj-desktop-2x.png';
import jeepDJMobile from '@/assets/img/jeep-dj-mobile-2x.png';


import jeepRed2Desktop from '@/assets/img/jeep-red2-desktop-2x.png';
import jeepRed2Mobile from '@/assets/img/jeep-red2-mobile-2x.png';

import jeepBleachersDesktop from '@/assets/img/jeep-bleachers-desktop-2x.png';
import jeepBleachersMobile from '@/assets/img/jeep-bleachers-mobile-2x.png';


</script>

<template>
    <HeadlineBlock>
        <h1>Jeep</h1>
        <h2>USA Basketball</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="heroJeepDesktop"
        :mobile="heroJeepMobile"
        alt="Jeep"
        className="full-width"
    />

    <ContentBlock>
        <p>Jeep and USA Basketball announced their partnership, which named the Jeep Wrangler the “Official Vehicle of USA Basketball.” To celebrate Team USA’s quest for Gold, I designed billboard-sized graphics, the Wrangler-Grill DJ booth concept (you know you want one), basketball-themed photo-ops with an Olympic podium, and more.</p>
        <p>The kickoff party in LA featured Kim Kardashian, Chris Paul, rapper Common and DJ Biz Markie. From there, the event traveled to New York’s Flatiron Plaza hosted by New York Knicks All-Star and USA Basketball team member Carmelo Anthony and basketball Legend Allan Houston.</p>
    </ContentBlock>

    <ImageBlock
        :desktop="jeepRedDesktop"
        :mobile="jeepRedMobile"
        alt=""
        className="full-width mb-lg"
    />
    
    <ContentBlock>
        <h2 class="like-h3 with-line text-center">A legendary vehicle supporting a legendary team.</h2>
    </ContentBlock>

    <section class="projects">
        <div class="container">
            <div class="work-single-grid">
                <ImageInline
                    :desktop="jeepWomenDesktop"
                    :mobile="jeepWomenMobile"
                    alt=""
                    className="span-2"
                />
                <ImageInline
                    :desktop="jeepManDesktop"
                    :mobile="jeepManMobile"
                    alt=""
                    className=""
                />
                <ImageInline
                    :desktop="jeepWomanDesktop"
                    :mobile="jeepWomanMobile"
                    alt=""
                    className="mb-xs"
                />
                <ImageInline
                    :desktop="jeepMan2Desktop"
                    :mobile="jeepMan2Mobile"
                    alt=""
                    className="span-2 mb-xs"
                />
            </div>
        </div>
    </section>

     <ImageBlock
        :desktop="jeepDJDesktop"
        :mobile="jeepDJMobile"
        alt=""
        className="full-width"
     />

     <ImageBlock
        :desktop="jeepRed2Desktop"
        :mobile="jeepRed2Mobile"
        alt=""
        className="full-width"
     />

     <ImageBlock
        :desktop="jeepBleachersDesktop"
        :mobile="jeepBleachersMobile"
        alt=""
        className="full-width"
     />


    <NextProject link="/work/versace" />
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>