<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

gsap.registerPlugin(ScrollTrigger);

// Wrap *everything* in this container
const homeContainer = ref(null);

const hero = ref(null);
const txtHero = ref(null);
const bgGradient = ref(null);
const projectSlider = ref(null);
const scrollDown = ref(null);
const scrollDownGradient = ref(null);
const txtPassion = ref(null);
const txtProjects = ref(null);

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 0,
  transition: 600,
  mouseDrag: false,
  touchDrag: false,
};

let firstAnimationPlayed = false;
let ctx; // gsap.context()
let scrollLoop; // reference for the infinite loop tween
let gradientScrollLoop; // loop for the first-view icon

function fadeOutText() {
  if (!firstAnimationPlayed) return;
  const active = projectSlider.value?.querySelector('.carousel__slide--active');
  if (!active) return;
  const textEls = active.querySelectorAll('.text-1, .text-2');
  gsap.to(textEls, {
    opacity: 0,
    duration: 0.2,
    ease: 'power1.out',
  });
}

function fadeInText() {
  nextTick(() => {
    const active = projectSlider.value?.querySelector(
      '.carousel__slide--active'
    );
    if (!active) return;
    const textEls = active.querySelectorAll('.text-1, .text-2');
    gsap.fromTo(
      textEls,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.7,
        ease: 'sine.out',
      }
    );
  });
}

function fadeInImg() {
  nextTick(() => {
    const active = projectSlider.value?.querySelector(
      '.carousel__slide--active'
    );
    if (!active) return;
    const imgEl = active.querySelector('.slide-img');
    gsap.fromTo(
      imgEl,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.7,
        ease: 'sine.out',
      }
    );
  });
}

function fadeOutImg() {
  if (!firstAnimationPlayed) return;
  const active = projectSlider.value?.querySelector('.carousel__slide--active');
  if (!active) return;
  const imgEl = active.querySelector('.slide-img');
  gsap.to(imgEl, {
    opacity: 0,
    duration: 0.3,
    ease: 'power1.out',
  });
}

function animateText() {
  nextTick(() => {
    if (!txtPassion.value || !txtProjects.value) return;

    gsap.fromTo(
      txtPassion.value,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        duration: 0.7,
        ease: 'sine.out',
      }
    );
    gsap.fromTo(
      txtProjects.value,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        duration: 0.7,
        ease: 'sine.out',
      }
    );
  });
}

function onSlideStart() {
  fadeOutText();
  fadeOutImg();
}

function onSlideEnd() {
  fadeInText();
  fadeInImg();
}

