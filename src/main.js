import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import Vue Router components
import Home from './views/Home.vue'; // Import your view components
import Work from './views/Work.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

import '../styles/main.scss';

// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

// Create a router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Create the Vue app instance with the router
const app = createApp(App);
app.use(router); // Use Vue Router in the app instance
app.mount('#app'); // Mount the app to the DOM
