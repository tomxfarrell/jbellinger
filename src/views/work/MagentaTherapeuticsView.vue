<script setup>
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import NextProject from '@/components/NextProject.vue';

import heroMagentaTherapeuticsDesktop from '@/assets/img/hero-magenta-therapeutics-desktop-2x.png';
// import heroMagentaTherapeuticsMobile from '@/assets/img/hero-magenta-therapeutics-mobile-2x.png';

import magentaComputerDesktop from '@/assets/img/magenta-computer-desktop-2x.png';
import magentaComputerMobile from '@/assets/img/magenta-computer-mobile-2x.png';

import magentaScreensDesktop from '@/assets/img/magenta-screens-desktop-2x.png';
import magentaScreensMobile from '@/assets/img/magenta-screens-mobile-2x.png';
</script>

<template>
  <div class="work-page">
    <HeadlineBlock>
      <h1>Magenta Therapeutics</h1>
      <h2>Corporate Website</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroMagentaTherapeuticsDesktop"
      :mobile="heroMagentaTherapeuticsDesktop"
      alt="Magenta Therapeutics Corporate Website"
      className="full-width"
    />

    <ContentBlock>
      <p>
        As the Associate Creative Director responsible for the Magenta
        Therapeutics’ corporate website design, I led a transformative project
        that included innovative mobile design enhancements. One standout
        feature was relocating conventional mobile menu button to the bottom of
        the screen, a concept I like to refer to as “thumbable,” guaranteeing
        effortless, reachable accessibility for users as they made their
        selections. This innovative approach not only enhanced the overall user
        experience but also underscored our unwavering dedication to
        user-centric design principles
      </p>
    </ContentBlock>

    <ImageBlock
      :desktop="magentaComputerDesktop"
      :mobile="magentaComputerMobile"
      alt="Magenta Therapeutics"
      className="full-width"
    />

    <ImageBlock
      :desktop="magentaScreensDesktop"
      :mobile="magentaScreensMobile"
      alt="Magenta"
      className="full-width"
    />

    <NextProject link="/work/diabetic-pain" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>
