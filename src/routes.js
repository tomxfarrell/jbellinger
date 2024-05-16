// routes.js
import Home from './views/Home.vue';
import Work from './views/Work.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

// Define your routes
export const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];
