<script setup>
import logoHeader from '@/assets/img/logo-black.svg';
import linkedIn from '@/assets/img/icon-linkedin-2x.png';
import linkedInMobile from '@/assets/img/icon-linkedin-white-txt-2x.png';

import { ref, onMounted, nextTick, watch } from 'vue';
import { gsap } from 'gsap';

const lines = ['VP.ACD', 'Design', 'UI', 'Experiential'];

const container = ref(null);
const viewport = ref(null);
const lineItem = ref(null);

onMounted(async () => {
  await nextTick();

  // Wait for mobile WebKit custom fonts to finish rendering before measuring
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  // Measure a single line item height instead of full container height
  const lineHeight = lineItem.value ? lineItem.value.offsetHeight : 20;
  const totalLines = lines.length - 1;

  // Position viewport initially so first line is visible
  gsap.set(viewport.value, { y: 0 });

  // Timeline for rolodex animation (slide lines up)
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  for (let i = 1; i <= totalLines; i++) {
    tl.to(viewport.value, {
      y: -lineHeight * i,
      duration: 1.2,
      ease: 'power2.inOut',
      delay: 3,
    });
  }

  // Reset position smoothly back to start (to loop)
  tl.to(viewport.value, {
    y: 0,
    duration: 1.2,
    ease: 'power2.inOut',
    delay: 3,
  });
});

import ModalContact from '@/components/ModalContact.vue';

const showModal = ref(false);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watch(isMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
</script>

<template>
  <div>
    <div id="main-navigation" ref="nav">
      <div
        class="mobile-menu-overlay"
        :class="{ 'is-open': isMenuOpen }"
        @click="toggleMenu"
      ></div>
      <div class="container">
        <div class="main-logo">
          <router-link to="/">
            <div class="logo-animation">
              <img :src="logoHeader" alt="Bellinger logo" />

              <div class="rolodex-container" ref="container">
                <div class="rolodex-viewport" ref="viewport">
                  <div
                    v-for="(line, index) in lines"
                    :key="index"
                    :ref="
                      (el) => {
                        if (index === 0) lineItem = el;
                      }
                    "
                    class="rolodex-line"
                  >
                    {{ line }}
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <nav :class="{ 'mobile-open': isMenuOpen }">
          <ul>
            <li class="link-work">
              <router-link
                to="/work"
                :class="{
                  'router-link-active': $route.path.startsWith('/work'),
                }"
                @click="isMenuOpen = false"
              >
                <div class="nav-link-text">Work</div>
                <div class="nav-link-text-reveal" aria-hidden="true">Work</div>
              </router-link>
            </li>
            <li class="link-about">
              <router-link to="/about" @click="isMenuOpen = false">
                <div class="nav-link-text">About/<span>Resume</span></div>
                <div class="nav-link-text-reveal" aria-hidden="true">
                  About/<span>Resume</span>
                </div>
              </router-link>
            </li>
            <li class="link-contact">
              <a
                href="#"
                @click.prevent="
                  showModal = true;
                  isMenuOpen = false;
                "
              >
                <div class="nav-link-text">Contact</div>
                <div class="nav-link-text-reveal" aria-hidden="true">
                  Contact
                </div>
              </a>
            </li>
            <li class="desktop-only">
              <a
                href="http://linkedin.com/in/jasonbellinger"
                target="_blank"
                class="linkedin"
                ><img :src="linkedIn" alt="Linkedin Logo" class="linkedin-icon"
              /></a>
            </li>
            <li class="mobile-only linkedin-mobile">
              <a
                href="http://linkedin.com/in/jasonbellinger"
                target="_blank"
                class="linkedin"
                @click="isMenuOpen = false"
                ><img
                  :src="linkedInMobile"
                  alt="Linkedin Logo"
                  class="linkedin-icon"
              /></a>
              Let's Link Up!
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="mobile-hamburger-container" :class="{ 'is-open': isMenuOpen }">
      <button
        class="mobile-hamburger"
        @click="toggleMenu"
        :class="{ 'is-open': isMenuOpen }"
      >
        <div class="hamburger-lines">
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
        </div>
        <div class="hamburger-text">{{ isMenuOpen ? 'Close' : 'Menu' }}</div>
      </button>
    </div>

    <ModalContact :showModal="showModal" @close="showModal = false" />
  </div>
</template>

