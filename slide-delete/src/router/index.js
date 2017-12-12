import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SlideDelete from '@/components/SlideDelete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SlideDelete',
      component: SlideDelete
    }
  ]
})
