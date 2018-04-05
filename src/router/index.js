import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
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
export default new Router({
  routes: [{
      path: '',
      name: 'index',
      component: index,
      meta: 1
    }, {
      path: '/slide-delete',
      name: 'SlideDelete',
      component: SlideDelete,
      meta: 2
    }, {
      path: '/photoswipe',
      name: 'PhotoSwipe',
      component: PhotoSwipe,
      meta: 2
    }, {
      path: '/touchmove',
      name: 'Touchmove',
      component: Touchmove,
      meta: 2
    },
    {
      path: '/scroll-linkage',
      name: 'ScrollLinkage',
      component: ScrollLinkage,
      meta: 2
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      meta: 2
    },
    {
      path: '/lazy-load',
      name: 'VueLazyLoad',
      component: VueLazyLoad,
      meta: 2
    }, {
      path: '/eamless-scroll',
      name: 'EamlessScroll',
      component: EamlessScroll,
      meta: 2
    }
  ]
});