onMounted(() => {
  nextTick(() => {
    // Initialize context AFTER the tick to ensure DOM elements are ready
    // and GSAP captures the triggers synchronously.
    ctx = gsap.context(() => {
      if (
        !hero.value ||
        !txtHero.value ||
        !bgGradient.value ||
        !projectSlider.value ||
        !scrollDown.value ||
        !scrollDownGradient.value
      )
        return;

      // Animate Hero Text In on Load
      // We use clearProps so CSS media queries (responsive transforms) take over after animation
      const engage = txtHero.value.querySelector('#engage');
      const inspire = txtHero.value.querySelector('#inspire');
      const delight = txtHero.value.querySelector('#delight');

      // Setup Gradient Scroll Down Icon (First View)
      const gCircle = scrollDownGradient.value.querySelector(
        '.scroll-down-gradient-circle'
      );
      const gArrow = scrollDownGradient.value.querySelector('.scroll-arrow');
      gsap.set(gCircle, {
        strokeDasharray: 151,
        strokeDashoffset: 151,
        rotate: -90,
        scaleX: -1,
        transformOrigin: 'center',
      });
      gsap.set(gArrow, { opacity: 0, y: 0 });

      const playGradientAnimation = () => {
        gsap.to(gCircle, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.out',
        });
        gsap.to(
          gArrow,
          {
            opacity: 1,
            duration: 1.5,
            onComplete: () => {
              if (!gradientScrollLoop) {
                gradientScrollLoop = gsap.to(gArrow, {
                  y: 5,
                  duration: 0.8,
                  yoyo: true,
                  repeat: -1,
                  ease: 'sine.inOut',
                });
              } else {
                gradientScrollLoop.play();
              }
            },
          },
          '<'
        );
      };

      gsap.from([engage, inspire, delight], {
        y: 100, // Slide up from 100px below
        opacity: 0,
        duration: 1.5,
        stagger: 0.2, // Stagger start times by 0.2s
        ease: 'power3.out',
        onComplete: playGradientAnimation,
        clearProps: 'transform,opacity',
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          id: 'hero-home-pin',
          trigger: hero.value,
          start: 'top top',
          end: `+=${hero.value.clientHeight}`,
          scrub: true,
          pin: true,
          immediateRender: false,
          anticipatePin: true,
          // snap: {
          //   snapTo: 1,
          //   duration: { min: 0.1, max: 0.3 },
          //   ease: 'power1.inOut',
          // },
        },
      });

      // Setup Scroll Down Icon
      const circle = scrollDown.value.querySelector('.scroll-circle');
      const arrow = scrollDown.value.querySelector('.scroll-arrow');
      // Circle circumference approx 151 (r=24)
      // Rotate -90 to start at top, scaleX(-1) to draw counter-clockwise
      gsap.set(circle, {
        strokeDasharray: 151,
        strokeDashoffset: 151,
        rotate: -90,
        scaleX: -1,
        transformOrigin: 'center',
      });
      gsap.set(arrow, { opacity: 0, y: 0 });

      const playScrollAnimation = () => {
        // Entry animation
        gsap.to(circle, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.out',
        });
        gsap.to(
          arrow,
          {
            opacity: 1,
            duration: 1.5,
            onComplete: () => {
              // Start loop
              if (!scrollLoop) {
                scrollLoop = gsap.to(arrow, {
                  y: 5,
                  duration: 0.8,
                  yoyo: true,
                  repeat: -1,
                  ease: 'sine.inOut',
                });
              } else {
                scrollLoop.play();
              }
            },
          },
          '<'
        );
      };

      const resetScrollAnimation = () => {
        if (scrollLoop) {
          scrollLoop.pause(0); // Stop and reset loop
        }
        gsap.to(circle, { strokeDashoffset: 151, duration: 0.5 });
        gsap.to(arrow, { opacity: 0, duration: 0.5 });
      };

      timeline
        .fromTo(
          txtHero.value,
          { scale: 1, opacity: 1, rotate: '0deg' },
          {
            scale: 75,
            rotate: '-1deg',
            duration: 0.15,
            opacity: 0,
            ease: 'power1.inOut',
          }
        )
        .to(scrollDownGradient.value, { opacity: 0, duration: 0.1 }, 0)
        .from(
          bgGradient.value,
          { opacity: 0, duration: 0.25, ease: 'power1.in' },
          '>'
        )
        // Trigger icon animation at the end of the timeline
        .to(
          {},
          {
            duration: 0.01,
            onStart: playScrollAnimation,
            onReverseComplete: resetScrollAnimation,
          }
        );

      ScrollTrigger.create({
        trigger: projectSlider.value,
        start: 'top 60%',
        onEnter: () => {
          animateText();
          fadeInText();
          fadeInImg();
          firstAnimationPlayed = true;
        },
      });
    });
  }, homeContainer); // scope to container
});

onUnmounted(() => {
  // 1. Explicitly revert the context to kill all triggers and timelines
  if (ctx) {
    ctx.revert();
  }

  // 2. Cleanup local variables
  firstAnimationPlayed = false;
  if (scrollLoop) scrollLoop.kill();
  if (gradientScrollLoop) gradientScrollLoop.kill();
});
</script>

