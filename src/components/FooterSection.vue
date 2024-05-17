<template>
  <footer>
    <div class="container">
      <img src="../assets/logo-footer-white.svg" alt="JBellinger logo" class="logo-footer">
      <div class="row">
        <div class="col footer-info">
          <ul>
            <li><strong>Jason (JB) Bellinger</strong></li>
            <li>VP, Associate Creative Director</li>
            <li>Design + UI + Experiential</li>
          </ul>
        </div>
        <div class="col footer-contact">
          <ul>
            <li><a href="tel:9174946885">917.494.6885</a></li>
            <li><a href="mailto:jason@jbellinger.com">jason@jbellinger.com</a></li>
            <li><span>New York/New Jersey</span></li>
          </ul>
        </div>
        <div class="col footer-links">
          <ul>
            <li><a href="#">Work</a></li>
            <li><a href="#">About & Resume</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col social">
          <a href="http://linkedin.com/in/jasonbellinger" target="_blank"><img src="../assets/icon-linkedin-white-2x.png" alt="Linkedin"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style lang="scss" scoped>
@import '../../styles/_footer-section.scss';
</style>