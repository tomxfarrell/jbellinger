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
  <div class="work-page">
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
      <p>
        Get ready to rev your engines and feel the wind in your hair. The
        Harley-Davidson Motorcycle Boot Camp was built for guys ready to step
        into the world of Harley. For me, this one was personal. I grew up
        around it. My dad is a tatted-up Harley rider with ape hangers and all,
        the kind of presence you feel before you even hear the engine. When he
        saw the work, he lit up in excitement, proud, and bragging to all his
        friends. That moment said everything. This wasn’t about selling a
        program, it was about capturing a mindset.
      </p>
      <p>
        As the designer behind the Boot Camp’s marketing materials, I set out to
        channel that same rugged, unapologetic energy into every piece. From the
        logo to banners, posters, and digital ads, each element was crafted to
        reflect the raw thrill of the ride and the culture that comes with it.
        The result was a bold, cohesive visual system that didn’t just get
        attention, it resonated. It spoke directly to the kind of guy who's been
        thinking about it for years and just needed the right moment to finally
        twist the throttle.
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

    <NextProject link="/work/the-whisky-x" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>
