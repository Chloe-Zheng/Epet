<template>
    <div>
      <catHeader ref="catHeader"></catHeader>
      <div class="navWrapper" ref="navScroll" >
        <ul class="navList">
          <li><router-link to="/catShouye/catShouye"><span class="active">首页</span></router-link></li>
          <li><router-link to="/catShouye/catZhuliang"><span>主粮</span></router-link></li>
          <li><router-link to="/catShouye/catMaosha"><span>猫砂</span></router-link></li>
          <li><router-link to="/catShouye/catHospital"><span>医疗保健</span></router-link></li>
          <li><router-link to="/catShouye/catTools" ><span>零食玩具</span></router-link></li>
          <li><router-link to="/catShouye/catShampoo"><span>美容香波</span></router-link></li>
        </ul>
        <router-view></router-view>
      </div>
      <div class="contentWrap" ref="main">
        <div  class="content" >
          <div class="swiper-wrap">
            <mt-swipe style="height: 160px;overflow:hidden;" :auto="4000">
              <mt-swipe-item><img style="width: 100%" src="../../../img/1.jpg" ></mt-swipe-item>
              <mt-swipe-item><img style="width: 100%" src="../../../img/2.jpg" ></mt-swipe-item>
              <mt-swipe-item><img style="width: 100%" src="../../../img/3.jpg" ></mt-swipe-item>
              <mt-swipe-item><img style="width: 100%" src="../../../img/4.jpg" ></mt-swipe-item>
              <mt-swipe-item><img style="width: 100%" src="../../../img/5.jpg" ></mt-swipe-item>
              <mt-swipe-item><img style="width: 100%" src="../../../img/6.jpg" ></mt-swipe-item>
              <mt-swipe-item><img style="width: 100%" src="../../../img/7.jpg" ></mt-swipe-item>
              <mt-swipe-item><img style="width: 100%" src="../../../img/8.jpg" ></mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="login">
            <a href="##">
              <img src="../../../img/xinrenzhuanxiang.gif" alt="">
            </a>

          </div>
          <div class="iconWrap">
            <ul class="iconList">
              <li >
                <a href="#"><img src="../../../img/icon1.png" alt="logo"></a>
              </li>
              <li >
                <a href="#"><img src="../../../img/icon2.png" alt="logo"></a>
              </li>
              <li >
                <a href="#"><img src="../../../img/icon3.png" alt="logo"></a>
              </li>
              <li >
                <a href="#"><img src="../../../img/icon4.png" alt="logo"></a>
              </li>


            </ul>
            <ul class="iconList">
              <li >
                <a href="#"><img src="../../../img/icon5.png" alt="logo"></a>
              </li>
              <li >
                <a href="#"><img src="../../../img/icon6.png" alt="logo"></a>
              </li>
              <li >
                <a href="#"><img src="../../../img/icon7.png" alt="logo"></a>
              </li>
              <li >
                <a href="#"><img src="../../../img/icon8.png" alt="logo"></a>
              </li>
            </ul>
          </div>
          <pageline></pageline>
          <div class="crazy">
            <div class="title">
              <img class="crazyPic" src="../../../img/suprice.png" alt="">

              <div class="deadline">
                <span>距离本场结束</span>
                <span class="border">00</span>
                <span>:</span>
                <span class="border">00</span>
                <span>:</span>
                <span class="border">00</span>
              </div>
              <img class="more" src="../../../img/more.png" alt="">

            </div>
            <div class="main" ref="crazyMain">
              <ul class="mainList" >
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <div><span>￥</span><span>29元</span></div>

                  <p>省￥25元</p>
                </li>
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <span>￥</span>
                  <span>29元</span>
                  <p>省￥25元</p>
                </li>
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <span>￥</span>
                  <span>29元</span>
                  <p>省￥25元</p>
                </li>
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <span>￥</span>
                  <span>29元</span>
                  <p>省￥25元</p>
                </li>
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <span>￥</span>
                  <span>29元</span>
                  <p>省￥25元</p>
                </li>
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <span>￥</span>
                  <span>29元</span>
                  <p>省￥25元</p>
                </li>
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <span>￥</span>
                  <span>29元</span>
                  <p>省￥25元</p>
                </li>
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <span>￥</span>
                  <span>29元</span>
                  <p>省￥25元</p>
                </li>
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <span>￥</span>
                  <span>29元</span>
                  <p>省￥25元</p>
                </li>
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <span>￥</span>
                  <span>29元</span>
                  <p>省￥25元</p>
                </li>
                <li>
                  <a href=""><img src="../../../img/meishile.jpg" alt=""></a>
                  <span>￥</span>
                  <span>29元</span>
                  <p>省￥25元</p>
                </li>




              </ul>
            </div>
          </div>
          <pageline></pageline>
          <div class="remen">
            <div class="remenTitle"><img src="../../../img/remen.jpg" alt=""></div>
            <div class="remenMain">
              <div class="remenLeft">
                <img class="leftimg" src="../../../img/xinmiaoketang.png" alt="">
              </div>
              <div class="remenRight">
                <img src="../../../img/xinpinzhoukan.png" alt="">
                <img src="../../../img/shipin.jpg" alt="">
              </div>
            </div>
          </div>
          <pageline></pageline>
          <div class="fashionWrap">
            <div class="fashionTitle">
              <a class="fashionRight" href="#"><img  src="../../../img/more.png" alt=""></a>
            </div>
            <div class="play">
              <a href="#"></a>
            </div>
          </div>
          <pageline></pageline>
          <div class="tiyanguan">
            <div class="tiyanguanTitle">
              <img src="https://img2.epetbar.com/nowater/2017-04/19/18/a3cf638c4a9d9119da4785f6f879f143.png" alt="">
              <a href="#"><img src="https://img2.epetbar.com/nowater/2017-04/19/20/65336c790d552d2356490bc03587fa04.png" alt=""></a>
            </div>
            <div class="tiyanguanMain">
              <img src="https://img2.epetbar.com/nowater/2017-09/14/09/e8b3127632fcd4b9b0a3eac550e00986.jpg@!water" alt="">
            </div>
          </div>
          <pageline></pageline>
          <div class="pinpaiWrap">
            <div class="title">
              <img src="../../../img/special.png" alt="pinpai">

            </div>
            <pinpai></pinpai>
            <pinpai></pinpai>
            <pinpai></pinpai>
            <pinpai></pinpai>
            <pinpai></pinpai>
          </div>
          <pageline></pageline>
          <div class="tagongyi">
            <div class="tagongyiTitle">
              <img src="https://img2.epetbar.com/nowater/2016-12/26/10/682fd54a104c5e719968cce468a1bd0f.jpg" alt="">
              <a href="#"><img src="https://img2.epetbar.com/nowater/2016-12/26/10/13cacd7e83cbfdc5c5cec4977f00e105.png" alt=""></a>
            </div>
            <div class="tagongyiMain">
              <div class="tagongyiContent">
                <p>截止今日，TA公益已联合E宠商城和<b>15</b>家品牌</p>
                <p>累积捐赠<b>857,272.44</b>元</p>
                <p>已合作<b>7</b>家公益组织，举办参与<b>2</b>场公益活动,助养<b>15</b>位领养人</p>
              </div>

            </div>
          </div>
          <pageline></pageline>
          <div class="commentsWrap">
            <div class="commentTitle">
              <img src="https://img2.epetbar.com/nowater/2017-02/09/14/fbcacf13ccc5748295fe0e6124fbec5d.png" alt="">
              <a href="##">好评率99.64%</a>
            </div>
            <ul class="commentList">

                <li>
                  <div class="commentPic">
                    <img src="https://img1.epetbar.com/2017-03/29/14/d1cf520f66912ee6adcb29ffebe2efc8.jpg@!200w-c" alt="">
                    <div class="commentMark">加入E宠2年2月</div>
                    <div class="username">
                      <span class="hostName">红*****ω</span>
                      <span class="catName">中华田园猫</span>
                    </div>
                  </div>
                  <div class="commentFont">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </div>

                </li>
                <li>
                  <div class="commentPic">

                    <img src="https://img1.epetbar.com/2017-02/03/12/2bfa814e0924d3c870a2b758c335b18d.jpg@!200w-c" alt="">
                    <div class="commentMark">加入E宠2年2月</div>
                    <div class="username">
                      <span class="hostName">红*****ω</span>
                      <span class="catName">中华田园猫</span>
                    </div>
                  </div>

                  <div class="commentFont">
                    物流挺给力，到货很快。包装也十分的棒，外面还有塑料薄膜包裹，非常好，一看就让人觉得质量绝对一级棒。客服真心不错，很耐心的给你讲解！就冲这个大大的好评，以后狗狗的东西直接来这里！ 再次祝e宠生意兴隆。
                  </div>
                </li>
                <li>
                  <div class="commentPic">
                    <img src="https://img1.epetbar.com/2017-09/12/23/8043d31b146060df1a3aa6b96abf138f.jpg@!200w-c" alt="">
                    <div class="commentMark">加入E宠2年2月</div>
                    <div class="username">
                      <span class="hostName">红*****ω</span>
                      <span class="catName">中华田园猫</span>
                    </div>
                  </div>
                    <div class="commentFont">
                    不知不觉中这已经是第16次在E宠购物了，其实我家二妹才来了三个多月。二妹吃的，用的，玩的，包括生病的药全部是在E宠买的，看中的就是正品保障和一流的物流。印象最深的是618活动的时候因为订单量太大，有一个单子没有按时送到，我联系了客服，客服保证第二天送到，结果第二天晚上十一点多的时候E宠的工作人员开着自家的小轿车把货送到了我家楼下，兑现了承诺。希望E宠以后越来越好，继续做广大铲屎官的坚实后盾。
                  </div>
                </li>
                <li>
                <div class="commentPic">
                  <img src="https://img1.epetbar.com/2017-09/12/23/8043d31b146060df1a3aa6b96abf138f.jpg@!200w-c" alt="">
                  <div class="commentMark">加入E宠2年2月</div>
                  <div class="username">
                    <span class="hostName">红*****ω</span>
                    <span class="catName">中华田园猫</span>
                  </div>
                </div>
                <div class="commentFont">
                  不知不觉中这已经是第16次在E宠购物了，其实我家二妹才来了三个多月。二妹吃的，用的，玩的，包括生病的药全部是在E宠买的，看中的就是正品保障和一流的物流。印象最深的是618活动的时候因为订单量太大，有一个单子没有按时送到，我联系了客服，客服保证第二天送到，结果第二天晚上十一点多的时候E宠的工作人员开着自家的小轿车把货送到了我家楼下，兑现了承诺。希望E宠以后越来越好，继续做广大铲屎官的坚实后盾。
                </div>
              </li>
            </ul>

          </div>
          <pageline></pageline>
          <div class="concatFooter">
            <pageline></pageline>
            <div class="aboutus" >
              <span>触屏版</span>
              <a href="https://wap.epet.com/app.html">手机客户端</a>
              <a href="https://wap.epet.com/AboutEpet.html">关于我们</a>
              <a href="https://wap.epet.com/faq.html">联系我们</a>
            </div>
            <div class="concat"> © wap.epet.com 版权：重庆易宠科技有限公司</div>
          </div>
          <pageline></pageline>
        </div>

      </div>

    </div>
