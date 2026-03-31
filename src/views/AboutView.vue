<script setup>
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';
import heroAboutDesktop from '@/assets/img/hero-about-desktop-2x.png';
import heroAboutMobile from '@/assets/img/hero-about-mobile-2x.png';

import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

import { ref } from 'vue';

const activeIndex = ref(null);

function toggleItem(index) {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
}

const aboutCarouselConfig = {
  itemsToShow: 'auto',
  wrapAround: true,
  autoplay: 5000,
  gap: 20,
  snapAlign: 'start',
  transition: 500,
};
</script>

<template>
  <div class="about-page">
    <HeroBlock
      :desktop="heroAboutDesktop"
      :mobile="heroAboutMobile"
      alt="About Jason Bellinger"
      className="full-width"
    />

    <div class="headline-plus">
      <img src="../assets/img/icon-plus-purple.svg" alt="" /> My Journey/Bio
    </div>
    <ContentBlock>
      <p>
        My career path has varied greatly, which has given me a uniquely wide
        range of experience in the advertising and design industry. But what I
        love to do is at the heart of every job: Design. I have the great
        fortune of loving my profession, and I pride myself on versatility, a
        strong work ethic, and innovative thinking. I believe my passion for
        design comes out in every piece of work.
      </p>
    </ContentBlock>

    <ContentBlock className="stats">
      <div class="row-stats">
        <div class="stat">
          <div class="stat-figure">$30m</div>
          <p>Contributed to over $30 million in new business wins</p>
        </div>
        <div class="line"></div>
        <div class="stat">
          <div class="stat-figure">20+</div>
          <p>Over 20 advertising and design awards—and counting</p>
        </div>
      </div>
    </ContentBlock>

    <ContentBlock>
      <p>
        I’ve won numerous awards and designed communications on a local to
        global scale across all media for some of the top agencies in New York.
        In addition to generating positive results for clients, I’ve helped win
        over $30 million in new business, a number that grows every year.
      </p>
      <p>
        Due to the diversity of my opportunities, I’ve created a bit of
        everything, from global campaigns, print ads, billboards and logos, to
        brochures, websites, events and beyond. Whether it’s for retail, CPG or
        B2B, I approach each project with three goals for the consumer: capture
        attention, engage interest; and drive action.
      </p>
    </ContentBlock>

    <section class="testimonials">
      <div class="headline-plus">
        <img src="../assets/img/icon-plus-purple.svg" alt="" /> Feedback That
        Matters
      </div>
      <div class="container">
        <Carousel v-bind="aboutCarouselConfig">
          <Slide>
            <div class="slide">
              <p class="quote">
                Jason works around the clock to put his clean & modern design
                touch on all deliverables to impress your clients. I can give
                Jason work at 8pm and 3 versions are ready for me by the time I
                wake-up.”
              </p>
              <p class="name">- Greg L., Chief Business Officer</p>
            </div>
          </Slide>
          <Slide>
            <div class="slide">
              <p class="quote">
                Damn you’re everywhere JB. I lose track of how many times PM’s
                have been like “Can I have JB” on calls. YOU’RE SO LOVED!”
              </p>
              <p class="name">
                - Alexandra H., Strategic Account & Project Manager
              </p>
            </div>
          </Slide>
          <Slide>
            <div class="slide">
              <p class="quote">
                We couldn't do this work without you, JB. Some designers are
                out-of-the-box creatives, and some are masters of digital best
                practices. It's so rare to find someone who's both. Miss working
                with you!”
              </p>
              <p class="name">- Julia W., SVP Integrated Strategy</p>
            </div>
          </Slide>
          <Slide>
            <div class="slide">
              <p class="quote">
                Dude, these are beyond stunning! You absolutely CRUSHED it. Huge
                thanks.”
              </p>
              <p class="name">- Stephen P., CEO, Chief Creative Director</p>
            </div>
          </Slide>
          <Slide>
            <div class="slide">
              <p class="quote">
                Your expertise in designing especially for digital is unmatched
                at this company.”
              </p>
              <p class="name">- Lisa K., Account Director</p>
            </div>
          </Slide>
          <Slide>
            <div class="slide">
              <p class="quote">
                Some of the best work of my career has been designed by Jason.
                His ability to jump in and create incredible, expensive-looking
                deliverables that follow best practices has always made him one
                of the most sought-after designers.”
              </p>
              <p class="name">
                - Corina K., Chief Marketing & Innovation Officer
              </p>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </section>

    <section class="resume">
      <div class="headline-plus">
        <img src="../assets/img/icon-plus-purple.svg" alt="" /> Resume
      </div>
      <div class="container">
        <div class="accordion">
          <!-- Key Highlights -->
          <div
            class="accordion-item key-highlights"
            :class="{ active: activeIndex === 0 }"
          >
            <div class="accordion-title" @click="toggleItem(0)">
              <span>Key<br />Highlights</span>
              <span class="arrow" :class="{ open: activeIndex === 0 }">
                <img src="@/assets/img/icon-plus.svg" />
              </span>
            </div>
            <div v-if="activeIndex === 0" class="accordion-content">
              <ul>
                <li>
                  <span
                    ><strong
                      >Successfully introduced Figma to the Ogilvy Health
                      team,</strong
                    >
                    resulting in a more streamlined process among a
                    cross-functional team of 30+ members consisting of UX,
                    Creative, Copy, Production, and Development. Conducted
                    bootcamp sessions to facilitate the adoption and proficiency
                    of the tool</span
                  >
                </li>
                <li>
                  <span
                    ><strong
                      >Over twenty awards won including two recent Ogilvy Health
                      Team Impact Awards,</strong
                    >
                    Beverage Dynamics Advertising & Promotion Award, Reggie
                    Award, and GD USA .</span
                  >
                </li>
                <li>
                  <span
                    ><strong
                      >Known for exceptional design skills and creative
                      excellence,</strong
                    >
                    frequently requested by colleagues and regularly invited to
                    collaborate on high-profile brands across the agency.</span
                  >
                </li>
                <li>
                  <span
                    >Accolades have appeared in the New York Times, The Real
                    Deal magazine, Adrants.com and Curbed.com.</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Specialized Skills -->
          <div
            class="accordion-item specialized-skills"
            :class="{ active: activeIndex === 1 }"
          >
            <div class="accordion-title" @click="toggleItem(1)">
              <span>Specialized<br />Skills</span>
              <span class="arrow" :class="{ open: activeIndex === 1 }">
                <img src="@/assets/img/icon-plus.svg" />
              </span>
            </div>
            <div v-if="activeIndex === 1" class="accordion-content">
              <ul>
                <li>
                  <span
                    ><strong
                      >Possess expert knowledge of digital/web design,</strong
                    >
                    including best practices and the development of ADA
                    compliant websites</span
                  >
                </li>
                <li>
                  <span
                    ><strong
                      >Strong expertise in concepting and ideation,</strong
                    >
                    and leveraging AI Image Generators for rapid ideation,
                    delivering unique and thoughtful art direction, smart design
                    solutions, and strategic creative thinking to drive
                    innovative user experiences.</span
                  >
                </li>
                <li>
                  <span
                    >Demonstrated mastery of a variety of creative tools,
                    including
                    <strong>Midjourney, Figma, Prototyping,</strong> XD, Sketch,
                    Photoshop, Illustrator, and InDesign.</span
                  >
                </li>
                <li>
                  <span
                    ><strong
                      >Extensive experience across diverse industries,</strong
                    >
                    including spirits, real estate, automotive, beauty, consumer
                    products, healthcare and pharmaceuticals, spanning multiple
                    media platforms.</span
                  >
                </li>
                <li>
                  <span
                    ><strong
                      >Skilled in traditional and non-traditional
                      advertising,</strong
                    >
                    including experiential design and rendering mockups, to
                    create innovative, high-impact designs across various
                    mediums.</span
                  >
                </li>
                <li>
                  <span
                    ><strong
                      >Consistently deliver clean, modern, and visually
                      compelling design solutions</strong
                    >
                    tailored for multiple media platforms.</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Career Experience -->
          <div
            class="accordion-item career-experience"
            :class="{ active: activeIndex === 2 }"
          >
            <div class="accordion-title" @click="toggleItem(2)">
              <span>Career<br />Experience</span>
              <span class="arrow" :class="{ open: activeIndex === 2 }">
                <img src="@/assets/img/icon-plus.svg" />
              </span>
            </div>
            <div v-if="activeIndex === 2" class="accordion-content">
              <div class="job-title">
                Vice President, Associate Creative Director
              </div>
              <div class="job-info">
                Ogilvy Health, WPP - Parsippany, NJ / Remote / 2022 - Present
              </div>
              <p>
                Recruited to lead all digital design initiatives, I currently
                oversee a wide range of experiences from responsive websites and
                email campaigns to banners and social content. As an integral
                part of Ogilvy Health’s new business team, I regularly
                contribute to high-level concepting and creative development for
                pitches. Most recently, my work helped secure a major account
                win, with the concept chosen over multiple competing agencies, a
                proud moment that showcased the power of strategic, smart,
                insight-driven creative.
              </p>

              <p>
                I currently manage four national and global brands, driving
                creative strategy and leading a team of four art directors to
                ensure cohesive, high-impact execution across all channels.
                Within the agency, I’m known not only for design excellence but
                also for my ability to collaborate and deliver under pressure,
                frequently tapped to support high-profile brands and
                cross-functional initiatives. My contributions have been
                recognized with two Ogilvy Health Team Impact Awards (Dec 2023 &
                July 2024), a peer-nominated honor for outstanding performance
                and leadership.
              </p>

              <p>
                I introduced Figma to the agency, streamlining collaboration
                across a 30+ member cross-functional team. To support adoption,
                I led training bootcamps and created standardized digital
                templates and components, elevating both efficiency and
                consistency. I also established best practices for digital and
                web, ensuring that all creative is on-brand, ADA-compliant, and
                delivered on time and within budget.
              </p>

              <p>
                A standout project includes leading the creative for the launch
                of a national pharmaceutical brand targeting desmoid tumors.
                This end-to-end campaign spanned DTC and HCP marketing,
                including brand guidelines, email, print, social, and multiple
                websites (Unbranded, Branded, Day 10, Now Approved). The result:
                a meaningful, memorable launch that drove awareness, engagement,
                and strong market performance.
              </p>

              <div class="job-title">Associate Creative Director</div>
              <div class="job-info">
                Real Chemistry - Florham Park, NJ / Remote | 2014-2022
              </div>

              <p>
                I started at the agency back when it was still Sentient, a
                scrappy shop with around 30 people and a big vision. From day
                one, I jumped in as an Art Director, designing fast, thinking
                strategically, and helping create digital work that delivered
                beyond expectations. Over time, I grew into the role of
                Associate Creative Director, and watched the agency evolve into
                Real Chemistry, a powerhouse in healthcare marketing.
              </p>

              <p>
                During that transformation, I led the creative development of
                high performing digital experiences for national and global
                pharmaceutical brands. From responsive websites and mobile
                platforms to campaign ecosystems, emails, and branded
                storytelling, I oversaw the creative strategy and execution
                across a range of touchpoints, always aiming to blend clarity
                with empathy.
              </p>

              <p>
                I collaborated closely with UX, strategy, development, and
                motion teams to bring ideas to life, making sure they were not
                only beautifully designed but smart, scalable, and grounded in
                user insight. I helped build design systems, establish brand
                guidelines, and lead new business pitches that expanded the
                agency’s footprint in both consumer and HCP markets.
              </p>

              <p>
                Even in a regulated industry, I found ways to champion
                creativity, helping brands stand out, stay human, and connect in
                ways that mattered. And as we grew from startup energy into
                enterprise scale, I never lost that hands on drive to create
                great work and help others do the same.
              </p>

              <div class="job-title">Senior Experiential Designer</div>
              <div class="job-info">
                Relevent Partners - New York, NY | 2012-2014
              </div>
              <p>
                At the heart of my experiential work was the goal to make brands
                unforgettable. I had the opportunity to lead and create
                immersive campaigns that brought global brands like Jeep, Audi,
                Samsung, HBO’s Game of Thrones, and Victoria’s Secret to life in
                bold, unexpected ways. Whether it was a high impact stunt, a
                fully branded pop-up shop, or a sponsored concert experience,
                the goal was always the same: create moments that people don’t
                just see... but feel.
              </p>

              <p>
                What made it even more rewarding was getting to design for
                brands and artists I genuinely love. I helped concept and
                produce the Game of Thrones touring exhibit, a one-of-a-kind VIP
                concert featuring Eminem, and a record release party for
                Jay-Z... projects that blurred the line between work and pure
                fan joy. It never felt like just a job when I was helping bring
                to life the kind of culture shaping experiences I’d line up for
                myself.
              </p>

              <p>
                As a creative lead, I oversaw everything from ideation to
                execution, design to production and installations, collaborating
                closely with clients and account teams to understand their
                audience and brand messaging, and then translating that into
                emotionally charged, immersive environments. I led a team of
                designers, producers, and creative collaborators, ensuring every
                detail, from renderings and schematics to final production, was
                flawless and fabrication ready. The energy was fast-paced, the
                stakes were high, and the work was pure excitement, creative
                adrenaline.
              </p>

              <div class="job-title">
                Freelance Senior Experiential Art Director
              </div>
              <div class="job-info">Mirrorball - New York, NY | 2009-2012</div>

              <p>
                Working at Mirrorball was one of the most memorable experiences
                of my career. It was one of those rare agencies where creativity
                wasn’t just encouraged, it was expected to go further. The team
                was wildly talented, the energy was electric, and the projects
                were the kind that stick with you. I built lasting friendships
                there, and to this day, I still freelance for the CCO and
                several former colleagues whenever they need someone they trust
                to deliver standout creative.
              </p>

              <p>
                While at Mirrorball, I concepted and designed for a wide range
                of experiential campaigns that pushed the boundaries of branding
                and immersive storytelling. One of my favorite projects was
                creating the full brand identity for Harley-Davidson’s Badass
                Bootcamp... an event that introduced new riders to the Harley
                lifestyle. I developed the event’s look and feel from the ground
                up, including the logo, environmental graphics, posters,
                brochures, banners, and more. It was the kind of project that
                let me dive deep into a brand’s culture and bring it to life in
                bold, authentic, unforgettable ways.
              </p>

              <p>
                Then there was Dos Equis, a constant source of offbeat creative.
                We launched multiple national activations, including the Feast
                of the Brave, where we designed a food truck topped with a
                massive scorpion, serving scorpion tacos and other adventurous
                eats. Another standout? Taking over the historic Freemason
                building (which had never hosted an outside event) and turning
                it into a multi-room immersive experience.
              </p>

              <p>
                Other projects included a VIP parties for Société Perrier, the
                Amstel Light Burger Bash in Miami (where I designed a custom
                “Best Burger” trophy), and countless other creative-led moments
                that merged culture, community, and design in unexpected ways.
              </p>

              <p>
                Mirrorball raised the bar on everything it touched and being
                part of that energy was something special. It wasn’t just great
                work... it was great people, great ideas, and the kind of
                creative environment that keeps calling you back.
              </p>

              <div class="job-title">Freelance ACD/Sr Art Director</div>
              <div class="job-info">
                2012-Present<br />Anomaly, Landor Associates, Saatchi X, Iris
                Worldwide, Mirrorball, Global Hue, Porter Novelli, Public Label,
                The A Team, NYL Media, iGo Marketing, Genuine Overkill, Stockeld
                Creamery
              </div>

              <p>
                As a freelance Associate Creative Director specializing in UI,
                design, and experiential, I had the chance to collaborate with
                some of the most exciting agencies and brands in the world, from
                Ogilvy to Saatchi & Saatchi, Versace to cult favorites like
                Stockeld Cream Cheese. No two days looked the same. One week I’d
                be concepting a wild retail experience, the next I'd be deep in
                pitch mode for a global spirits brand.
              </p>

              <p>
                One of the highlights? Leading the creative that won the
                Smirnoff Vodka account, beating out several agencies with a
                bold, experiential pitch that landed the business. That win
                opened the door to even more work, from regional rollouts to
                national brand campaigns.
              </p>

              <p>
                I art directed and designed campaigns across nearly every
                medium: web, pop-up experiences, social content, event
                collateral, 3D retail displays, you name it. I thrived in the
                fast pace of new business, helping teams land major accounts
                with sharp creative ideas that cut through. And while I was
                deeply hands-on with the work, I also kept things on track,
                managing scope, schedules, and deliverables, all while keeping
                the creative energy high.
              </p>

              <p>
                One thing I’m proud of is the relationships I’ve built along the
                way. I’ve always formed deep respect with colleagues and clients
                at past agencies, they’ve seen my work ethic, my creativity, and
                my ability to deliver under pressure. So much so that I’m still
                called back to support them when they move on to new agencies
                and need someone they trust to deliver great creative.
              </p>

              <p>
                It was a stretch of pure creative momentum, collaborating with
                talented teams from agencies like Anomaly, Iris Worldwide,
                Landor Associates, Saatchi & Saatchi, Mirrorball, and The A
                Team, among many others. And through it all, I brought the same
                mix of hustle, drive, curiosity, and craft, because great work
                should feel as fun to make as it is to experience.
              </p>
            </div>
          </div>

          <!-- Education -->
          <div
            class="accordion-item education"
            :class="{ active: activeIndex === 3 }"
          >
            <div class="accordion-title" @click="toggleItem(3)">
              <span>Education</span>
              <span class="arrow" :class="{ open: activeIndex === 3 }">
                <img src="@/assets/img/icon-plus.svg" />
              </span>
            </div>
            <div v-if="activeIndex === 3" class="accordion-content">
              <ul>
                <li>
                  <span
                    ><strong>Parsons School of Design</strong> / Continuing
                    Education, Interactive Design</span
                  >
                </li>
                <li>
                  <span
                    ><strong>Mercer County Community College </strong> /
                    Advertising and Design</span
                  >
                </li>
                <li>
                  <span><strong>Nobel Desktop</strong> / Figma Bootcamp</span>
                </li>
                <li>
                  <span><strong>Maven</strong> / Midjourney for Creatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="clients">
      <div class="headline-plus">
        <img src="../assets/img/icon-plus-purple.svg" alt="" /> Clients
      </div>
      <div class="container">
        <div class="client-logos">
          <div><img src="@/assets/img/logo-absolut.svg" /></div>
          <div><img src="@/assets/img/logo-audi.svg" /></div>
          <div><img src="@/assets/img/logo-don-julio.svg" /></div>
          <div><img src="@/assets/img/logo-g-shock.svg" /></div>
          <div><img src="@/assets/img/logo-hbo.svg" /></div>
          <div><img src="@/assets/img/logo-harley.svg" /></div>
          <div><img src="@/assets/img/logo-jeep.svg" /></div>
          <div><img src="@/assets/img/logo-khov.svg" /></div>
          <div><img src="@/assets/img/logo-kowa.svg" /></div>
          <div><img src="@/assets/img/logo-novartis.svg" /></div>
          <div><img src="@/assets/img/logo-pfizer.svg" /></div>
          <div><img src="@/assets/img/logo-pulte.svg" /></div>
          <div><img src="@/assets/img/logo-samsung.svg" /></div>
          <div><img src="@/assets/img/logo-tishman.svg" /></div>
          <div><img src="@/assets/img/logo-versace.svg" /></div>
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
  </div>