<template>
  <div ref="homeContainer">
    <section class="hero-home" ref="hero">
      <video
        class="bg-video"
        src="@/assets/img/video-bg-gradient-optimized.mp4"
        loop
        muted
        autoplay
        playsinline
        ref="bgVideo"
      ></video>

      <svg class="txt-hero" ref="txtHero">
        <mask id="mask">
          <rect fill="white" width="100%" height="100%"></rect>
          <text
            id="engage"
            dominant-baseline="central"
            x="50%"
            y="30%"
            text-anchor="middle"
          >
            engage
          </text>
          <text
            id="inspire"
            dominant-baseline="central"
            x="50%"
            y="30%"
            text-anchor="middle"
          >
            inspire
          </text>
          <text
            id="delight"
            dominant-baseline="central"
            x="50%"
            y="30%"
            text-anchor="middle"
          >
            delight
          </text>
        </mask>

        <rect width="100%" height="100%" id="mask-bg"></rect>
      </svg>

      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="scroll-down-gradient"
        ref="scrollDownGradient"
      >
        <circle
          cx="25"
          cy="25"
          r="24"
          stroke="url(#paint0_linear_388_7975)"
          stroke-width="2"
          class="scroll-down-gradient-circle"
        />
        <path
          d="M19.2987 21.3926L24.5067 26.6007L29.7148 21.3926C30.2383 20.8691 31.0839 20.8691 31.6074 21.3926C32.1309 21.9161 32.1309 22.7617 31.6074 23.2852L25.4463 29.4463C24.9228 29.9698 24.0772 29.9698 23.5537 29.4463L17.3926 23.2852C16.8691 22.7617 16.8691 21.9161 17.3926 21.3926C17.9161 20.8826 18.7752 20.8691 19.2987 21.3926Z"
          fill="white"
          class="scroll-arrow"
        />
        <defs>
          <linearGradient
            id="paint0_linear_388_7975"
            x1="8.5063e-07"
            y1="51.2228"
            x2="55.6854"
            y2="1.65686"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0A09B2" />
            <stop offset="0.5" stop-color="#4186F1" />
            <stop offset="1" stop-color="#AC09EC" />
          </linearGradient>
        </defs>
      </svg>

      <div class="bg-gradient" ref="bgGradient">
        <video
          class="other-video"
          autoplay
          muted
          loop
          playsinline
          ref="otherVideo"
        >
          <source
            src="@/assets/img/video-bg-gradient-optimized.mp4"
            type="video/mp4"
          />
        </video>
        <div class="container">
          <p>
            Design is not just my profession; it's my passion, my very essence.
            I live and breathe design, and it permeates every aspect of my life.
            My mind constantly wanders, exploring new ideas, concepts, and
            possibilities. I find myself unable to turn my brain off, always
            seeking inspiration from the world around me. As an award-winning
            designer, I've had the privilege of working for top agencies across
            New York, where I've crafted everything from sleek websites to
            captivating campaigns to all immersive experiential events, aiming
            to engage, inspire, and react.
          </p>
          <p class="callout">
            Design isn't just what I do—it's who I am, and I pour my heart and
            soul into every project I undertake.
          </p>
        </div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="scroll-down"
          ref="scrollDown"
        >
          <circle
            cx="25"
            cy="25"
            r="24"
            stroke="white"
            stroke-width="2"
            class="scroll-circle"
          />

          <path
            d="M19.2987 21.3926L24.5067 26.6007L29.7148 21.3926C30.2383 20.8691 31.0839 20.8691 31.6074 21.3926C32.1309 21.9161 32.1309 22.7617 31.6074 23.2852L25.4463 29.4463C24.9228 29.9698 24.0772 29.9698 23.5537 29.4463L17.3926 23.2852C16.8691 22.7617 16.8691 21.9161 17.3926 21.3926C17.9161 20.8826 18.7752 20.8691 19.2987 21.3926Z"
            fill="white"
            class="scroll-arrow"
          />
        </svg>
      </div>
    </section>

    <div class="project-slider" ref="projectSlider">
      <div class="container">
        <div class="slider-wrap">
          <span class="txt-passion" ref="txtPassion">Passion</span>

          <Carousel
            v-bind="carouselConfig"
            @slide-start="onSlideStart"
            @slide-end="onSlideEnd"
          >
            <Slide>
              <div class="slide">
                <div class="text-1">
                  <div class="text-img">
                    <img
                      src="@/assets/img/logo-elit-2x.png"
                      alt=""
                      class="slide-logo-elit"
                    />
                  </div>
                  <p>
                    Handcrafted leather, die cuts, debossing—this Elit Pristine
                    Water Series brochure has all the bells & whistles.
                    <strong>Oh, and it won a Graphic Design USA Award!</strong>
                  </p>
                </div>
                <img
                  src="@/assets/img/home-elit-brochure-desktop-2x.png"
                  alt=""
                  class="slide-img"
                />
                <div class="text-2 with-plus">
                  <p><strong>Featured Work</strong></p>
                  <p>
                    A showcase of my most impactful and unforgettable design and
                    project accomplishments amassed throughout my career.
                  </p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="slide">
                <div class="text-1">
                  <div class="text-img">
                    <img
                      src="@/assets/img/logo-game-of-thrones-2x.png"
                      alt=""
                      class="slide-logo-game-of-thrones"
                    />
                  </div>
                  <p>
                    The Exhibition – A behind-the-scenes journey into the world
                    of Westeros, complete with immersive experiences that were
                    blowing minds before VR went mainstream.
                  </p>
                </div>
                <img
                  src="@/assets/img/home-game-of-thrones-desktop-2x.png"
                  alt=""
                  class="slide-img slide-img-game-of-thrones"
                />
                <div class="text-2 with-plus">
                  <p><strong>Featured Work</strong></p>
                  <p>
                    A showcase of my most impactful and unforgettable design and
                    project accomplishments amassed throughout my career.
                  </p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="slide">
                <div class="text-1">
                  <div class="text-img">
                    <img
                      src="@/assets/img/logo-versace-2x.png"
                      alt=""
                      class="slide-logo-versace"
                    />
                  </div>
                  <p>
                    Sleek websites, scroll-stopping socials, and digital
                    campaigns that truly delivered results.
                  </p>
                </div>
                <img
                  src="@/assets/img/home-versace-desktop-2x.png"
                  alt=""
                  class="slide-img slide-img-versace"
                />
                <div class="text-2 with-plus">
                  <p><strong>Featured Work</strong></p>
                  <p>
                    A showcase of my most impactful and unforgettable design and
                    project accomplishments amassed throughout my career.
                  </p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="slide">
                <div class="text-1">
                  <div class="text-img">
                    <img
                      src="@/assets/img/logo-dos-equis-2x.png"
                      alt=""
                      class="slide-logo-dos-equis"
                    />
                  </div>
                  <p>
                    A national Masquerade Parade, a custom float, and one big
                    Reggie Award—stay thirsty for greatness.
                  </p>
                </div>
                <img
                  src="@/assets/img/home-dos-equis-desktop-2x.png"
                  alt=""
                  class="slide-img slide-img-dos-equis"
                />
                <div class="text-2 with-plus">
                  <p><strong>Featured Work</strong></p>
                  <p>
                    A showcase of my most impactful and unforgettable design and
                    project accomplishments amassed throughout my career.
                  </p>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation>
                <template #next>
                  <img
                    src="@/assets/img/icon-arrow-right-purple.svg"
                    alt="Next"
                    class="nav-icon"
                  />
                </template>
                <template #prev>
                  <img
                    src="@/assets/img/icon-arrow-right-purple.svg"
                    alt="Previous"
                    class="nav-icon rotate-180"
                  />
                </template>
              </Navigation>
            </template>
          </Carousel>

          <span class="txt-projects" ref="txtProjects">Projects</span>
        </div>
      </div>
    </div>

    <div class="cta-blocks">
      <div class="container">
        <div class="cta-blocks-row">
          <div class="quote">
            <p class="quote-label">Words to live by</p>
            <figure>
              <blockquote>
                There are three responses to a piece of design—yes, no, and WOW!
                Wow is the one to aim for.
              </blockquote>
              <figcaption>- Milton Glaser</figcaption>
            </figure>
          </div>
          <router-link to="/work" class="view-work">
            View <br class="desktop-only" />
            All<br />Work
            <img src="@/assets/img/icon-arrow-right-gradient.svg" alt="" />
          </router-link>

          <a
            href="http://linkedin.com/in/jasonbellinger"
            class="linkup"
            target="_blank"
          >
            let’s link up!
            <img src="@/assets/img/icon-linkedin-white-txt-2x.png" alt="" />
          </a>
          <router-link to="/about" class="about-jason">
            <img
              src="@/assets/img/photo-jb-circle-2x.png"
              alt="JB"
              class="photo-jb-circle"
            />
            <span>about me</span>
            <img src="@/assets/img/icon-arrow-right-muted.svg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-home {
  background-color: $black;
  width: 100vw;
  height: 100dvh;
  position: relative;
  overflow: hidden;

  .txt-hero {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
  }

  #inspire,
  #engage,
  #delight {
    font-family: 'DM Serif Display', serif;
    font-size: 180.23px;
    @media (max-width: $breakpoint-sm) {
      font-size: 30vw;
    }
  }

  #engage {
    transform: translateY(-30px);
    @media (max-width: $breakpoint-sm) {
      transform: translateY(-10px);
    }
  }

  #inspire {
    transform: translateY(110px) translateX(140px);
    @media (max-width: $breakpoint-sm) {
      transform: translateY(115px) translateX(-35px);
    }
  }

  #delight {
    transform: translateY(245px) translateX(-60px);
    @media (max-width: $breakpoint-sm) {
      transform: translateY(240px) translateX(37px);
    }
  }

  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -100;
    @media (max-width: $breakpoint-sm) {
      left: auto;
      right: 0;
    }
  }

  .scroll-down-gradient {
    position: absolute;
    right: 3vw;
    bottom: 60px;
    @media (max-width: $breakpoint-sm) {
      right: 30px;
      bottom: 30px;
    }
  }

  #mask-bg {
    mask: url('#mask');
  }

  .other-video {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -100;
    @media (max-width: $breakpoint-sm) {
      left: auto;
      right: 0;
    }
  }
}

