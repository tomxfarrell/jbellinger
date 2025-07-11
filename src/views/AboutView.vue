<script setup>
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import HeroBlock
 from '@/components/HeroBlock.vue';
import heroAboutDesktop from '@/assets/img/hero-about-desktop-2x.png';
import heroAboutMobile from '@/assets/img/hero-about-mobile-2x.png';

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

import { ref, nextTick } from 'vue'

const { items } = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const activeIndex = ref(null)
const accordionTitles = ref([])

function toggleItem(index) {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
    nextTick(() => {
      accordionTitles.value[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    })
  }
}

const accordionItems = [
  {
    title: 'Key<br>Highlights',
    content:
      `
          <ul>
            <li><span>Achieved an Ogilvy Health Team Impact Award in December 2023, a distinguished internal recognition program where colleagues nominate individuals or teams for their exceptional work ethic and contributions</span></li>
            <li><span>Successfully introduced Figma to the Ogilvy Health team, resulting in a more streamlined process among a cross-functional team of 30+ members consisting of UX, Creative, Copy, Production, and Development. Conducted bootcamp sessions to facilitate the adoption and proficiency of the tool</span></li>
            <li><span>Over twenty five awards won including a recent Reggie Award, Communication Arts and GD USA</span></li>
            <li><span>Featured articles/designs have appeared in the New York Times, The Real Deal magazine, Adrants.com and Curbed.com</span></li>
          </ul>
          `
  },
  {
    title: 'Specialized<br>Skills',
    content:
      `
          <div class="job-title">Vice President, Associate Creative Director / 2022 - Present</div>
          <div class="job-info">Ogilvy Health - Parsippany, NJ / Remote</div>
          <ul>
            <li><span>Recruited to spearhead, oversee and manage all digital design experiences, including responsive website designs, email campaigns, banners, and social projects</span></li>
            <li><span>Optimized the design process by creating standardized digital templates and components, streamlining workflows and boosting agency-wide productivity</span></li>
            <li><span>Established digital and web best practices to ensure that the creative team produces high-quality deliverables that are on-brand, on-time, on-budget, and pass ADA compliances</span></li>
            <li><span>Played a crucial role in the successful launch of a global pharmaceutical drug, contributing to increased sales and brand recognition</span></li>
          </ul>

          <div class="job-title">Associate Creative Director / 2014 - 2022</div>
          <div class="job-info">Real Chemistry - New York, NY / Remote</div>
          <ul>
            <li><span>Conceptualized and designed compelling, unique digital experiences for various national and global pharmaceutical clients, including web, mobile, email campaigns, banner ads, storyboards, and more</span></li>
            <li><span>Completed multiple projects under allocated creative time, leading to increased profitability per project</span></li>
            <li><span>Led the creative direction and owned the aesthetic of various website designs, brands, and new business pitches</span></li>
            <li><span>Ensured the delivery of best-in-class digital experiences that exceeded client expectations</span></li>
            <li><span>Collaborated effectively with cross-functional teams, including Strategy, Web Developers, UX, Producers, Motion Graphic, Account Executives, and Social teams, to create and produce innovative creative solutions across all channels</span></li>
          </ul>

          <div class="job-title">Senior Experiential Designer / 2012 - 2014</div>
          <div class="job-info">Relevent Partners - New York, NY</div>
          <ul>
            <li><span>Conceptualized, designed, and executed highly engaging and memorable experiential marketing campaigns that successfully brought brands to life, connecting consumers with some of the top brands in the world through unique interactive experiences, unforgettable brand engagements, sponsored events and concerts, stunts, and pop-up shops</span></li>
            <li><span>Served as a creative lead for significant new business initiatives from ideation through execution, design and production</span></li>
            <li><span>Oversaw the creation of creative assets, including renderings, layouts, schematics, and technical specifications, and ensured that all materials were ready for fabrication and installation</span></li>
            <li><span>Led a team of designers, producers, and creative collaborators to ideate, develop, and produce    activations that drew in crowds and generated buzz</span></li>
            <li><span>Worked closely with account teams and clients to understand their objectives, brand messaging,    and target audience, and translated those insights into impactful experiential concepts</span></li>
          </ul>

          <div class="job-title">Freelance Associate Creative Director / 2008 - Present</div>
          <div class="job-info">Anomaly, Landor Associates, Ogilvy, Saatchi X, Iris Worldwide, Mirrorball, Global Hue, Porter Novelli, Public Label,    The A Team, NYL Media, iGo Marketing, Genuine Overkill, Stockeld Creamery</div>
          <ul>
            <li><span>Played a pivotal role in securing the Smirnoff Vodka account against competing agencies with a winning presentation and creative</span></li>
            <li><span>Art directed and designed numerous successful local, regional, and national campaigns across various media and for diverse clients</span></li>
            <li><span>Developed and designed compelling concepts for aggressive new business initiatives</span></li>
            <li><span>Maintained accurate creative scope, schedules, and budgets while staying up-to-date on  project deliverables</span></li>
          </ul>
          `
  },
  {
    title: 'Career<br>Experience',
    content: `
          <ul>
            <li><span>Possess expert knowledge of both print and digital/web design, including best practices and the development of ADA compliant websites</span></li>
            <li><span>Demonstrated mastery of a variety of creative tools, including Figma, Prototyping, XD, Sketch, Photoshop, Illustrator, and InDesign</span></li>
            <li><span>Extensive experience across a diverse range of industries, from healthcare and pharmaceutical experential and events, spirits, real estate, automotive, beauty and consumer products. Established reputation for UX leadership on significant healthcare initiatives</span></li>
            <li><span>Proficient in Agile and Lean UX methodologies to drive efficiency and flexibility in project execution</span></li>
            <li><span>Leverage expert knowledge of traditional and non-traditional advertising to deliver innovative and impactful design solutions across multiple mediums</span></li>
            <li><span>Consistently produce clean, on trend, eye-catching, and effective design solutions</span></li>
            <li><span>Proven track record of leading teams and nurturing the careers of emerging design professionals</span></li>
            <li><span>Demonstrated ownership and guidance in steering both individual and team-wide design processes</span></li>
          </ul>
          `
  },
  {
    title: 'Education',
    content: `
          <ul>
            <li><span><strong>Nobel Desktop</strong> / Figma Bootcamp</span></li>
            <li><span><strong>Maven</strong> / Midjourney for Creatives</span></li>
            <li><span><strong>Parsons School of Design</strong> / Continuing Education, Interactive Design</span></li>
            <li><span><strong>Mercer County Community College </strong> / Advertising and Design</span></li>
          </ul>
          `
  }
]

