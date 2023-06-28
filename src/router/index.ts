// This file contains the route directory of Application, you can update your routes here.
import { createRouter, createWebHistory } from 'vue-router'
// const Home = require('./../views/HomePage.vue')
import Home from './../views/HomePage.vue'


export default createRouter({
  history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: () => import('./../layouts/default/DefaultLayout.vue'),
        children: [
          {
            path: '',
            name: 'Home',
            component: Home,
          },
        ],
      },
    ]
})
