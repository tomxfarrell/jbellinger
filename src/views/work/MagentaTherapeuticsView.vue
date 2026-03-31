<script setup>
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroMagentaTherapeuticsDesktop from '@/assets/img/hero-magenta-therapeutics-desktop-2x.png';
// import heroMagentaTherapeuticsMobile from '@/assets/img/hero-magenta-therapeutics-mobile-2x.png';

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

    <NextProject link="/work/diabetic-pain" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>
