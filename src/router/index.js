import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import PageTransition from '@/components/PageTransition';
import SlideDelete from '@/components/SlideDelete';
/* import HelloWorld from '@/components/HelloWorld'; */
import PhotoSwipe from '@/components/PhotoSwipe';
import Touchmove from '@/components/Touchmove';
import Test from '@/components/Test';
import ScrollLinkage from '@/components/ScrollLinkage';
import VueLazyLoad from '@/components/VueLazyLoad';
import EamlessScroll from '@/components/EamlessScroll';

/* test */

Vue.use(Router);
Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};
export default new Router({
  routes: [{
    path: '/',
    name: '',
    component: PageTransition,
    children: [{
        path: '',
        name: 'index',
        component: index
      }, {
        path: '/slide-delete',
        name: 'SlideDelete',
        component: SlideDelete
      }, {
        path: '/photoswipe',
        name: 'PhotoSwipe',
        component: PhotoSwipe
      }, {
        path: '/touchmove',
        name: 'Touchmove',
        component: Touchmove
      },
      {
        path: '/scroll-linkage',
        name: 'ScrollLinkage',
        component: ScrollLinkage
      },
      {
        path: '/test',
        name: 'Test',
        component: Test
      },
      {
        path: '/lazy-load',
        name: 'VueLazyLoad',
        component: VueLazyLoad
      }, {
        path: '/eamless-scroll',
        name: 'EamlessScroll',
        component: EamlessScroll
      }
    ]
  }]
});
