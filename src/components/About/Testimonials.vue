<template>
  <section class="testimonials">
    <div class="container">

      <div class="section-heading light mb-40">
        <p>What People Are Saying</p>
      </div>
      <div class="testimonial-blocks">
        <div class="testimonial-block">
          <div class="testimonial-container">
            <p class="testimonial-quote">Damn you’re everywhere JB. I lose track of how many times PM’s have been like “Can I have JB” on calls. YOU’RE SO LOVED!</p>
            <p class="testimonial-name">- Alexandra H., Strategic Account & Project Manager</p>
          </div>
        </div>
        <div class="testimonial-block">
          <div class="testimonial-container">
            <p class="testimonial-quote">Dude - those are stunning! You CRUSHED this! Thank You.</p>
            <p class="testimonial-name">- Stephen P., CEO, Creative Director</p>
          </div>
        </div>
        <div class="testimonial-block">
          <div class="testimonial-container">
            <p class="testimonial-quote">Your expertise in designing especially for digital is unmatched at Real Chemistry.</p>
            <p class="testimonial-name">- Lisa K., Associate Account Director</p>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .testimonials {
    background-color: $white;
    padding: 0 0 110px 0;
    .section-heading {
      padding-left: 110px;
    }
    .container {
      max-width: 1278px;
      margin: 0 auto;
    }
    .testimonial-blocks {
      display: flex;
      gap: 20px;
      position: relative;
      .testimonial-block {
        background-color: $blueGray;
        padding: 30px;
        border-radius: 15px;
        flex: 1;
        display: flex;
        align-items: center;
        box-shadow: 0px 13px 14px -12px rgba(54,57,88,0.8);

        &:first-child {
          &:before {
            content: "“";
            position: absolute;
            font-size: 200px;
            line-height: 0;
            font-family: "DM Serif Display", serif;
            font-weight: 400;
            color: $babyBlue;
            top: 0;
            left: -20px;
          }
        }
        &:last-child {
          &:after {
            content: "”";
            position: absolute;
            font-size: 200px;
            line-height: 0;
            font-family: "DM Serif Display", serif;
            font-weight: 400;
            color: $babyBlue;
            bottom: 0;
            right: 10px;
          }
        }
        p {
          color: $white;
          margin: 0;
        }
        .testimonial-quote {
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .testimonial-name {
          font-size: 14px;
          line-height: 24px;
          font-style: italic;
          font-weight: normal;
        }
      }
    }
  }
</style>