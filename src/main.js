// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createMetaManager } from 'vue-meta'

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes'; // Import routes from routes.js
import '../styles/main.scss';


// Create a router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Create the Vue app instance with the router
const app = createApp(App);
app.use(router);
app.use(createMetaManager());
app.mount('#app');