.bg-gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%; // Adjust height to fit within the padded area
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    max-width: 900px;
  }

  @media (max-width: $breakpoint-sm) {
    // align-items: start;
    // padding-top: 100px;

    .container {
      position: relative;
    }
  }

  p,
  h3 {
    color: $white;
    max-width: 1300px;
    margin: 0 auto;
  }

  .callout {
    @extend h3;
    @media (max-width: $breakpoint-xs) {
      font-size: 22px;
      line-height: 28px;
    }
  }

  p {
    font-size: 20px;
    line-height: 40px;
    margin-bottom: 20px;
    @media (max-width: $breakpoint-sm) {
      font-size: 16px;
      line-height: 32px;
    }
    @media (max-width: $breakpoint-xs) {
      font-size: 14px;
      line-height: 30px;
    }
  }

  .scroll-down {
    position: absolute;
    right: 3vw;
    bottom: 60px;
    @media (max-width: $breakpoint-sm) {
      right: 30px;
      bottom: 30px;
    }
  }
}

.project-slider {
  padding-top: 4rem;
  background-color: $white;

  @media (max-width: $breakpoint-sm) {
    padding-top: 0;
  }
}

.slider-wrap {
  position: relative;
  pointer-events: none;

  .carousel {
    position: relative;
    overflow: hidden;
    padding: 5rem 3rem 0 3rem;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: $breakpoint-sm) {
      padding: 6rem 0 60px 0;
    }

    .slide {
      @media (max-width: $breakpoint-sm) {
        display: flex;
        flex-direction: column;
      }
    }
    .slide-img {
      max-width: 70vw;
      width: 100%;
      height: auto;
      object-fit: contain;
      @media (max-width: $breakpoint-sm) {
        max-width: 100%;
        order: 2;
        margin-bottom: 30px;
      }
    }

    .slide-img-versace,
    .slide-img-dos-equis {
      max-width: 50vw;
    }

    .slide-img-game-of-thrones {
      max-width: 46vw;
    }

    :deep(.carousel__slide),
    :deep(.carousel__track),
    :deep(.carousel__viewport) {
      touch-action: pan-y !important;
    }

    @media (max-width: $breakpoint-sm) {
      .slide-img-game-of-thrones,
      .slide-img-versace,
      .slide-img-dos-equis {
        max-width: 100%;
      }
    }
  }

  .carousel__slide {
    align-items: start;
  }

  .carousel__pagination-button {
    background-color: $lightCoolGray;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    z-index: 10;
  }

  .carousel__pagination-button--active {
    background-color: $purple;
  }

  .text-img {
    height: 87px;
    display: flex;

    img {
      display: block;
      align-self: flex-end;
    }
  }
  .text-1,
  .text-2,
  .slide-img {
    opacity: 0;
  }

  .text-1 {
    position: absolute;
    top: 15vw;
    left: 0;
    width: 20vw;
    @media (max-width: $breakpoint-sm) {
      position: relative;
      top: 0;
      left: auto;
      width: 100%;
      order: 3;
    }
  }

  .text-2 {
    position: absolute;
    top: 4vw;
    right: 0;
    width: 25vw;

    &.with-plus {
      &:before {
        content: '+';
        font-size: 20px;
        color: $purple;
        position: absolute;
        left: 0;
      }

      padding-left: 20px;
    }

    @media (max-width: $breakpoint-sm) {
      position: relative;
      top: auto;
      right: auto;
      width: 100%;
      order: 1;
      margin-bottom: 30px;
      height: 140px;

      text-align: right;
      &.with-plus {
        &:before {
          display: none;
        }
      }
      p:first-child {
        &:before {
          content: '+';
          color: $purple;
          font-size: 25px;
          font-weight: 700;
          display: inline-block;
          vertical-align: bottom;
          padding-right: 10px;
        }
      }
    }
  }

  .slide-logo-elit {
    width: 65px;
    margin-bottom: 20px;
  }

  .slide-logo-game-of-thrones {
    width: 218px;
    margin-bottom: 20px;
  }

  .slide-logo-versace {
    width: 120px;
    margin-bottom: 20px;
  }
  .slide-logo-dos-equis {
    width: 105px;
    margin-bottom: 20px;
  }
}

