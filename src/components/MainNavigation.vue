<template>
  <div id="main-navigation">
    <div class="container">
      <div class="main-logo">
        <router-link to="/">
          <img src="../assets/logo-white.svg" alt="Bellinger logo" />
        </router-link>
      </div>
      <nav>
        <ul>
          <li class="link-work"><router-link to="/work"><div class="nav-link-text">Work</div><div class="nav-link-text-reveal" aria-hidden="true">Work</div></router-link></li>
          <li class="link-about"><router-link to="/about"><div class="nav-link-text">About & Resume</div><div class="nav-link-text-reveal" aria-hidden="true">About & Resume</div></router-link></li>
          <li class="link-contact"><router-link to="/contact"><div class="nav-link-text">Contact</div><div class="nav-link-text-reveal" aria-hidden="true">Contact</div></router-link></li>
          <li><a href="http://linkedin.com/in/jasonbellinger" target="_blank" class="linkedin"><img src="../assets/icon-linkedin-2x.png" alt="Linkedin Logo"
                class="linkedin-icon"></a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainNavigation',
};
</script>

<style lang="scss" scoped>
@import '../../styles/_main-navigation.scss';
</style>