import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserGradePK from '@/components/UserGradePK'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserGradePK',
      component: UserGradePK
    }
  ]
})
