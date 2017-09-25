<template>
  <div id="app">
    <router-view ></router-view>
    <catFooter v-show="this.footerShow" :showFooter="this.showFooter"></catFooter>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
import catShouye from './components/cat-shouye/shouye.vue'
import catFooter from './components/cat-footer/cat-footer.vue'
export default {
  name:'app',
  data(){
      return {
        footerShow:true
      }
  },
  mounted(){

  },
  methods:{
      //定义footer是否显示
    showFooter(value){

      this.footerShow=value

    }
  },
  components: {
   catFooter,catShouye
  }

}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  //导航
  .navWrapper
    position relative
    z-index 500
    margin-top 107px
    width 100%
    height 36px
    background-color white
    .navList
      height 36px
      float left
      white-space nowrap
      &>li
        width 74px
        height 36px
        display inline-block
        a
          display block
          text-align center
          line-height 36px
          font-size 14px
          font-family 'Microsoft Yahei' -apple-system-font Helvetica Neue sans-serif
          .active
            display inline-block
            height 34px
            color deeppink
            border-bottom deeppink solid



</style>
