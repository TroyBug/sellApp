import Vue from 'vue';
import Router from 'vue-router';
import Goods from '@components/goods/goods.vue';  // 添加@是为了区分，不是必要的
import Ratings from '@components/ratings/ratings.vue';
import Seller from '@components/seller/seller.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'current',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ]
});
