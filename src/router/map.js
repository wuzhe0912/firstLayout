// router 導入使用這兩種寫法皆可
import Home from '../views/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },

  // 視專案需求決定 => 進入 home || NotFound
  { path: '*', redirect: { name: 'Home' } }
  // { path: '*', redirect: { name: 'NotFound' } }
]