:deep(.carousel__prev) {
  inset-inline-start: 8px;
  @media (max-width: $breakpoint-sm) {
    left: 0;
  }
}

:deep(.carousel__next) {
  inset-inline-end: 8px;
  @media (max-width: $breakpoint-sm) {
    left: 50px;
    right: auto;
  }
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  pointer-events: auto !important;
  background-color: transparent !important;
  border: none !important;

  @media (max-width: $breakpoint-sm) {
    top: auto;
    bottom: 0;
    transform: none;
  }

  .nav-icon {
    width: 25px;
    height: 25px;
    transition: transform 0.3s ease;
    &.rotate-180 {
      transform: rotate(180deg);
      transform-origin: center;
    }
  }
  @media (hover: hover) {
    &:hover .nav-icon {
      transform: scale(1.1);
      &.rotate-180 {
        transform: rotate(180deg) scale(1.1);
      }
    }
  }
}

.txt-passion,
.txt-projects {
  opacity: 0;
  position: absolute;
  font-family: $fontHeadline;
  font-size: clamp(10rem, 10vw, 12rem);
  font-weight: bold;
  color: #3f3de6;
  pointer-events: none;
  user-select: none;

  @media (max-width: 1100px) {
    font-size: clamp(8rem, 8vw, 10rem);
  }
  @media (max-width: $breakpoint-sm) {
    font-size: clamp(4rem, 4vw, 100px);
  }
}