<style lang="scss">
#main-navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.8); /* light frosted background */
  backdrop-filter: blur(20px); /* key to the glass effect */
  -webkit-backdrop-filter: blur(20px); /* Safari support */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* subtle border */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); /* optional soft shadow */
  transition: background-color 0.2s ease;

  .mobile-menu-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    @media (max-width: $breakpoint-sm) {
      display: block;

      &.is-open {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  .container {
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: $breakpoint-sm) {
      justify-content: center;
    }
  }

  .main-logo {
    color: $white;

    a {
      color: $black;
      text-decoration: none;
    }

    img {
      width: auto;
      height: 18px;
    }

    @media (max-width: $breakpoint-sm) {
      padding-top: 20px;
    }

    .logo-animation {
      display: flex;
      align-items: baseline;
      gap: 10px;
      width: 100%;

      @media (max-width: $breakpoint-sm) {
        flex-direction: column;
        text-align: center;
        gap: 5px;
      }

      .rolodex-container {
        width: 100%;
        height: 20px; /* height of one line */
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
    }
  }

  nav {
    padding: 5px 20px;
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
              color: $purple;
              padding-bottom: 10px;
            }
          }

          &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0%;
            height: 3px;
            background: rgb(172, 9, 236);
            background: linear-gradient(
              90deg,
              rgba(172, 9, 236, 1) 0%,
              rgba(65, 134, 241, 1) 50%,
              rgba(0, 216, 255, 1) 100%
            );
            transition: 1s all 0.3s ease;
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
        transition: all 0.15s linear 0.15s;
      }
    }

    .linkedin {
      transition: all 0.2s ease;

      img {
        transition: all 0.2s ease;
        transform: rotate(0);
      }

      &:hover {
        opacity: 0.8;

        img {
          transform: rotate(360deg);
        }
      }
    }

    .linkedin-icon {
      max-width: 40px;
    }

    @media (max-width: $breakpoint-sm) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.95);
      flex-direction: column;
      justify-content: center;
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      padding: 70px 0 40px 0;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
      z-index: 100;

      &.mobile-open {
        transform: translateY(25vh);
      }

      ul {
        flex-direction: column;
        gap: 30px;
        padding: 0;

        li {
          a {
            color: $white;
            font-size: 48px;
            line-height: 1;

            .nav-link-text-reveal {
              display: none;
            }

            &:hover .nav-link-text {
              transform: none;
              color: $babyBlue;
            }
          }
        }

        .linkedin {
          text-align: center;
          display: block;
        }

        .linkedin-mobile {
          font-size: 14px;
          font-weight: 700;
          color: $white;
          text-align: center;
        }

        .linkedin-icon {
          filter: brightness(0) invert(1);
          max-width: 26px;
          margin-bottom: 10px;
        }
      }

      .nav-link-text,
      .nav-link-text-reveal {
        span {
          display: block;
        }
      }
    }
    @media (max-width: $breakpoint-xs) {
      &.mobile-open {
        transform: translateY(12vh);
      }
    }
  }
}

.mobile-hamburger-container {
  position: fixed;
  bottom: -2px;
  z-index: 10000;
  width: 100%;
  display: none;

  .hamburger-text {
    font-size: 9px;
    color: $black;
    text-transform: lowercase;
    font-weight: 700;
    text-align: center;
    margin: 0 auto;
    transition: color 0.3s ease;
  }

  &.is-open {
    .hamburger-text {
      color: $white;
    }

    .mobile-hamburger {
      background-color: $black;
      border-color: $white;
      .hamburger-line {
        background-color: $white;
      }
    }
  }

  .mobile-hamburger {
    display: none;
    margin: 0 auto;
    width: 50px;
    height: 50px;
    background-color: rgba($white, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid #bfbfbf;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    transition: opacity 0.3s ease;

    .hamburger-lines {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 4px;
    }

    .hamburger-line {
      width: 24px;
      height: 2px;
      background-color: $black;
      display: block;
      transition: all 0.3s ease;
    }

    &.is-open {
      .hamburger-line:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
      }

      .hamburger-line:nth-child(2) {
        opacity: 0;
      }

      .hamburger-line:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
      }
    }

    @media (max-width: $breakpoint-sm) {
      display: flex;
    }
  }

  @media (max-width: $breakpoint-sm) {
    display: block;
    padding: 50px 0 17px;
    pointer-events: none;

    &.is-open {
      background: transparent;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      mask-image: none;
      -webkit-mask-image: none;
    }
  }

  body.footer-visible & {
    .hamburger-text {
      color: $white;
    }
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
