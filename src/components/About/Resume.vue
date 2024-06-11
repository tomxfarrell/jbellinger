<template>
  <section class="resume">
    <div class="container">
      <div class="section-heading dark mb-40">
        <p>Resume</p>
      </div>

      <Accordion :items="accordionItems" />

    </div>
  </section>
</template>

<script>
import Accordion from '@/components/Accordion.vue';


export default {
  components: {
    Accordion
  },
  data() {
    return {
      accordionItems: [
        {
          title: 'Achievements & Accomplishments',
          content:
          `
          <ul>
            <li><span>Achieved an Ogilvy Health Team Impact Award in December 2023, a distinguished internal recognition program where colleagues nominate individuals or teams for their exceptional work ethic and contributions</span></li>
            <li><span>Successfully introduced Figma to the Ogilvy Health team, resulting in a more streamlined process among a cross-functional team of 30+ members consisting of UX, Creative, Copy, Production, and Development. Conducted bootcamp sessions to facilitate the adoption and proficiency of the tool</span></li>
            <li><span>Over twenty five awards won including a recent Reggie Award, Communication Arts and GD USA</span></li>
            <li><span>Featured articles/designs have appeared in the New York Times, The Real Deal magazine, Adrants.com and Curbed.com</span></li>
          </ul>
          `
        },
        {
          title: 'Profesional Experience',
          content: 
          `
          <div class="job-title">Vice President, Associate Creative Director / 2022 - Present</div>
          <div class="job-info">Ogilvy Health - Parsippany, NJ / Remote</div>
          <ul>
            <li><span>Recruited to spearhead, oversee and manage all digital design experiences, including responsive website designs, email campaigns, banners, and social projects</span></li>
            <li><span>Optimized the design process by creating standardized digital templates and components, streamlining workflows and boosting agency-wide productivity</span></li>
            <li><span>Established digital and web best practices to ensure that the creative team produces high-quality deliverables that are on-brand, on-time, on-budget, and pass ADA compliances</span></li>
            <li><span>Played a crucial role in the successful launch of a global pharmaceutical drug, contributing to increased sales and brand recognition</span></li>
          </ul>

          <div class="job-title">Associate Creative Director / 2014 - 2022</div>
          <div class="job-info">Real Chemistry - New York, NY / Remote</div>
          <ul>
            <li><span>Conceptualized and designed compelling, unique digital experiences for various national and global pharmaceutical clients, including web, mobile, email campaigns, banner ads, storyboards, and more</span></li>
            <li><span>Completed multiple projects under allocated creative time, leading to increased profitability per project</span></li>
            <li><span>Led the creative direction and owned the aesthetic of various website designs, brands, and new business pitches</span></li>
            <li><span>Ensured the delivery of best-in-class digital experiences that exceeded client expectations</span></li>
            <li><span>Collaborated effectively with cross-functional teams, including Strategy, Web Developers, UX, Producers, Motion Graphic, Account Executives, and Social teams, to create and produce innovative creative solutions across all channels</span></li>
          </ul>

          <div class="job-title">Senior Experiential Designer / 2012 - 2014</div>
          <div class="job-info">Relevent Partners - New York, NY</div>
          <ul>
            <li><span>Conceptualized, designed, and executed highly engaging and memorable experiential marketing campaigns that successfully brought brands to life, connecting consumers with some of the top brands in the world through unique interactive experiences, unforgettable brand engagements, sponsored events and concerts, stunts, and pop-up shops</span></li>
            <li><span>Served as a creative lead for significant new business initiatives from ideation through execution, design and production</span></li>
            <li><span>Oversaw the creation of creative assets, including renderings, layouts, schematics, and technical specifications, and ensured that all materials were ready for fabrication and installation</span></li>
            <li><span>Led a team of designers, producers, and creative collaborators to ideate, develop, and produce    activations that drew in crowds and generated buzz</span></li>
            <li><span>Worked closely with account teams and clients to understand their objectives, brand messaging,    and target audience, and translated those insights into impactful experiential concepts</span></li>
          </ul>

          <div class="job-title">Freelance Associate Creative Director / 2008 - Present</div>
          <div class="job-info">Anomaly, Landor Associates, Ogilvy, Saatchi X, Iris Worldwide, Mirrorball, Global Hue, Porter Novelli, Public Label,    The A Team, NYL Media, iGo Marketing, Genuine Overkill, Stockeld Creamery</div>
          <ul>
            <li><span>Played a pivotal role in securing the Smirnoff Vodka account against competing agencies with a winning presentation and creative</span></li>
            <li><span>Art directed and designed numerous successful local, regional, and national campaigns across various media and for diverse clients</span></li>
            <li><span>Developed and designed compelling concepts for aggressive new business initiatives</span></li>
            <li><span>Maintained accurate creative scope, schedules, and budgets while staying up-to-date on  project deliverables</span></li>
          </ul>
          `
        },
        {
          title: 'Proficient/Specialties',
          content: `
          <ul>
            <li><span>Possess expert knowledge of both print and digital/web design, including best practices and the development of ADA compliant websites</span></li>
            <li><span>Demonstrated mastery of a variety of creative tools, including Figma, Prototyping, XD, Sketch, Photoshop, Illustrator, and InDesign</span></li>
            <li><span>Extensive experience across a diverse range of industries, from healthcare and pharmaceutical experential and events, spirits, real estate, automotive, beauty and consumer products. Established reputation for UX leadership on significant healthcare initiatives</span></li>
            <li><span>Proficient in Agile and Lean UX methodologies to drive efficiency and flexibility in project execution</span></li>
            <li><span>Leverage expert knowledge of traditional and non-traditional advertising to deliver innovative and impactful design solutions across multiple mediums</span></li>
            <li><span>Consistently produce clean, on trend, eye-catching, and effective design solutions</span></li>
            <li><span>Proven track record of leading teams and nurturing the careers of emerging design professionals</span></li>
            <li><span>Demonstrated ownership and guidance in steering both individual and team-wide design processes</span></li>
          </ul>
          `
        },
        {
          title: 'Education',
          content: `
          <ul>
            <li><span><strong>Nobel Desktop</strong> / Figma Bootcamp</span></li>
            <li><span><strong>Maven</strong> / Midjourney for Creatives</span></li>
            <li><span><strong>Parsons School of Design</strong> / Continuing Education, Interactive Design</span></li>
            <li><span><strong>Mercer County Community College </strong> / Advertising and Design</span></li>
          </ul>
          `
        },
        // Add more items as needed
      ]
    };
  },
  name: 'Resume',
};
</script>

<style lang="scss" scoped>
  @import '@/styles/_resume.scss';
</style>