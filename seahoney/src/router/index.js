import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Index from '@/components/page/index'
import Category from '@/components/page/category'
import Shop from '@/components/page/ShopCar'
import My from '@/components/page/my'
import bannerDetails from '@/components/page/index/details/bannerdetails'
import strictSelection from '@/components/page/index/details/strictselection'
import detailsBar from '@/components/page/category/details'
import searchdetailsBar from '@/components/page/search/searchdetails'
import loginBar from '@/components/page/my/login'
import indexBar from '@/components/page/index'

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path:'/bannerdetails',
      name:'bannerdetails',
      component:bannerDetails
    },
    {
      path:'/strictselection/:id',
      name:'strictselection',
      component:strictSelection
    },
    {
      path:'/details',
      name:'details',
      component:detailsBar
    },
   {
    path:'/searchdetails',
    name:'searchdetails',
    component:searchdetailsBar
   },
   {
    path:'/login',
    name:'login',
    component:loginBar
   },
   {
    path:'/index',
    name:'index',
    component:indexBar
   }
  ]
})
