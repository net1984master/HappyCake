import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/pages/Main.vue';
import PostsPage from '@/pages/PostsPage.vue';
import PostsPageWithStore from '@/pages/PostsPageWithStore.vue';
import PostPage from '@/pages/PostPage.vue';
import About from '@/pages/About.vue';
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi.vue';
import CakePageMod from '@/pages/CakePageMod.vue';


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
  {
    path: '/store',
    name: 'store',
    component: PostsPageWithStore,
  },
  {
    path: '/compo',
    name: 'compo',
    component: PostsPageCompositionApi,
  },
  {
    path: '/mod/cake',
    name: 'mcake',
    component: CakePageMod,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
