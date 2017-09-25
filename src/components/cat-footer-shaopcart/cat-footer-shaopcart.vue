<template>
    <div class="shopcartWrap">
      <div class="shopcatContent">
          <div class="shopcatTitle" >
            <router-link to="/catShouye"><span class="shopcatBack"></span></router-link>
            <span >购物车</span>
            <span class="listBtn" @click="showDetail"></span>
          </div>
          <div class="shopcatMain">
            <div class="shopcatDetails" v-show="isShow" @click="showDetail">
              <ul >
                <li ><router-link to="/catShouye" >
                  <span class="shopcatShouye"></span>
                  <p>首页</p>
                </router-link></li>
                <li ><router-link to="/catFooterFenlei" >
                  <span class="shopcatFenlei"></span>
                  <p>商品分类</p>
                </router-link></li>
                <li ><router-link to="/catFooterShaopcart" >
                  <span class="shopcatGouwuche"><div>0</div></span>
                  <p>购物车</p>
                </router-link></li>
                <li ><router-link to="/catFooterMyepet" >
                  <span class="shopcatmMyEchong"></span>
                  <p>我的e宠</p>
                </router-link></li>
              </ul>
              <router-view></router-view>
            </div>
            <div class="shopcartPic">
              <span class="shopcartPicWrap"></span>
            </div>
            <div class="shopcartText">
              购物车是空的
            </div>
            <div class="shopcartRouters">
              <router-link class="shopcartRouter" to="/catShouye">去逛逛</router-link>
              <router-link class="shopcartRouter" to="/catShouye">我的收藏</router-link>
            </div>
            <router-view></router-view>
          </div>
      </div>
    </div>


</template>
<script>
    export default {
        data(){
            return {
              isShow:false
            }

        },
      methods:{
        showDetail(){
            this.isShow=!this.isShow
        }
      },
        components: {}

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
.shopcartWrap
  width 100%
  height 667px
  background-color #f3f3f3
  .shopcatContent
    width 100%
    background-color white
    padding-bottom 50px
    .shopcatTitle
      width 100%
      color #333
      height 50px
      line-height 50px
      border-bottom: 1px solid #f3f3f3
      text-align center
      box-sizing border-box
      padding 0 10px
      position relative
      .shopcatBack
        position absolute
        left 20px
        top 17px
        display inline-block
        width 22px
        height 20px
        background url("../../../img/zuojianjian.png") center no-repeat
        background-size 12px 15px
      .listBtn
        position absolute
        right 20px
        top 17px
        display inline-block
        width 22px
        height 20px
        vertical-align middle
        background url("../../../img/4444.png") center no-repeat
        background-size 15px 15px

    .shopcatMain
      width 100%
      .shopcatDetails
        width 100%
        color #333
        line-height 20px
        padding 10px 0
        height 65px
        border-bottom 1px solid #d7d7d7
        box-sizing border-box
        ul
          width 100%
          height 45px
          li
            width 25%
            height 100%
            text-align center
            font-size 0
            float left
            .shopcatShouye
              background url("../../../static/img/head_icon1.png") center no-repeat
              background-size auto 23px
            .shopcatFenlei
              background url("../../../static/img/head_icon2.png") center no-repeat
              background-size auto 23px
            .shopcatGouwuche
              background url("../../../static/img/head_icon3.png") center no-repeat
              background-size auto 23px
              position relative
              color white
              font-size 12px
              div
                width 20px
                height 20px
                background-color red
                border-radius 50%
                position absolute
                right 24px
                top -5px
            .shopcatmMyEchong
              background url("../../../static/img/head_icon4.png") center no-repeat
              background-size auto 23px
            span
              width 100%
              height 25px
              display block
              text-align center
            p
              font-size 14px
              text-align center
              width 100%
              height 20px
              line-height 20px



      .shopcartPic
        height 160px
        text-align center
        .shopcartPicWrap
          box-sizing border-box
          display inline-block
          margin 50px auto 10px
          width 100px
          height 100px
          background url("../../../img/cart-ico.png") no-repeat center
          background-position 0 -152px
          background-size 100px auto

      .shopcartText
        width 100%
        height 20px
        line-height 20px
        font-size 14px
        text-align center
        color #dbdbdb
      .shopcartRouters
        width 100%
        height 40px
        margin-top 15px
        text-align center

        .shopcartRouter
          display inline-block
          width 100px
          height 40px
          border 1px solid #999
          box-sizing border-box
          border-radius 5px
          font-size 16px
          line-height 40px
          text-align center
          margin-right 5px



</style>
