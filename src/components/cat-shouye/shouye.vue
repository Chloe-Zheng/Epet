<template>
    <div>
      <div class="headerWrap">
        <div class="overflow xiazaiApp" v-show="isShow">
          <div class="overflow rela">
          <span class="clsoebtn" @click="this.toggleDownload">
            <img src="../../../img/closebtn_03.png" alt="epetdownload">
          </span>
            <div class="appdowimg">
              <a href="###" >
                <img src="../../../img/xiazaiAPP.png">
              </a>
            </div>
          </div>
        </div>
        <div class="search-wrapper">
          <div class="search">
            <a class="pet-state" href="###">
              <span class="cat">猫猫站</span>
              <span class="line">|</span>
              <span class="address">重庆</span>
              <img src="../../../img/youjianjian.png"/>
            </a>
            <a class="search-input"><input type="search" placeholder="搜索商品和品牌" disabled="disabled"/></a>
            <a class="qipao" href="###"><img  src="../../../img/qipao.png" alt=""></a>
          </div>
        </div>
      </div>
      <div class="navWrapper" ref="navScroll" >
          <ul class="navList">
            <li v-for="(catnavdata,index) in this.catnavdatas" :key="index">
              <router-link :to="`/catShouye/${catnavdata.menu_item}`" >
                <span >{{catnavdata.menu_name}}</span>
              </router-link>
            </li>

          </ul>
      </div>
      <router-view :catnavdatas="catnavdatas" :detailsdata="detailsdata" :catCrazyData="catCrazyData"></router-view>
    </div>




</template>
<script >
  import axios from 'axios'
import BScroll from 'better-scroll'
import pageline from '../page-line/pageline.vue'
import pinpai from '../pinpai/pinpai.vue'
import 'mint-ui/lib/style.css'
/*import catHeader from '../cat-header/header.vue'*/


  export default {
    data(){
          return {
            isShow:true,
            catnavdatas:[],
            detailsdata:[],
            catCrazyData:{}
          }
      },
    mounted(){
        //基于mockjs使用axios发送请求
      axios.get('/api/catnav')
        .then((response) => {
        const result=response.data
          if(result.code=='succeed'){
            this.catnavdatas=result.data
            console.log( "this.catnavdatas",this.catnavdatas)
          }
      }, (response) => {
        console.log('失败了')
      })
      //获取detailsdata轮播图及以下数据
      this.$http.get('/api/details')
        .then((response)=>{
          const details=response.body
          if(details.code=='succeed'){
              this.detailsdata=details.data
           /* console.log(this.detailsdata)*/
          }
        }),
        (response)=>{
          console.log('失败了')
      }
      //获取每日疯抢数据
      axios.get('/api/crazy')
        .then((response) => {
          const crazy=response.data
          if(crazy.code=='succeed'){
            this.catCrazyData=crazy.data

          }
        }, (response) => {
          console.log('失败了')
        })


      this.$nextTick(() => {
        // 初始化导航滚动对象
        this._initNavScroll()

      })

    },

    watch: {
//监视滚动条高度，但是未成功
      /*contentH (value){
        this._initScroll()
      }*/
    },
    methods:{

      //定义导航滚动条的方法
      _initNavScroll(){
          if(!this.scrollNav){
            this.scrollNav=new BScroll(this.$refs.navScroll, {
              click: true,
              scrollX: true
            })
            setTimeout(()=>{
              this.scrollNav.refresh()
            },1000)
          }else{
            this.scrollNav.refresh()
          }

      },
      //下载广告是否显示
      toggleDownload(){
        this.isShow=!this.isShow
      }

    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 /*.shouyeWrap
    height 667px
    display flex*/
   .headerWrap
      width 100%
      background-color white
      position relative
      z-index 500
    //广告下载部分
      .xiazaiApp
        width 100%
        height 55px
        overflow hidden
        .rela
          width 100%
          height 100%
          position relative
          .clsoebtn
            display inline-block
            position absolute
            top 10px
            left 10px
            width 19px
            height 19px
            z-index 10
            &>img
              width 100%
          .appdowimg
            position absolute
            z-index 2
            top 0
            left 0
            width 100%
            &>a
              width 100%
              display block
              &>img
                width 100%




      //搜索框
      .search-wrapper
        box-sizing border-box
        width 100%
        padding 5px 10px
        height 52px
        .search
          box-sizing border-box
          padding 8px 0
          width 100%
          height 100%
          font-size 14px
          .pet-state
            &>img
              width 8px
              height 8px
              transform rotate(90deg)
          .search-input
            input
              background-color rgb(233,233,233)
              width 185px
              height 25px
              margin 0 10px
              padding-left 10px
              border-radius 4px
              background-image url("../../../img/search.png")
              background-size 11px 11px
              background-repeat no-repeat
              background-position 170px center
          .qipao
            img
              line-height 25px
              vertical-align middle
              margin-left 10px
              width 25px
              height 25px




         //导航
    .navWrapper
      width 100%
      height 36px
      margin-top 0px
      margin-bottom 1px
      .navList
        height 36px
        float left
        white-space nowrap
      .navList:after
        content " "
        clear both
        display table
        &>li
          width 74px
          height 36px
          display inline-block
          a
            display block
            text-align center
            line-height 36px
            font-size 14px
            .active
              display inline-block
              height 34px
              color deeppink
              border-bottom deeppink solid





  //底部描述
  //底部

</style>
