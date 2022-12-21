import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../src/page/home.vue'
import Restaurant from '../src/page/Restaurant.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/restaurant', component: Restaurant },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const VueApp = createApp(App)

VueApp.use(router)

VueApp.mount('#app');
