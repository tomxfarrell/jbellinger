<template>
  <div id="main-navigation">
    <div class="container">
      <div class="main-logo">
        <img src="../assets/logo-white.svg" alt="Bellinger logo" />
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/work">Work</router-link></li>
          <li><router-link to="/about">About & Resume</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><a href="#" target="_blank" class="linkedin"><img src="../assets/icon-linkedin-2x.png" alt="Linkedin Logo"
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