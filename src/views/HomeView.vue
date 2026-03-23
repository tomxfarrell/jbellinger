<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

gsap.registerPlugin(ScrollTrigger);

// Wrap *everything* in this container
const homeContainer = ref(null);

const hero = ref(null);
const txtHero = ref(null);
const bgGradient = ref(null);
const projectSlider = ref(null);
const scrollDown = ref(null);
const txtPassion = ref(null);
const txtProjects = ref(null);

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 10000,
  transition: 600,
  mouseDrag: false,
  touchDrag: false,
};

let firstAnimationPlayed = false;
let ctx; // gsap.context()
let scrollLoop; // reference for the infinite loop tween

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
  ctx = gsap.context(() => {
    nextTick(() => {
      if (
        !hero.value ||
        !txtHero.value ||
        !bgGradient.value ||
        !projectSlider.value ||
        !scrollDown.value
      )
        return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          id: 'hero-home-pin',
          trigger: hero.value,
          start: 'top +=50',
          end: `+=${hero.value.clientHeight}`,
          scrub: true,
          pin: true,
          immediateRender: false,
          anticipatePin: true,
          snap: {
            snapTo: 0.5,
            duration: { min: 0.1, max: 0.3 },
            ease: 'power1.inOut',
          },
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
        .to(txtHero.value, {
          scale: 75,
          rotate: '-1deg',
          duration: 0.15,
          opacity: 0,
          ease: 'power1.inOut',
        })
        .from(
          bgGradient.value,
          { opacity: 0, duration: 0.25, ease: 'power1.in' },
          '>'
        )
        .to(
          txtHero.value,
          { opacity: 0, duration: 0.15, ease: 'power1.inOut' },
          '>'
        )
        .to(txtHero.value, { display: 'none', scale: 1 }, '>')
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
  ctx?.revert();
  firstAnimationPlayed = false;
  if (scrollLoop) scrollLoop.kill();

  // Remove all GSAP inline styles from *everything* in this component
  if (homeContainer.value) {
    gsap.set(homeContainer.value.querySelectorAll('*'), { clearProps: 'all' });
  }
});
</script>

<template>
  <div ref="homeContainer">
    <section class="hero-home" ref="hero">
      <video
        class="bg-video"
        src="@/assets/img/1037517047-preview.mp4"
        loop
        muted
        autoplay
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

      <div class="bg-gradient" ref="bgGradient">
        <video class="other-video" autoplay muted loop ref="otherVideo">
          <source src="@/assets/img/1037517047-preview.mp4" type="video/mp4" />
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
                    Handcrafted leather, die cuts, debossing—this Pristine Water
                    brochure has all the bells & whistles.
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
                    A national Masquerade Parade,a custom float, and one big
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
              <Navigation />
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
            View<br />All<br />Work
            <img src="@/assets/img/icon-arrow-right-gradient.svg" alt="" />
          </router-link>

          <a href="mailto:jason@jasonbellinger.com" class="linkup">
            let's link up!
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
  height: 100vh;
  position: relative;
  overflow: hidden;

  .txt-hero {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  #inspire,
  #engage,
  #delight {
    font-family: 'DM Serif Display', serif;
    font-size: 180.23px;
  }

  #engage {
    transform: translateY(-30px);
  }

  #inspire {
    transform: translateY(110px) translateX(140px);
  }

  #delight {
    transform: translateY(245px) translateX(-60px);
  }

  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -100;
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
  }
}

.bg-gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    max-width: 900px;
  }

  p,
  h3 {
    color: $white;
    max-width: 1300px;
    margin: 0 auto;
  }

  .callout {
    @extend h3;
  }

  p {
    font-size: 20px;
    line-height: 40px;
    margin-bottom: 20px;
  }

  .scroll-down {
    position: absolute;
    right: 3vw;
    bottom: 4vw;
  }
}

.project-slider {
  padding-top: 4rem;
  background-color: $white;
}

.slider-wrap {
  position: relative;
  pointer-events: none;

  .carousel {
    position: relative;
    overflow: hidden;
    padding: 5rem 2rem 0 2rem;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .slide-img {
      max-width: 70vw;
      // border: 1px solid red;
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    .slide-img-game-of-thrones,
    .slide-img-versace,
    .slide-img-dos-equis {
      max-width: 50vw;
    }

    :deep(.carousel__slide),
    :deep(.carousel__track),
    :deep(.carousel__viewport) {
      touch-action: pan-y !important;
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

:deep(.carousel__next),
:deep(.carousel__prev) {
  pointer-events: auto !important;
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
}

.txt-passion {
  top: 6vw;
  left: 2%;
  z-index: 1;
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
}

.cta-blocks {
  background: linear-gradient(180deg, $white 80px, $black 80px);
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
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 5px;
      color: $babyBlue;
    }

    figure {
      margin: 0;
    }

    blockquote {
      font-size: 56px;
      line-height: 68px;
      color: $white;
      font-family: $fontHeadline;
      margin: 0 0 20px 0;
      &:before,
      &:after {
        font-size: 160px;
        line-height: 1;
        position: absolute;
      }
      &:before {
        content: '“';
        left: 10px;
        top: 70px;
      }
      &:after {
        content: '”';
      }
    }

    figcaption {
      font-size: 24px;
    }
  }

  .quote,
  .about-jason {
    background: linear-gradient(66.06deg, #5600e8 34.63%, #22d9f1 98.74%);
  }

  .view-work {
    grid-column: span 3;
    font-size: 70px;
    font-weight: 100;
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
    img {
      max-width: 260px;
    }
  }
  .linkup,
  .about-jason {
    grid-column: span 5;
    font-family: $fontHeadline;
    font-size: 130px;
    line-height: 110px;
    font-weight: 700;
  }
  .linkup {
    img {
      position: absolute;
      bottom: 21px;
      right: 15px;
      width: 30px;
    }
  }
}
</style>
