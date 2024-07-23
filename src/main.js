import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './components/pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router';
import About from './components/pages/About.vue';
import Contact from './components/pages/Contact.vue';


const routers = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/About',
        component: About,

    },
    {
        path: '/contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routers,


})

const app = createApp(App);
app.use(router)
app.mount('#app');
