import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from '@container/app.vue'

import routes from 'routes'

const Router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App).use(Router)

export default {
  mount() {
    app.mount('#app')
  },
  unmount() {
    app.unmount()
  },
}
