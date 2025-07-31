<script setup>
import logoHeader from '@/assets/img/logo-black.svg';
import linkedIn from '@/assets/img/icon-linkedin-2x.png';

import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

const lines = [
  'VP.ACD',
  'Design',
  'UI',
  'Experiential'
];


const container = ref(null)
const viewport = ref(null)

onMounted(async () => {
  await nextTick()

  const lineHeight = container.value.clientHeight
  const totalLines = lines.length - 1

  // Position viewport initially so first line is visible
  gsap.set(viewport.value, { y: 0 })

  // Timeline for rolodex animation (slide lines up)
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 })

  for (let i = 1; i <= totalLines; i++) {
    tl.to(viewport.value, {
      y: -lineHeight * i,
      duration: 1.2,
      ease: 'power2.inOut',
      delay: 3
    })
  }

  // Reset position smoothly back to start (to loop)
  tl.to(viewport.value, {
    y: 0,
    duration: 1.2,
    ease: 'power2.inOut',
    delay: 3
  })
})

import ModalContact from '@/components/ModalContact.vue'

const showModal = ref(false)

</script>

<template>
  <div>
    <div id="main-navigation" ref="nav">
      <div class="container">
        <div class="main-logo">
          <router-link to="/">
            <div class="logo-animation">
              <img :src="logoHeader" alt="Bellinger logo" />

              <div class="rolodex-container" ref="container">
                <div class="rolodex-viewport" ref="viewport">
                  <div v-for="(line, index) in lines" :key="index" class="rolodex-line">
                    {{ line }}
                  </div>
                </div>
              </div>

            </div>
          </router-link>
        </div>
        <nav>
          <ul>
            <li class="link-work"><router-link to="/work"
                :class="{ 'router-link-active': $route.path.startsWith('/work') }">
                <div class="nav-link-text">Work</div>
                <div class="nav-link-text-reveal" aria-hidden="true">Work</div>
              </router-link></li>
            <li class="link-about"><router-link to="/about">
                <div class="nav-link-text">About/Resume</div>
                <div class="nav-link-text-reveal" aria-hidden="true">About/Resume</div>
              </router-link></li>
            <li class="link-contact"><a href="#" @click.prevent="showModal = true">
                <div class="nav-link-text">Contact</div>
                <div class="nav-link-text-reveal" aria-hidden="true">Contact</div>
              </a></li>
            <li><a href="http://linkedin.com/in/jasonbellinger" target="_blank" class="linkedin"><img :src="linkedIn"
                  alt="Linkedin Logo" class="linkedin-icon"></a></li>
          </ul>
        </nav>
      </div>

    </div>

    <ModalContact :showModal="showModal" @close="showModal = false" />

  </div>
</template>

<style lang="scss">
#main-navigation {
  background-color: rgba(255, 255, 255, 0.8);
  /* light frosted background */
  backdrop-filter: blur(20px);
  /* key to the glass effect */
  -webkit-backdrop-filter: blur(20px);
  /* Safari support */

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  /* subtle border */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  /* optional soft shadow */
  transition: background-color 0.2s ease;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;

  .container {

    // max-width: $desktopLG;
    max-width: 1400px;
    display: flex;

    justify-content: space-between;
    align-items: center;
  }
}

.main-logo {
  color: $white;

  a {
    color: $black;
    text-decoration: none;
    ;
  }

  img {
    width: auto;
    height: 18px;
  }
}

.logo-animation {
  display: flex;
  align-items: baseline;
  gap: 10px;
  width: 100%;
}

.rolodex-container {
  width: 100%;
  height: 20px;
  /* height of one line */
  overflow: hidden;
  position: relative;
}

.rolodex-viewport {
  display: flex;
  flex-direction: column;
}

.rolodex-line {
  height: 20px;
  line-height: 20px;
  user-select: none;
  font-size: 12px;
  font-weight: bold;
}

nav {
  padding: 20px;
  text-align: center;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 13px 0 0 0;
    margin: 0;

    li {
      overflow: hidden;
      position: relative;
      padding-bottom: 10px;

      a {
        color: $black;
        font-size: 14px;
        line-height: 21px;
        font-weight: 700;
        text-decoration: none;

        &:hover {
          .nav-link-text {
            transform: translateY(-100%);
          }

          .nav-link-text-reveal {
            transform: translateY(-100%);
            color: $babyBlue;
            padding-bottom: 10px;
          }
        }

        &:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 3px;
          background: rgb(172, 9, 236);
          background: linear-gradient(90deg, rgba(172, 9, 236, 1) 0%, rgba(65, 134, 241, 1) 50%, rgba(0, 216, 255, 1) 100%);
          transition: 1s all .3s ease;
        }

        &.router-link-active {
          &:after {
            width: 100%;
          }

        }
      }
    }

    .nav-link-text-reveal {
      position: absolute;
      z-index: 999;
      top: 100%;
      left: 0;
      color: $white;
    }

    .nav-link-text,
    .nav-link-text-reveal {
      transition: all .15s linear .15s;
    }
  }

  .linkedin {
    transition: all .2s ease;

    img {
      transition: all .2s ease;
      transform: rotate(0);
    }

    &:hover {
      opacity: .8;

      img {
        transform: rotate(360deg);
      }
    }
  }

  .linkedin-icon {
    max-width: 40px;
  }
}

.active-main-nav {
  background-color: red !important;
}

.dark {
  background-color: $black;
}

.light {
  background-color: $white;
}
</style>