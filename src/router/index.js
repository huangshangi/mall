import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('../views/index')
  },
  {
    path: '/shoppingCart',
    component: () => import('../views/shoppingCart')
  },
  {
    path: '/confirmOrders',
    component: () => import('../views/settingOrder')
  },
  {
    path: '/goodsDetail',
    component: () => import('../views/goodsDetail')
  },
  {
    path: '/search',
    component: () => import('../views/searchResult')
  },
  {
    path: '/goodsStore',
    component: () => import('../views/goodsStore')
  },
  {
    path: '/publishDemand',
    component: () => import('../views/demandRequire')
  },
  {
    path: '/orderDetail',
    component: () => import('../views/orderDetail')
  },
  {
    path: '/publishEvaluate',
    component: () => import('../views/publishEvaluate')
  },
  {
    path: '/receiptSuccess',
    component: () => import('../views/receiptStatus')
  },
  {
    path: '/refund',
    component: () => import('../views/refundDetail')
  },
  {
    path: '/report',
    component: () => import('../views/reportDetail')
  },
  {
    path: '/tradeHall',
    component: () => import('../views/tradeHall')
  },
  {
    path: '/tradeHall/detail',
    component: () => import('../components/tradeHall/tradeHallDetailTemp')
  },
  {
    path: '/buyerBack',
    component: () => import('../views/BuyerBackTemp'),
    children: [
      {
        path: '',
        redirect: '/buyerBack/index'
      },
      {
        path: 'index',
        component: () => import('../components/buyerBack/common/BuyerBackIndex')
      },
      {
        path: 'histories',
        component: () => import('../components/buyerBack/histories/BuyerBackHistoryTemp')
      },
      {
        path: 'orders',
        component: () => import('../components/buyerBack/orders/BuyerBackOrder')
      },
      {
        path: 'evaluates',
        component: () => import('../components/buyerBack/evaluates/BuyerBackEvaluate')
      },
      {
        path: 'collects',
        component: () => import('../components/buyerBack/collects/BuyerBackColl')
      },
      {
        path: 'refunds',
        component: () => import('../components/buyerBack/refunds/BuyerBackRefundTemp')
      },
      {
        path: 'reports',
        component: () => import('../components/buyerBack/reports/BuyerBackReportTemp')
      },
      {
        path: 'feedbacks',
        component: () => import('../components/buyerBack/feedbacks/BuyerBackFeedTemp')
      }
    ]
  },
  {
    path: '/sellerBack',
    component: () => import('../views/sellerBackTemp'),
    children: [
      {
        path: '',
        redirect: '/sellerBack/index'
      },
      {
        path: 'index',
        component: () => import('../components/sellerBack/sellerBackIndex')
      },
      {
        path: 'orders',
        component: () => import('../components/sellerBack/sellerBackOrderManager')
      },
      {
        path: 'evaluates',
        component: () => import('../components/sellerBack/backEvaluationManager')
      },
      {
        path: 'services',
        component: () => import('../components/sellerBack/backServiceManager')
      },
      {
        path: 'refunds',
        component: () => import('../components/sellerBack/backRefundManager')
      },
      {
        path: 'publishService',
        component: () => import('../components/sellerBack/backPublishService')
      },
      {
        path: 'myAccount',
        component: () => import('../components/sellerBack/backAccountIndex')
      },
      {
        path: 'accountHistory',
        component: () => import('../components/sellerBack/backAccountTradeRecord')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/title',
    name: 'Title',
    component: () => import('../components/front/mallTitle')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