.txt-passion {
  top: 6vw;
  left: 2%;
  z-index: 1;
  @media (max-width: $breakpoint-sm) {
    top: 42%;
  }
}

.txt-projects {
  bottom: 40%;
  right: 5%;
  z-index: 3;

  @media (max-width: 1100px) {
    bottom: 30%;
  }

  @media (max-width: 930px) {
    bottom: 10%;
  }
  @media (max-width: $breakpoint-sm) {
    bottom: 35%;
  }
}

.cta-blocks {
  background: linear-gradient(180deg, $white 80px, $black 80px);
  @media (max-width: $breakpoint-sm) {
    margin-top: 50px;
  }
}

.cta-blocks-row {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
  gap: 20px;

  .quote,
  a {
    min-height: 200px;
    border-radius: 12px;
    padding: 40px;
    color: $white;
    display: block;
    text-decoration: none;
    position: relative;
    transition: transform 0.4s ease;

    &:hover {
      transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) scale(1.02);
      z-index: 10;
    }
  }

  .quote {
    grid-column: span 7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 90px;
    .quote-label {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 5px;
      color: $babyBlue;
    }

    figure {
      margin: 0;
    }

    blockquote {
      font-size: clamp(38px, 4vw, 42px);
      line-height: 1.1;
      color: $white;
      font-family: $fontHeadline;
      margin: 0 0 20px 0;
      &:before,
      &:after {
        font-size: 120px;
        line-height: 1;
        position: absolute;
      }
      &:before {
        content: '“';
        left: 35px;
        top: 65px;
      }
      &:after {
        content: '”';
        bottom: 10px;
      }
    }

    figcaption {
      font-size: 16px;
    }
  }

  .quote,
  .about-jason {
    background: linear-gradient(66.06deg, #5600e8 34.63%, #22d9f1 98.74%);
  }

  .view-work {
    grid-column: span 3;
    font-size: clamp(64px, 6vw, 70px);
    font-weight: 100;
    display: flex;
    align-items: center;
  }

  .view-work,
  .about-jason {
    img:not(.photo-jb-circle) {
      position: absolute;
      bottom: 15px;
      right: 15px;
      width: 30px;
    }
  }

  .view-work,
  .linkup {
    background-color: $blueGray;
  }

  .about-jason {
    display: flex;
    span {
      margin-left: -80px;
    }
    .photo-jb-circle {
      max-width: 260px;
    }
  }
  .linkup,
  .about-jason {
    grid-column: span 5;
    font-family: $fontHeadline;
    font-size: clamp(82px, 8vw, 100px);
    line-height: 0.8;
    font-weight: 700;
    display: flex;
    align-items: center;
  }
  .linkup {
    img {
      position: absolute;
      bottom: 21px;
      right: 15px;
      width: 30px;
    }
  }
  @media (max-width: $breakpoint-md) {
    .about-jason {
      .photo-jb-circle {
        max-width: 170px;
      }
    }
  }
  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;

    .quote,
    .view-work,
    .linkup,
    .about-jason {
      grid-column: auto;
    }
    .linkup,
    .about-jason {
      line-height: 1;
    }

    .about-jason {
      display: flex;
      flex-direction: column;
      span {
        margin-left: 0;
        margin-top: -78px;
      }
      .photo-jb-circle {
        max-width: 200px;
      }
    }
  }
}
</style>
