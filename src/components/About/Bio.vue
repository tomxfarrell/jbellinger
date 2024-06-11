<template>
  <section class="bio">
    <div class="container">
      <div class="section-heading light mb-40">
        <p>My Journey/Bio</p>
      </div>
      <div class="inner-container">
        <p>My career path has varied greatly, which has given me a uniquely wide range of experience in the advertising and design industry. But what I love to do is at the heart of every job: Design. I have the great fortune of loving my profession, and I pride myself on versatility, a strong work ethic, and innovative thinking. I believe my passion for design comes out in every piece of work.</p>
        <div class="row row-stat">
          <div class="col">
            <div class="stat-lg">
              $30M
            </div>
            <div class="stat-desc">Contributed to over<br>
  $30 million in new business wins
          </div></div>
          <div class="col">
            <div class="stat-lg">
              20+
            </div>
            <div class="stat-desc">Over 20 awards won</div>
          </div>
        </div>
        <p>I’ve won numerous awards and designed communications on a local to global scale across all media for some of the top agencies in New York. In addition to generating positive results for clients, I’ve helped win over $30 million in new business, a number that grows every year.</p>
        <p>Due to the diversity of my opportunities, I’ve created a bit of everything, from global campaigns, print ads, billboards and logos, to brochures, websites, events and beyond. Whether it’s for retail, CPG or B2B, I approach each project with three goals for the consumer: capture attention, engage interest; and drive action.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .bio {
    background-color: $white;
    padding: 130px 0;
    .container {
      max-width: 1057px;
      margin: 0 auto;
    }
    .inner-container {
      max-width: 842px;
      margin: 0 auto;
    }
    .row-stat {
      justify-content: center;
      width: 100%;
      margin: 60px 0;
      position: relative;
      .col {
        flex: 1;
        padding: 0 20px;
        text-align: center;
        &:before {
          content: '';
          position: absolute;
          width: 2px;
          height: 100%;
          background-color: $royalBlue;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .stat-lg {
        color: $royalBlue;
        font-size: 72px;
        line-height: normal;
        font-family: "DM Serif Display", serif;
      }
      .stat-desc {
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
      }
    }
  }
</style>