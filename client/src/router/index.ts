import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/pages/Main.vue';
import PostsPage from '@/pages/PostsPage.vue';
import PostPage from '@/pages/PostPage.vue';
import About from '@/pages/About.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Main,
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsPage,
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: PostPage,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
