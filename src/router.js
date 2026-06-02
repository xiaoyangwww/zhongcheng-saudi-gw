import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('./views/News.vue'),
  },
  {
    path: '/newsdetails/:id',
    name: 'newsdetails',
    component: () => import('./views/NewsDetails.vue'),
  },
  // 产品与服务
  {
    path: '/product',
    name: 'product',
    component: () => import('./views/Product.vue'),
    redirect: '/product/transport', // 设置默认跳转
    children: [
      {
        path: 'transport',
        name: 'product-transport',
        component: () => import('./views/product/Transport.vue'),
      },
      {
        path: 'supplyChain',
        name: 'product-supplyChain',
        component: () => import('./views/product/SupplyChain.vue'),
      },
      {
        path: 'mainProducts',
        name: 'product-mainProducts',
        component: () => import('./views/product/MainProducts.vue'),
      },
      {
        path: 'expoWarehouseLink',
        name: 'product-expoWarehouseLink',
        component: () => import('./views/product/ExpoWarehouseLink.vue'),
      },
      {
        path: 'ourAdvantages',
        name: 'product-ourAdvantages',
        component: () => import('./views/product/OurAdvantages.vue'),
      },
    ],
  },
  // 项目案例
  {
    path: '/case',
    name: 'case',
    redirect: '/case/logistics', // 设置默认跳转
    component: () => import('./views/Case.vue'),
    children: [
      {
        path: 'logistics',  // 物流业务
        name: 'logistics',
        component: () => import('./views/case/Logistics.vue')
      },
      {
        path: 'materials',  // 物资业务
        name: 'materials',
        component: () => import('./views/case/Materials.vue')
      },
      {
        path: 'fullSupplyChain',  // 全程供应链业务
        name: 'fullSupplyChain',
        component: () => import('./views/case/FullSupplyChain.vue')
      }
    ]
  },

  {
    path: '/casedetails/:projectId/:id', 
    name: 'casedetails',
    component: () => import('./views/CaseDetails.vue')
  },
  // 项目详细页
  {
    path: '/projectdetail/:projectTypeId/:id',
    name: 'projectdetail',
    component: () => import('./views/ProjectDetail')
  },
  // 联系我们
  {
    path: '/us',
    name: 'us',
    component: () => import('./views/Us.vue')
  },
  // 关于我们
  {
    path: '/goin',
    name: 'goin',
    component: () => import('./views/GoIn.vue'),
    redirect: '/goin/intro', // 设置默认跳转
    children: [
      {
        path: '/goin/intro',
        name: 'intro',
        component: () => import('./views/goin/Intro.vue')
      },
      {
        path: '/goin/brand',
        name: 'Brand',
        component: () => import('./views/goin/Brand.vue')
      },
      {
        path: '/goin/history',
        name: 'history',
        component: () => import('./views/goin/History.vue')
      },
      {
        path: '/goin/culture',
        name: 'culture',
        component: () => import('./views/goin/Culture.vue')
      },
      {
        path: '/goin/honor',
        name: 'honor',
        component: () => import('./views/goin/Honor.vue')
      },
      {
        path: '/goin/cooperate',
        name: 'cooperate',
        component: () => import('./views/goin/Cooperate.vue')
      },
      // {
      //   path: '/goin/domestic',
      //   name: 'domestic',
      //   component: () => import('./views/goin/Domestic.vue')
      // },
      {
        path: '/goin/overseas',
        name: 'overseas',
        component: () => import('./views/goin/Overseas.vue')
      }
    ]
  },
  
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // 如果有保存的滚动位置，返回
    } else {
      return { x: 0, y: 0 }; // 否则滚动到顶部
    }
  }
})

// 重写 push 方法
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') {
      throw err;
    }
  });
};

export default router