</template>

<style lang="scss" scoped>
.headline-plus {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 700;
  max-width: 1078px;
  margin: 0 auto 30px auto;
  @media (max-width: $breakpoint-sm) {
    margin-left: 28px;
  }
  @media (max-width: $breakpoint-xs) {
    margin-left: 18px;
  }
}
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
    background: linear-gradient(0deg, #5600e8 0%, #22d9f1 100%);
  }
  @media (max-width: $breakpoint-sm) {
    .stat {
      padding: 0 10px;
    }

    .row-stats {
      flex-direction: column;
      justify-content: center;
    }

    .line {
      width: 225px;
      height: 4px;
      background: linear-gradient(90deg, #5600e8 0%, #22d9f1 100%);
      margin: 50px 0 40px 0;
    }
  }
}

.testimonials {
  padding: 50px 0 100px 0;
  .container {
    padding-left: 0;
    padding-right: 0;
    max-width: 100%;
  }
}

.carousel {
  .slide {
    background: linear-gradient(57.81deg, #5600e8 28.04%, #22d9f1 98.27%);
    border-radius: 12px;
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
        content: '“';
        position: absolute;
        left: 0;
      }
    }

    .name {
      font-style: italic;
      font-size: 12px;
    }
  }

  :deep(.carousel__slide) {
    width: 406px;
    max-width: 90vw;
    flex-shrink: 0;
  }

  :deep(.carousel__viewport) {
    padding-bottom: 50px;
  }

  :deep(.carousel__pagination) {
    align-items: center;
  }

  :deep(.carousel__pagination-button) {
    height: 7px;
    width: 7px;
    border-radius: 5px;
    background-color: $gray;
  }

  :deep(.carousel__pagination-button--active) {
    background-color: $purple;
    width: 9px;
    height: 9px;
  }
}

