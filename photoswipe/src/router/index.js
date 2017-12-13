import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import PageTransition from '@/components/PageTransition'
import SlideDelete from '@/components/SlideDelete'
import HelloWorld from '@/components/HelloWorld'
import PhotoSwipe from '@/components/PhotoSwipe'

Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [{
    path: '/',
    name: 'PageTransition',
    component: PageTransition,
    children: [{
      path: '',
      name: 'index',
      component: index,
    }, {
      path: '/slide-delete',
      name: 'SlideDelete',
      component: SlideDelete
    }, {
      path: '/photoswipe',
      name: 'PhotoSwipe',
      component: PhotoSwipe
    }, ]
  }]
})
