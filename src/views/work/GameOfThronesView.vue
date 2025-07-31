<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';

import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroGameOfThronesDesktop from '@/assets/img/hero-game-of-thrones-desktop-2x.png';
import heroGameOfThronesMobile from '@/assets/img/hero-game-of-thrones-mobile-2x.png';

import gameOfThronesFacadeDesktop from '@/assets/img/game-of-thrones-exterior-facade-desktop-2x.png';
import gameOfThronesFacadeMobile from '@/assets/img/game-of-thrones-exterior-facade-mobile-2x.png';


</script>

<template>
    <HeadlineBlock>
        <h1>Game of Thrones</h1>
        <h2>The Exhibition</h2>
    </HeadlineBlock>

    <HeroBlock
        :desktop="heroGameOfThronesDesktop"
        :mobile="heroGameOfThronesMobile"
        alt="Game of Thrones Exhibition"
        className="full-width"
    />

    <ContentBlock>
        <p>HBO and Time Warner Cable partnered to put together a five-city, international Game of Thrones exhibit before season 3 premiered.I designed everything from the overall space layout to the exhibit graphics, exterior façade, signage, and more.</p>
        <p>Before VR truly became a thing, we created an unforgettable immersive experience where guests could step into a rickety 4D elevator that took them to the top of the Wall. It was sensory overload — cold winds blowing, the ominous creaking of the elevator, and, of course, the Oculus VR headset that transported them into the heart of Westeros as they ascended the wall to dizzying heights.</p>
        <p>The NYC results? Over 5,000 fans wrapped around 57th Street every day for a week to view and get close up with famous props, costumes, weaponry, and even take part in an interactive archery experience. <strong>Oh, and of course, to sit atop the Iron Throne and brag about it on Instagram.</strong></p>
    </ContentBlock>

    <ImageBlock
        :desktop="gameOfThronesFacadeDesktop"
        :mobile="gameOfThronesFacadeMobile"
        alt="Exterior Facade"
        className="mw-1300 mb-20"
    />

    <ContentBlock className="text-center">
        <h2 class="mb-20">Designing for your favorite show? It doesn’t get better than this.</h2>
        <p><strong>This is what fuels me—what ignites my passion</strong> for design and pushes me to create at the highest level. Being part of something so globally beloved, a phenomenon that millions eagerly anticipate week after week, was nothing short of a dream come true. Game of Thrones wasn’t just a show; it was an experience, a cultural moment, a world people lost themselves in—including myself. To bring that world to life through design, and crafting an immersive space that let fans step into Westeros, was an honor and a challenge I’ll never forget.</p>
    </ContentBlock>


    <NextProject link="/work/harley-davidson" />

</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>