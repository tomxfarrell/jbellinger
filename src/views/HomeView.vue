<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

gsap.registerPlugin(ScrollTrigger)

const hero = ref(null)
const txtHero = ref(null)
const bgGradient = ref(null)

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 10000,
  transition: 500,
}

let firstAnimationPlayed = false // ✅ track if first animation happened

function fadeOutText() {
  if (!firstAnimationPlayed) return // don't fade if first animation hasn't run yet
  const active = document.querySelector('.carousel__slide--active')
  if (!active) return
  const textEls = active.querySelectorAll('.text-1, .text-2')
  gsap.to(textEls, {
    opacity: 0,
    duration: 0.1,
    ease: 'power1.out'
  })
}

function fadeInText() {
  nextTick(() => {
    const active = document.querySelector('.carousel__slide--active')
    if (!active) return
    const textEls = active.querySelectorAll('.text-1, .text-2')
    gsap.fromTo(
      textEls,
      { opacity: 0, y: 20},
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.7,
        ease: "sine.out",
        // stagger: 0.1
      }
    )
  })
}

function fadeInImg() {
  nextTick(() => {
    const active = document.querySelector('.carousel__slide--active')
    if (!active) return
    const imgEl = active.querySelector('.slide-img')
    gsap.fromTo(
      imgEl,
      { opacity: 0, y: -50},
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.7,
        ease: "sine.out",
        // stagger: 0.1
      }
    )
  })
}

function fadeOutImg() {
  if (!firstAnimationPlayed) return // don't fade if first animation hasn't run yet
  const active = document.querySelector('.carousel__slide--active')
  if (!active) return
  const imgEl = active.querySelector('.slide-img')
  gsap.to(imgEl, {
    opacity: 0,
    duration: 0.1,
    ease: 'power1.out'
  })
} 

function animateText() {
  nextTick(() => {
    const active = document.querySelector('.carousel__slide--active')
    if (!active) return
    gsap.fromTo(
      '.txt-passion',
      { opacity: 0, x: -50},
      {
        opacity: 1,
        x: 0,
        delay: 0.3,
        duration: 0.7,
        ease: "sine.out",
        // stagger: 0.1
      }
    )
    gsap.fromTo(
      '.txt-projects',
      { opacity: 0, x: 50},
      {
        opacity: 1,
        x: 0,
        delay: 0.3,
        duration: 0.7,
        ease: "sine.out",
        // stagger: 0.1
      }
    )
  })
} 

function onSlideStart() {
  fadeOutText()
  fadeOutImg()
}

function onSlideEnd() {
  fadeInText()
  fadeInImg()
}


onMounted(() => {
  nextTick(() => {
    ScrollTrigger.create({
    trigger: '.project-slider',
    start: 'top center',
    once: true,
    onEnter: () => {
      animateText()
      fadeInText()
      fadeInImg()
      firstAnimationPlayed = true // ✅ allow slide animations after this
    }
  })
  })
  // Your existing ScrollTrigger for the main timeline
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: hero.value,
      start: 'top +=50',
      end: `+=${hero.value.clientHeight}`,
      markers: false,
      scrub: true,
      pin: true,
      immediateRender: false,
      anticipatePin: true,
      snap: 0.55
    }
  });

  timeline
    .to(txtHero.value, {
      scale: 75,
      rotate: '-1deg',
      duration: 0.15,
      opacity: 0,
      ease: 'power1.inOut'
    })
    .from(
      bgGradient.value,
      {
        opacity: 0,
        duration: 0.25,
        ease: 'power1.in'
      },
      '>'
    )
    .to(
      txtHero.value,
      {
        opacity: 0,
        duration: 0.15,
        ease: 'power1.inOut'
      },
      '>'
    )
    .to(
      txtHero.value,
      {
        display: 'none',
        scale: 1
      },
      '>'
    )
    .to(bgGradient.value, {
      y: -100,
      opacity: 0
    });
});