const carouselConfig = {
  itemsToShow: 4.5,
  wrapAround: true,
  autoplay: 5000,
  gap: 20,
  snapAlign: 'start',
  transition: 500,
  breakpoints: {
    1200: {
      itemsToShow: 4.5,
    },
    992: {
      itemsToShow: 3.5,
    },
    768: {
      itemsToShow: 2.5,
    },
    400: {
      itemsToShow: 1.5
    }
  }
}

</script>

<template>
  <HeroBlock :desktop="heroAboutDesktop" :mobile="heroAboutMobile" alt="About Jason Bellinger" className="full-width" />

  <ContentBlock>
    <p>My career path has varied greatly, which has given me a uniquely wide range of experience in the advertising and
      design industry. But what I love to do is at the heart of every job: Design. I have the great fortune of loving my
      profession, and I pride myself on versatility, a strong work ethic, and innovative thinking. I believe my passion
      for design comes out in every piece of work.</p>
  </ContentBlock>

  <ContentBlock className="stats">
    <div class="row-stats">
      <div class="stat">
        <div class="stat-figure">$30m</div>
        <p>Contributed to over $30 million in new business wins</p>
      </div>
      <div class="line"></div>
      <div class="stat">
        <div class="stat-figure"> 20+</div>
        <p>Over 20 advertising and design awards—and counting</p>
      </div>
    </div>
  </ContentBlock>

  <ContentBlock>
    <p>I’ve won numerous awards and designed communications on a local to global scale across all media for some of the
      top agencies in New York. In addition to generating positive results for clients, I’ve helped win over $30 million
      in new business, a number that grows every year.</p>
    <p>Due to the diversity of my opportunities, I’ve created a bit of everything, from global campaigns, print ads,
      billboards and logos, to brochures, websites, events and beyond. Whether it’s for retail, CPG or B2B, I approach
      each project with three goals for the consumer: capture attention, engage interest; and drive action.</p>
  </ContentBlock>

  <section class="carousel">
    <div class="container">
      <Carousel v-bind="carouselConfig">
        <Slide>
          <div class="slide">
            <p class="quote">Jason works around the clock to put his clean & modern design touch on all deliverables to
              impress your clients. I can give Jason work at 8pm and 3 versions are ready for me by the time I wake-up.”
            </p>
            <p class="name">- Greg L., Chief Business Officer</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide">
            <p class="quote">Damn you’re everywhere JB. I lose track of how many times PM’s have been like “Can I have
              JB” on calls. YOU’RE SO LOVED!”</p>
            <p class="name">- Alexandra H., Strategic Account & Project Manager</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide">
            <p class="quote">We couldn't do this work without you, JB. Some designers are out-of-the-box creatives, and
              some are masters of digital best practices. It's so rare to find someone who's both. Miss working with
              you!”</p>
            <p class="name">- Julia W., SVP Integrated Strategy</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide">
            <p class="quote">Dude, these are beyond stunning! You absolutely CRUSHED it. Huge thanks.”</p>
            <p class="name">- Stephen P., CEO, Chief Creative Director</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide">
            <p class="quote">Your expertise in designing especially for digital is unmatched at this company.”</p>
            <p class="name">- Lisa K., Account Director</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide">
            <p class="quote">Some of the best work of my career has been designed by Jason. His ability to jump in and
              create incredible, expensive-looking deliverables that follow best practices has always made him one of
              the most sought-after designers.”</p>
            <p class="name">- Corina K., Chief Marketing & Innovation Officer</p>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>

  <section class="resume">
    <div class="container">
      <div class="accordion">
        <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item"
          :class="{ 'active': activeIndex === index }">
          <div ref="accordionTitles" class="accordion-title" @click="toggleItem(index)">
            <span v-html="item.title"></span>
            <span class="arrow" :class="{ 'open': activeIndex === index }">
              <img src="@/assets/img/icon-plus.svg">
            </span>
          </div>
          <div v-if="activeIndex === index" class="accordion-content" v-html="item.content"></div>
        </div>
      </div>

    </div>
  </section>

  <section class="clients">
    <div class="container">
      <div class="section-heading light mb-40">
        <p>Clients</p>
      </div>

      <div class="client-logos">
        <div><img src="@/assets/img/logo-absolut.svg"></div>
        <div><img src="@/assets/img/logo-audi.svg"></div>
        <div><img src="@/assets/img/logo-don-julio.svg"></div>
        <div><img src="@/assets/img/logo-g-shock.svg"></div>
        <div><img src="@/assets/img/logo-hbo.svg"></div>
        <div><img src="@/assets/img/logo-harley.svg"></div>
        <div><img src="@/assets/img/logo-jeep.svg"></div>
        <div><img src="@/assets/img/logo-khov.svg"></div>
        <div><img src="@/assets/img/logo-kowa.svg"></div>
        <div><img src="@/assets/img/logo-novartis.svg"></div>
        <div><img src="@/assets/img/logo-pfizer.svg"></div>
        <div><img src="@/assets/img/logo-pulte.svg"></div>
        <div><img src="@/assets/img/logo-samsung.svg"></div>
        <div><img src="@/assets/img/logo-tishman.svg"></div>
        <div><img src="@/assets/img/logo-versace.svg"></div>
      </div>

      <div class="client-list">
        <ul>
          <li>Absolut Vodka</li>
          <li>Adidas</li>
          <li>Amstel Light</li>
          <li>Audi</li>
          <li>Banana Republic</li>
          <li>Budweiser</li>
          <li>Centex Homes</li>
          <li>Cynthia Rowley</li>
          <li>Cruzan Rum</li>
          <li>Don Julio</li>
          <li>Dos Equis</li>
        </ul>
        <ul>
          <li>Fernet Branca</li>
          <li>Fortune Brands</li>
          <li>Galderma</li>
          <li>Grand Marnier</li>
          <li>Graphite Bio</li>
          <li>G-Shock</li>
          <li>Harley-Davidson</li>
          <li>HBO</li>
          <li>Heineken</li>
          <li>Hennessy</li>
          <li>Hpnotiq</li>
        </ul>
        <ul>
          <li>Increlex</li>
          <li>Jeep</li>
          <li>Kmart</li>
          <li>K. Hovnanian</li>
          <li>Kowa</li>
          <li>Mayor Mike Bloomberg</li>
          <li>Microsoft</li>
          <li>Miraval Spa & Resort</li>
          <li>New Era</li>
          <li>Novartis</li>
          <li>Pantone</li>
        </ul>
        <ul>
          <li>Perrier</li>
          <li>Pfizer</li>
          <li>Plymouth Gin</li>
          <li>Samsung</li>
          <li>Sears</li>
          <li>Skyy Vodka</li>
          <li>Smirnoff Vodka</li>
          <li>Sony</li>
          <li>Stolichnaya Vodka</li>
          <li>Sunglass Hut</li>
          <li>The Ritz-Carlton</li>
        </ul>
        <ul>
          <li>Russian Standard Vodka</li>
          <li>The Macallan</li>
          <li>The Setai Group</li>
          <li>Target</li>
          <li>Tishman Speyer</li>
          <li>Verizon</li>
          <li>Versace</li>
          <li>Vevo</li>
          <li>Xiidra</li>
          <li>Zoo York</li>
        </ul>
      </div>

    </div>
  </section>

