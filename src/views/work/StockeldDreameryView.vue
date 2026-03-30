<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';

import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroStockeldDreameryDesktop from '@/assets/img/hero-stockeld-dreamery-desktop-2x.png';
import heroStockeldDreameryMobile from '@/assets/img/hero-stockeld-dreamery-mobile-2x.png';

import stockeldNewCheeseDesktop from '@/assets/img/stockeld-new-cheese-desktop-2x.png';
import stockeldNewCheeseMobile from '@/assets/img/stockeld-new-cheese-mobile-2x.png';

import stockeldBagelAdDesktop from '@/assets/img/stockeld-bagel-ad-desktop-2x.png';
import stockeldBagelAdMobile from '@/assets/img/stockeld-bagel-ad-mobile-2x.png';

import stockeldFlyerDesktop from '@/assets/img/stockeld-flyer-desktop-2x.png';
import stockeldFlyerMobile from '@/assets/img/stockeld-flyer-mobile-2x.png';

import stockeldBrochureDesktop from '@/assets/img/stockeld-brochure-desktop-2x.png';
import stockeldBrochureMobile from '@/assets/img/stockeld-brochure-mobile-2x.png';

import stockeldAdDesktop from '@/assets/img/stockeld-ad-desktop-2x.png';
import stockeldAdMobile from '@/assets/img/stockeld-ad-mobile-2x.png';
</script>

<template>
  <div class="work-page">
    <HeadlineBlock>
      <h1>Stockheld Dreamery</h1>
      <h2>Sales & Marketing Collateral</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroStockeldDreameryDesktop"
      :mobile="heroStockeldDreameryMobile"
      alt="Stockeld Dreamery"
      className="full-width"
    />

    <ContentBlock>
      <p>
        I have had the exciting responsibility of crafting the visual identity
        that represents Stockeld Dreamery Cream Cheese across multiple
        platforms. Whether it’s designing eye-catching point-of-sale materials
        and signage for various accounts, creating engaging social media posts,
        or developing informative brochures and sales sheets, my mission is to
        ensure that Stockeld Dreamery stands out in the competitive marketplace.
        Through compelling design, I aim to not only capture the essence of the
        brand but also convey its unique qualities to our customers, partners,
        and audience, helping Stockeld Dreamery leave a lasting impression in
        the minds of consumers.
      </p>
    </ContentBlock>

    <ImageBlock
      :desktop="stockeldNewCheeseDesktop"
      :mobile="stockeldNewCheeseMobile"
      alt="Stockeld Dreamery New Cheese"
      className="mw-1300 mb-20 px-20"
    />

    <section class="projects">
      <div class="container">
        <div class="work-single-grid">
          <ImageInline
            :desktop="stockeldBagelAdDesktop"
            :mobile="stockeldBagelAdMobile"
            alt=""
            className="mb-20 span-2 bagel-custom-sizing"
          />
          <ImageInline
            :desktop="stockeldFlyerDesktop"
            :mobile="stockeldFlyerMobile"
            alt=""
            className="mb-20 flyer-custom-sizing"
          />
        </div>
      </div>
    </section>

    <ImageBlock
      :desktop="stockeldBrochureDesktop"
      :mobile="stockeldBrochureMobile"
      alt="Stockeld Dreamery Brochure"
      className="full-width mb-20"
    />

    <ImageBlock
      :desktop="stockeldAdDesktop"
      :mobile="stockeldAdMobile"
      alt="Stockeld Dreamery Ad"
      className="mw-1300 mb-20"
    />

    <NextProject link="/work/midjourney" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>

<style lang="scss" scoped>
:deep(.bagel-custom-sizing) {
  width: 100%;
  max-height: 500px;
  img {
    max-height: 500px;
    width: 100%;
  }
}
:deep(.flyer-custom-sizing) {
  width: 100%;
  height: 100%;
  max-height: 500px;
  img {
    height: 100%;
  }
}
</style>
