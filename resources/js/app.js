require('./bootstrap')

import { createApp } from 'vue'
// import * as Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import Index from './components/index'
import Signup from './components/signup'
import Login from './components/login'

const routes = [
    { path: '/',
      component: Login,
      name: 'login'
    },
    { path: '/signup',
      component: Signup,
      ame: 'Signup'
    }
  ]
    
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
createApp(Index).use(router).mount('#app')