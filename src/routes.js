// routes.js
import Home from './views/Home.vue';
import Work from './views/Work.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

// Define your routes
export const routes = [
  { path: '/',
    component: Home,
    meta: {
      title: 'Home Page',
      // Add more metadata as needed
    }
  },
  { path: '/work', component: Work, meta: {
    title: 'Work Page',
    // Add more metadata as needed
  } },
  { path: '/about', component: About, meta: {
    title: 'About Page',
    // Add more metadata as needed
  } },
  { path: '/contact', component: Contact, meta: {
    title: 'Contact Page',
    // Add more metadata as needed
  } }
];
