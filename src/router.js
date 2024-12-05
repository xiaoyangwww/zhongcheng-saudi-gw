import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let kejianrouter = new Router({
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
      }
    ]
  },

  {
    path: '/casedetails/:id',
    name: 'casedetails',
    component: () => import('./views/CaseDetails.vue')
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
    children: [{
      path: '/goin/intro',
      name: 'intro',
      component: () => import('./views/goin/Intro.vue')
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
    {
      path: '/goin/domestic',
      name: 'domestic',
      component: () => import('./views/goin/Domestic.vue')
    },
    {
      path: '/goin/overseas',
      name: 'overseas',
      component: () => import('./views/goin/Overseas.vue')
    }
    ]
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('./views/Download.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      requireAuth: true
    },
    component: () => import('./views/Admin.vue'),
    children: [{
      path: '/admin/user',
      name: 'user',
      component: () => import('./views/Admin/User.vue')
    },
    {
      path: '/admin/news',
      name: 'new',
      component: () => import('./views/Admin/News.vue')
    },
    {
      path: '/admin/cases',
      name: 'cases',
      component: () => import('./views/Admin/Cases.vue')
    },
    {
      path: '/admin/team',
      name: 'team',
      component: () => import('./views/Admin/Team.vue')
    },
    {
      path: '/admin/course',
      name: 'course',
      component: () => import('./views/Admin/Course.vue')
    },
    {
      path: '/admin/enterprise',
      name: 'enterprise',
      component: () => import('./views/Admin/Enterprise.vue')
    },
    {
      path: '/admin/honor',
      name: 'honor',
      component: () => import('./views/Admin/Honor.vue')
    },
    {
      path: '/admin/dictionary',
      name: 'dictionary',
      component: () => import('./views/Admin/Dictionary.vue')
    },
    {
      path: '/admin/page',
      name: 'page',
      component: () => import('./views/Admin/Page.vue')
    }
    ]
  }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }; // 跳转时滚动到页面顶部
  },
})

// 判断是否需要登录权限 以及是否登录
kejianrouter.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  // if (to.matched.some(res => res.meta.requireAuth)) {
  //   // 判断是否登录
  //   if (sessionStorage.getItem('token')) {
  //     next()
  //   } else {
  //     // 没登录则跳转到登录界面
  //     next({
  //       path: '/login',
  //       query: {
  //         redirect: to.fullPath
  //       }
  //     })
  //   }
  // } else {
  //   next()
  // }
  next()
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

export default kejianrouter