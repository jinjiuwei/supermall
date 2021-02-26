import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:'/',
    redirect:'/hindex',
  },
  {
    path:'/login',
    component: () => import('views/LoginAndRes/LIndex'),
    meta:{
      allowReq: true
    }
  },
  {
    path: '/hindex',
    component: () => import('views/home/HIndex'),
    meta:{
      allowReq: true
    },
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('views/home/home/Home'),
        meta:{
          allowReq: true
        }
      },
      {
        path: 'profile',
        component: () => import('views/home/profile/ProfileIndex'),
        children: [
          {
            path: '',
            redirect:'home'
          },
          {
            path: 'home',
            component: () => import('views/home/profile/home/Userbar'),
            name: '首页'
          },
          {
            path: 'order',
            component: () => import('views/home/profile/order/Order'),
            name: '订单详情'
          },
          {
            path: 'favorites',
            component: () => import('views/home/profile/favorites/FavoritesIndex')
          },
          {
            path: 'car',
            component: () => import('views/home/profile/car/CarIndex')
          },
          {
            path: 'me',
            component: () => import('views/home/profile/person/PersonInfo')
          }
        ]
      },
      {
        path: 'merchants',
        component: () => import('views/home/merchants/MerchantsIndex'),
      },
      {
        path: 'search',
        component: () => import('views/search/SIndex'),
      },
      {
        path: 'good/:id',
        component: () => import('views/home/goods/DetailPage')
      },
      {
        path: 'merchant/:id',
        component: () => import('views/home/merchants/merchantInfo/MerchantIndex')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*router.beforeEach((to,from,next) => {
  if(!to.meta.allowReq){
    //如果没有游客访问权限 将进行身份登陆验证
    if(!localStorage.getItem('USER_SESSION')){//如果为false则说明未登录
      next({path: '/login'});//未登陆直接去往登陆页面
    }else{//如果为true则说明已登陆
      next();
    }
  }else{
    //有游客访问权限的页面直接放行
    next();
  }
})*/

export default router