onUnmounted(() => {

  const video = document.querySelector('.bg-video')
  if (video) {
    video.playbackRate = 3.0 // 🔁 change to desired speed (e.g., 2.0 for 2x)
  }

  

  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>




<template>
  <section class="hero-home" ref="hero">
    <video class="bg-video" src="@/assets/img/1037517047-preview.mp4" loop muted autoplay></video>

    <svg class="txt-hero" ref="txtHero">
      <mask id="mask">
        <rect fill="white" width="100%" height="100%"></rect>
        <text id="engage" dominant-baseline="central" x="50%" y="30%" text-anchor="middle">engage</text>
        <text id="inspire" dominant-baseline="central" x="50%" y="30%" text-anchor="middle">inspire</text>
        <text id="delight" dominant-baseline="central" x="50%" y="30%" text-anchor="middle">delight</text>
      </mask>

      <rect width="100%" height="100%" id="mask-bg"></rect>
    </svg>

    <div class="bg-gradient" ref="bgGradient">
      <video class="other-video" autoplay muted loop>
        <source src="@/assets/img/1037517047-preview.mp4" type="video/mp4">
      </video>
      <div class="container">
        <p>Design is not just my profession; it's my passion, my very essence. I live and breathe design, and it
          permeates every aspect of my life. My mind constantly wanders, exploring new ideas, concepts, and
          possibilities. I find myself unable to turn my brain off, always seeking inspiration from the world around me.
          As an award-winning designer, I've had the privilege of working for top agencies across New York, where I've
          crafted everything from sleek websites to captivating campaigns to all immersive experiential events, aiming
          to engage, inspire, and react.</p>
        <p class="callout">Design isn't just what I do—it's who I am, and I pour my heart and soul into every project I
          undertake.</p>
      </div>
    </div>
  </section>
  <section class="project-slider">
    <div class="container">
      <div class="slider-wrap">

        <span class="txt-passion">Passion</span>

        <Carousel v-bind="carouselConfig" @slide-start="onSlideStart" @slide-end="onSlideEnd">
          <Slide>
            <div class="slide">
              <div class="text-1">
                <img src="@/assets/img/logo-elit-2x.png" alt="" class="slide-logo-elit">
                <p>Handcrafted leather, die cuts, debossing—this Pristine Water brochure has all the
                  bells & whistles. <strong>Oh, and it won a Graphic Design USA Award!</strong></p>
              </div>
              <img src="@/assets/img/home-elit-brochure-desktop-2x.png" alt="" class="slide-img">
              <div class="text-2 with-plus">
                <p><strong>Featured Work</strong></p>
                <p>A showcase of my most impactful and unforgettable design and project accomplishments
                amassed throughout my career.</p>
              </div>

            </div>
          </Slide>
          <Slide>
            <div class="slide">

              <div class="text-1">
                <img src="@/assets/img/logo-versace-2x.png" alt="" class="slide-logo-versace">
                <p>Sleek websites, scroll-stopping socials, and digital campaigns that truly delivered
                results.</p>
              </div>
              <img src="@/assets/img/home-versace-desktop-2x.png" alt="" class="slide-img slide-img-versace">
              <div class="text-2 with-plus">
                <p><strong>Featured Work</strong></p>
                <p>A showcase of my most impactful and unforgettable design and project accomplishments
                amassed throughout my career.</p>
                </div>

            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>

        <span class="txt-projects">Projects</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
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
    font-family: "DM Serif Display", serif;
    font-size: 180.23px;
  }

  #inspire {
    transform: translateY(140px)translateX(140px);
  }

  #delight {
    transform: translateY(275px)translateX(-60px);
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
    mask: url("#mask");
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
    margin-bottom: 20px;
  }

}

.project-slider {
  padding-top: 4rem;
}

.slider-wrap {
  // border: 2px solid red;
  position: relative;

  .carousel {
    position: relative;
    overflow: hidden;
    padding: 5rem 2rem 0 2rem;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    .slide-img {
      max-width: 70vw;
      // border: 1px solid red;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    .slide-img-versace {
      max-width: 50vw;
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
  }

  .carousel__pagination-button--active {
    background-color: $purple;
  }

  
.text-1,
.text-2,
.slide-img {
  opacity: 0;
}
  .text-1 {
    position: absolute;
    top: 8vw;
    left: 0;
    width: 20vw;
  }

  .text-2 {
    position: absolute;
    top: 2vw;
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
  .slide-logo-versace {
    width: 120px;
    margin-bottom: 20px;
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
}

.txt-passion {
  top: 0;
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


</style>