</template>

<style lang="scss">
.stats {
  .row-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat {
    text-align: center;
    padding: 0 80px;
  }

  .stat-figure {
    font-size: 100px;
    color: $purple;
    font-family: $fontHeadline;
    font-weight: 700;
  }

  p {
    font-weight: 700;
  }

  .line {
    width: 4px;
    height: 225px;
    display: block;
    background: linear-gradient(0deg, #5600E8 0%, #22D9F1 100%)
  }
}

.carousel {
  .slide {
    background: linear-gradient(57.81deg, #5600E8 28.04%, #22D9F1 98.27%);
    border-radius: 12px;
    max-width: 406px;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .quote,
    .name {
      color: $white;
    }

    .quote {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 22px;
      padding-left: 6px;
      position: relative;

      &:before {
        content: "“";
        position: absolute;
        left: 0;
      }
    }

    .name {
      font-style: italic;
      font-size: 12px;
    }
  }

  .carousel__viewport {
    padding-bottom: 50px;
  }

  .carousel__pagination {
    align-items: center;
  }

  .carousel__pagination-button {
    height: 7px;
    width: 7px;
    border-radius: 5px;
    background-color: $gray;
  }

  .carousel__pagination-button--active {
    background-color: $purple;
    width: 9px;
    height: 9px;
  }
}

.resume {
  background-color: $black;
  padding: 150px 0;

  .accordion {
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
  }

  .accordion-item {
    margin-bottom: 60px;
  }

  .accordion-title {
    cursor: pointer;
    padding: 10px 0 15px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: $fontHeadline;
    font-size: 72px;
    font-weight: 700;
    color: $white;
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: rgba(197, 200, 203, 0.3)
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 10%;
      height: 3px;
      background: rgb(172, 9, 236);
      background: linear-gradient(90deg, rgba(172, 9, 236, 1) 0%, rgba(65, 134, 241, 1) 50%, rgba(0, 216, 255, 1) 100%);
      transition: width .45s ease-in-out;
    }
  }

  .accordion-item.active {
    .accordion-title {
      &:after {
        width: 100%;
      }
    }
  }

  .accordion-item:last-child {
    .arrow {
      margin-bottom: 40px;
    }
  }

  .accordion-content {
    padding: 40px 60px;
    overflow: hidden;
    transition: max-height 0.3s ease-out;

    ul {
      color: $babyBlue;
    }

    ul span,
    p {
      font-size: 18px;
      line-height: 26px;
      color: $white;
    }

    ul li {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }

  .accordion-content.show {
    max-height: 200px;
    /* Adjust as needed */
  }

  .arrow {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease-out;
    img {
      width: 50px;
    }
  }

  .arrow.open {
    transform: rotate(45deg);
  }
}

.clients {
  background-color: $white;
  padding: 110px 0;

  .container {
    max-width: 1057px;
    margin: 0 auto;
  }

  .client-logos {
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border-bottom: 1px solid rgba(112, 112, 112, .30);
    padding-bottom: 60px;

    div {
      display: flex;
      justify-content: center;
    }
  }

  .client-list {
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-content: space-between;
    padding-top: 60px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }
}
</style>
