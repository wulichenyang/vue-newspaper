import Vue from 'vue';
import VueRouter from 'vue-router';

import Header from 'components/default/header.js';
import Content from 'components/default/Content.js';

import newspaper from 'components/newspaper/index.vue';

Vue.use(VueRouter);

const routes =  [
  {
    path: '/',
    components: {
      header: Header,
      content: Content
    },
    children: [
      { path: 'theme/:id', name: 'newspaper', component: newspaper }
    ]
  },
];

export default new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});
