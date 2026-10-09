import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    // portfolio
    { path: '/', name: 'home', component: () => import('@/presentation/views/HomeView.vue') },

    { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
  ],

scrollBehavior(to, _from, saved) {
  if (saved) return new Promise((resolve) => setTimeout(() => resolve(saved), 250))
  if (to.hash) return { el: to.hash, behavior: 'smooth' }
  return { top: 0 }
},
})