.resume {
  background-color: $black;
  padding: 100px 0;

  .headline-plus {
    color: $white;
  }

  .accordion {
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
  }

  .accordion-item {
    margin-bottom: 60px;
    @media (max-width: $breakpoint-sm) {
      .arrow {
        position: absolute;
        right: 0;
        z-index: 10;
        width: 30px;
        height: 30px;
        img {
          width: 30px;
        }
      }
      &.key-highlights,
      &.career-experience {
        .arrow {
          top: 5px;
        }
      }
      &.specialized-skills {
        .arrow {
          bottom: 30px;
        }
      }
      &.education {
        .arrow {
          top: 10px;
        }
      }
    }
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
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: rgba(197, 200, 203, 0.3);
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 10%;
      height: 3px;
      background: rgb(172, 9, 236);
      background: linear-gradient(
        90deg,
        rgba(172, 9, 236, 1) 0%,
        rgba(65, 134, 241, 1) 50%,
        rgba(0, 216, 255, 1) 100%
      );
      transition: width 0.45s ease-in-out;
    }
    @media (max-width: $breakpoint-sm) {
      font-size: 48px;
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
    color: $white;
    font-size: 18px;
    line-height: 26px;

    ul {
      color: $purple;
      list-style-type: disc;
      li {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
        span {
          color: $white;
        }
      }
    }

    p {
      margin-bottom: 20px;
    }

    .job-title,
    .job-info {
      font-size: 20px;
    }

    .job-title {
      font-size: 20px;
      font-weight: 700;
      margin-top: 40px;
      &:first-of-type {
        margin-top: 0;
      }
    }

    .job-info {
      margin-bottom: 15px;
    }
    strong {
      font-weight: 700;
    }
    @media (max-width: $breakpoint-sm) {
      padding-left: 10px;
      padding-right: 10px;
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

  @media (max-width: $breakpoint-sm) {
    .container {
      padding: 0 45px;
    }
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
    border-bottom: 1px solid rgba(112, 112, 112, 0.3);
    padding: 0 40px 60px 40px;

    div {
      display: flex;
      justify-content: center;
    }
    @media (max-width: $breakpoint-sm) {
      gap: 40px;
      img {
        max-width: 100%;
      }
    }
  }

  .client-list {
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: start;
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
  @media (max-width: $breakpoint-sm) {
    .client-list,
    .client-logos {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
