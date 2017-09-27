/**
 * Created by Administrator on 2017/9/22.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

const catNavShouye=()=>import('../components/cat-nav-shouye/cat-nav-shouye')
const catZhuliang = ()=>import('../components/cat-zhuliang/cat-zhuliang.vue')
const catMaosha = ()=>import('../components/cat-maosha/cat-maosha.vue')
const catHospital = ()=>import('../components/cat-hospital/cat-hospital.vue')
const catTools = ()=>import('../components/cat-tools/cat-tools.vue')
const catShampoo = ()=>import('../components/cat-shampoo/cat-shampoo.vue')
const catShouye = ()=>import('../components/cat-shouye/shouye.vue')
const catFooterFenlei = ()=>import('../components/cat-footer-fenlei/cat-footer-fenlei.vue')
const catFooterShaopcart = ()=>import('../components/cat-footer-shaopcart/cat-footer-shaopcart.vue')
const catFooterMyepet = ()=>import('../components/cat-footer-myepet/cat-footer-myepet.vue')
const catSortsList = ()=>import('../components/catSortsList/catSortsList.vue')
const catPinpaiList = ()=>import('../components/catPinpaiList/catPinpaiList.vue')
const normalLogin = ()=>import('../components/normalLogin/normalLogin.vue')


Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    //首页路由下的导航路由
    {
      path:'/catShouye',
      component:catShouye,
      children:[
        {
          path:'catNavShouye',
          component:catNavShouye,
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
        },
        {
          path:'/',
          redirect:'/catShouye/catNavShouye',
        }
      ]
    },

    //底部路由下的分类路由
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
    //底部路由下的购物车路由
    {
      path:'/catFooterShaopcart',
      component:catFooterShaopcart
    },
    //底部路由下的mypet路由
    {
      path:'/catFooterMyepet',
      component:catFooterMyepet,
      /*children:[
        {
          path:'normalLogin',
          component:normalLogin
        }
        ]*/
    },

    {
      path:'/',
      redirect:'/catShouye'
    }

  ]
})
