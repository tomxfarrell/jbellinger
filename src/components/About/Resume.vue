<template>
  <section class="resume">
    <div class="container">
      <p>resume here</p>

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
            <li>Achieved an Ogilvy Health Team Impact Award in December 2023, a distinguished internal recognition program where colleagues nominate individuals or teams for their exceptional work ethic and contributions</li>
            <li>Successfully introduced Figma to the Ogilvy Health team, resulting in a more streamlined process among a cross-functional team of 30+ members consisting of UX, Creative, Copy, Production, and Development. Conducted bootcamp sessions to facilitate the adoption and proficiency of the tool</li>
            <li>Over twenty five awards won including a recent Reggie Award, Communication Arts and GD USA</li>
            <li>Featured articles/designs have appeared in the New York Times, The Real Deal magazine, Adrants.com and Curbed.com</li>
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
            <li>Recruited to spearhead, oversee and manage all digital design experiences, including responsive website designs, email campaigns, banners, and social projects</li>
            <li>Optimized the design process by creating standardized digital templates and components, streamlining workflows and boosting agency-wide productivity</li>
            <li>Established digital and web best practices to ensure that the creative team produces high-quality deliverables that are on-brand, on-time, on-budget, and pass ADA compliances</li>
            <li>Played a crucial role in the successful launch of a global pharmaceutical drug, contributing to increased sales and brand recognition</li>
          </ul>
          `
        },
        {
          title: 'Proficient/Specialties',
          content: 'Content for item 3'
        },
        {
          title: 'Education',
          content: 'Content for item 2'
        },
        // Add more items as needed
      ]
    };
  },
  name: 'Resume',
};
</script>

<style lang="scss">
  @import '../../../styles/_resume.scss';
</style>