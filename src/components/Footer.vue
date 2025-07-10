<script setup>
import logoFooterWhite from '@/assets/img/logo-footer-white.svg';
import linkedIn from '@/assets/img/icon-linkedin-2x.png';
</script>

<template>
    <footer id="footer">
      <div class="container">
        <img :src="logoFooterWhite" alt="JBellinger logo" class="logo-footer">
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
              <li><a href="/work">Work</a></li>
              <li><a href="#">About & Resume</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col social">
          <span>Let's Connect!</span>
            <a href="http://linkedin.com/in/jasonbellinger" target="_blank"><img :src="linkedIn" alt="Linkedin"></a>
          </div>
        </div>
      </div>
  </footer>
</template>

<style lang="scss">

#footer {
  background-color: $black;
  padding: 70px 0;
  .logo-footer {
    width: 180px;
    margin-bottom: 20px;
  }
  .container {
    // max-width: $desktopLG;
    max-width: 1400px;
  }
  .row {
    align-items: center;
    gap: 2rem;
    border-top: 1px solid $white;

    .col {
      padding: 2rem 2rem 1rem 0;
      &:not(:last-child) {
        border-right: 1px solid $white;
      }
    }
    a, ul {
      color: $white;
      font-size: 16px;
    }
    a {
      text-decoration: none;
    }
    .footer-info strong {
      font-size: 18px;
    }
    .footer-contact {
      li {
        a {
          display: flex;
          align-items: center;
        }
        &:first-child,
        &:nth-child(2),
        &:nth-child(3) {
          :before {
            content: "";
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            display: inline-block;
            width: 19px;
            margin-right: 1em;    
          }
        }
      }
      li:first-child {
        a {
          &:before {
            background-image: url(../assets/icon-phone.svg);
            background-size: 11px 20px;
            height: 20px;
          }
        }
      }
      li:nth-child(2) {
        a {
          &:before {
            background-image: url(../assets/icon-envelope.svg);
            background-size: 19px 13px;
            height: 13px;
          }
        }
      }
      li:nth-child(3) {
        span {
          display: flex;
          align-items: center;
          &:before {
            content: "";
            background-image: url(../assets/icon-pin.svg);
            background-size: 14px 19px;
            height: 19px;
          }
        }
      }
    }
    .footer-links {
      a {
        font-weight: 700;
        transition: all .3s ease;
        &:hover {
          color: $babyBlue;
        }
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 0;
      padding: 0;
    }
    .social {
      margin-left: auto;
      color: $white;
      display: flex;
      align-items: center;
      span {
        margin-right: 18px;
      }
      a {
        transition: all .3s ease;
        &:hover {
          opacity: .75;
        }
      }
      img {
        width: 40px;
      }
    }
  }
}
</style>