</template>
<script >
import BScroll from 'better-scroll'
import pageline from '../page-line/pageline.vue'
import pinpai from '../pinpai/pinpai.vue'
import 'mint-ui/lib/style.css'
import catHeader from '../cat-header/header.vue'
  export default {
    data(){
          return {
              icons:[
                  'icon1.png','icon2.png','icon3.png',
                'icon4.png','icon5.png','icon6.png',
                'icon7.png','icon8.png'
              ],
            contentH:0
          }
      },
    mounted(){


      this.$nextTick(() => {
        // 初始化纵向滚动对象
        this._initScroll()
        // 初始化导航滚动对象
        this._initNavScroll(),
          // 初始化疯抢栏目滚动对象
        this._initCrazyScroll()
      })

    },

    watch: {
//监视滚动条高度，但是未成功
      /*contentH (value){
        this._initScroll()
      }*/
    },
    methods:{
      //定义纵向滚动条的方法
      _initScroll(){
         if(!this.scoll){
           this.scoll=new BScroll(this.$refs.main,{
             click:true
           })
           setTimeout(()=>{
             this.scoll.refresh()
           },1000)
         } else{

           this.scoll.refresh()
         }

      },
      //定义导航滚动条的方法
      _initNavScroll(){
        new BScroll(this.$refs.navScroll, {
          click: true,
          scrollX: true
        })
      },
      //定义疯抢栏目滚动条的方法
      _initCrazyScroll(){
          new BScroll(this.$refs.crazyMain,{
            click:true,
            scrollX:true
        })

      }

    },
    components:{pageline,pinpai, catHeader}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

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
          .active
            display inline-block
            height 34px
            color deeppink
            border-bottom deeppink solid




.contentWrap
  width 100%
  height 470px
  .content
    width 100%
    //轮播图
    .swiper-wrap
      height 160px
      width 100%
    //新人专享
    .login
      width 100%
      height 120px
      a
        display block
        width 100%
        img
          width 100%
          //八图
    .iconWrap
       width 100%
       .iconList
         width 100%
         height 87px
         display flex
         li
          width 25%
          height 100%
          a
            display block
            width 100%
            height 100%
            &>img
              width 100%

              //每日疯抢
    .crazy
      width 100%
      overflow hidden
      .title
        box-sizing border-box
        width 100%
        padding 10px
        height 61px
        /*background-color pink*/
        font-size 13px
        .crazyPic
          height 24px
          vertical-align top
          margin-left -14px
          margin-top 5px
        .deadline
          height 24px
          display inline-block
          vertical-align top
          padding-top 5px
          margin-top 5px
          .border
            border 1px solid
        .more
          width 67px
          height 100%
          margin-left 34px


       .main
         width 100%
        .mainList
          height 131px
          margin-bottom 10px
          padding-left 5px
          box-sizing border-box
          white-space nowrap
          float left
          font-size 0
          li
            width 98px
            height 131px
            margin-right 10px
            font-size 14px
            display inline-block
            text-align center
            a
              display block
              img
                width 84px
                height 84px

            &>div,&>p
              margin-top 5px
//热门视频
    .remen
      width 100%
      .remenTitle
        width 100%
        &>img
          height 40px
          margin 0 auto
      .remenMain
        width 100%
        height 188px
        /*line-height 188px*/
        /*background-color yellow*/
        .remenLeft
           float left
           width 159px
           height 188px
           background-color pink
           .leftimg
             width 100%
             height 188px
         .remenRight
           float left
           width 215px
           height 188px
           &>img
              width 215px
              vertical-align bottom


             //潮品视频
    .fashionWrap
      width 100%
      .fashionTitle
        box-sizing border-box
        padding-top 10px
        background-image: url('../../../img/fashion.png')
        background-repeat no-repeat
        background-position center
        background-size 187px 52px
        width 100%
        height 62px
        line-height 62px
        position relative
        img
         vertical-align top
         position absolute
         right 10px
         height 47px
      .play
        position relative
        box-sizing border-box
        background-image: url('../../../img/catdringk.png')
        background-repeat no-repeat
        background-position center
        background-size 375px 210px
        width 100%
        height 210px
        a
          display block
          width 20px
          height 20px
          background url("../../../img/play.png"),center,no-repeat
          background-size 20px 20px
          position absolute
          top 50%
          margin-top -10px
          left 50%
          margin-left -10px


          //体验馆
    .tiyanguan
      width 100%
      .tiyanguanTitle
        width 100%
        height 62px
        text-align center
        padding-top 10px
        &>img
          height 52px
          vertical-align top
        &>a
          display inline-block
          height 62px
          line-height 62px
          vertical-align top
          margin-left 300px
          &>img
              vertical-align top
              height 47px
              margin-top -48px
      .tiyanguanMain
        width 100%
        height 159px
        img
          width 100%
          //品牌特卖
    .pinpaiWrap
      width 100%
      .title
        width 100%
        height 53px
        border-bottom 1px solid rgb(231,231,231)
        text-align center
        img
          height 100%


          //他公益
    .tagongyi
      width 100%
      position relative
      .tagongyiTitle
        width 100%
        height 45px
        text-align center
        &>img
          height 45px
        &>a
          position absolute
          right 10px
          line-height 45px
          display inline-block
          &>img
            height 11px
            margin 10px 5px 0px 0px
      .tagongyiMain
        width 100%
        height 140px
        background url("../../../img/c59cb143b0ce0e77fbb0e6cdf7af702e.jpg") center no-repeat
        background-size 100% 100%
        .tagongyiContent
          font-size 14px
          color white
          box-sizing border-box
          padding-top 20px
          text-align center
          font-family: 'Microsoft Yahei' -apple-system-font,Helvetica Neue sans-serif
          &>p
            line-height 1.6
            margin-top 5px
            &>b
              color red
              background-color white
              text-align center
              height 10px
              border-radius 5px
              padding 0 5px
              margin 0 5px
              font-weight 400


    //口碑评价
    .commentsWrap
      width 100%
      .commentTitle
        width 100%
        height 45px
        text-align center
        color rgb(156,156,156)
        position relative
        &>img
          height 100%
        &>a
          font-size 12px
          display inline-block
          position absolute
          line-height 45px
          right 10px


      .commentList
        width 100%
        display flex
        justify-content space-around
        flex-wrap wrap

        li
          margin-top 10px
          width 172px
          height 239px
          background-color rgb(245,245,245)
          .commentPic
            position relative
            width 100%
            height 172px
            &>img
              width 100%
              height 150px
            .commentMark
              position absolute
              bottom 22px
              width 100%
              background-color rgba(0,0,0,.4)
              text-align center
              color white
              font-size 12px
            .username
              width 100%
              height 12px
              padding 0 5px
              color gray
              box-sizing border-box
              .hostName
                float left
              .catName
                float right


          .commentFont
            width 100%
            height 60px
            color #999
            font-size 13px
            padding 0 5px
            box-sizing border-box
            line-height: 1.6
            font-family  'Microsoft Yahei' -apple-system-font Helvetica Neue sans-serif
            overflow hidden
    .concatFooter
      width 100%
      height 85px
      box-sizing border-box
      padding-top 20px

      .aboutus
        width 100%
        padding 15px 0 5px
        text-align center
        box-sizing border-box
        font-size 14px
        font-family  'Microsoft Yahei' -apple-system-fontHelvetica Neuesans-serif
        height 19px
        line-height 19px
        &>span
          color red
          padding 0 5px
        &>a
          color black
          padding 0 5px

      .concat
        margin-top 15px
        width 100%
        height 41px
        box-sizing border-box
        padding-bottom 25px
        font-size 12px
        text-align center
//底部描述
//底部

</style>
