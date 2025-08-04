<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

gsap.registerPlugin(ScrollTrigger)

const hero = ref(null)
const txtHero = ref(null)
const bgGradient = ref(null)

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: false,
  gap: 20,
  snapAlign: 'start',
  transition: 500
}

onMounted(() => {
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
  })

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
    .to('.bg-gradient p', {
      y: -100,
      opacity: 0
    })
})

onUnmounted(() => {

  const video = document.querySelector('.bg-video')
  if (video) {
    video.playbackRate = 2.0 // 🔁 change to desired speed (e.g., 2.0 for 2x)
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
          <text id="react" dominant-baseline="central" x="50%" y="30%" text-anchor="middle">react</text>
        </mask>

        <rect width="100%" height="100%" id="mask-bg"></rect>
      </svg>

      <div class="bg-gradient" ref="bgGradient">
        <video class="other-video" autoplay muted loop>
          <source src="@/assets/img/1037517047-preview.mp4" type="video/mp4">
        </video>
        <div class="gradient-text">
          <p>Design is not just my profession; it's my passion, my very essence. I live and breathe design, and it permeates every aspect of my life. My mind constantly wanders, exploring new ideas, concepts, and possibilities. I find myself unable to turn my brain off, always seeking inspiration from the world around me. As an award-winning designer, I've had the privilege of working for top agencies across New York, where I've crafted everything from sleek websites to captivating campaigns to all immersive experiential events, aiming to engage, inspire, and react.</p>
          <p class="callout">Design isn't just what I do—it's who I am, and I pour my heart and soul into every project I undertake.</p>
        </div>
      </div>
    </section>
    <section class="project-slider">
      <div class="container">
        <div class="slider-wrap">
         
          <img src="@/assets/img/txt-passion.svg" alt="Passion" class="txt-passion">
          <img src="@/assets/img/txt-projects.svg" alt="Projects" class="txt-projects">
          <Carousel v-bind="carouselConfig">
             
            <Slide>
              <div class="slide">
                
                <!-- <p>Handcrafted leather, die cuts, debossing—this Pristine Water brochure has all the bells & whistles. Oh, and it won a Graphic Design USA Award!</p> -->
                <!-- <img src="@/assets/img/home-elit-brochure-desktop-2x.png" alt="" class="slide-1-img"> -->
                                 <img src="@/assets/img//home-versace-desktop-2x.png" alt="" class="slide-2-img">

                <!-- <p>A showcase of my most impactful and unforgettable design and project accomplishments amassed throughout my career.</p> -->
                
              </div>
            </Slide>
          
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
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
}


#inspire, #engage, #react {
  font-family: "DM Serif Display", serif;
  font-size: 180.23px;
}

#inspire {
  transform: translateY(140px)translateX(140px);
}

#react {
  transform: translateY(240px)translateX(-117px);
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
  mask:url("#mask");
}

.other-video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -100;
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


  p, h3 {
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

.slider-wrap {
  border: 2px solid red;
  position: relative;

  .carousel {
   height: 100vh;
   z-index: 1;
  }
  .carousel__slide {
    align-items: start;
  }
}

.txt-passion {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 780px;
    z-index: 0;
  }
  .txt-projects {
    position: absolute;
    bottom: 10vw;
    right: 0;
    width: 100%;
    max-width: 780px;
    z-index: 2;
  }
  .slide-1-img {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 1100px;
    z-index: 1;
  }
  .slide-2-img {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 900px;
    z-index: 1;
  }

</style>