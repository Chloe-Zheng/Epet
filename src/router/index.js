/**
 * Created by Administrator on 2017/9/22.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

const catShouye = ()=>import('../components/cat-shouye/shouye.vue')
const catZhuliang = ()=>import('../components/cat-zhuliang/cat-zhuliang.vue')
const catMaosha = ()=>import('../components/cat-maosha/cat-maosha.vue')
const catHospital = ()=>import('../components/cat-hospital/cat-hospital.vue')
const catTools = ()=>import('../components/cat-tools/cat-tools.vue')
const catShampoo = ()=>import('../components/cat-shampoo/cat-shampoo.vue')
const catFooterFenlei = ()=>import('../components/cat-footer-fenlei/cat-footer-fenlei.vue')
const catFooterShaopcart = ()=>import('../components/cat-footer-shaopcart/cat-footer-shaopcart.vue')
const catFooterMyepet = ()=>import('../components/cat-footer-myepet/cat-footer-myepet.vue')
const catSortsList = ()=>import('../components/catSortsList/catSortsList.vue')
const catPinpaiList = ()=>import('../components/catPinpaiList/catPinpaiList.vue')
const normalLogin = ()=>import('../components/normalLogin/normalLogin.vue')
const activepsLogin = ()=>import('../components/activepsLogin/activepsLogin.vue')
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    //导航路由
    {
      path:'/catShouye',
      component:catShouye,
      children:[
        {
          path:'catShouye',
          component:catShouye,
        },
        {
          path:'catZhuliang',
          component:catZhuliang
        },
        {
          path:'catMaosha',
          component:catMaosha
        },
        {
          path:'catHospital',
          component:catHospital
        },
        {
          path:'catTools',
          component:catTools
        },
        {
          path:'catShampoo',
          component:catShampoo
        }
      ]
    },

    //底部路由
    {
      path:'/catFooterFenlei',
      component:catFooterFenlei,
      children:[
        {
          path:'catSortsList',
          component:catSortsList,
        },
        {
          path:'catPinpaiList',
          component:catPinpaiList

        },
        {
          path:'/',
          redirect:'/catFooterFenlei/catSortsList',

        }
      ]
    },
    {
      path:'/catFooterShaopcart',
      component:catFooterShaopcart
    },
    {
      path:'/catFooterMyepet',
      component:catFooterMyepet,
      children:[
        {
          path:'normalLogin',
          component:normalLogin
        },
        {
          path:'activepsLogin',
          component:activepsLogin
        },
        {
          path:'/',
          redirect:'/catFooterMyepet/normalLogin'
        }


      ]
    },

    {
      path:'/',
      redirect:'/catShouye'
    }

  ]
})
