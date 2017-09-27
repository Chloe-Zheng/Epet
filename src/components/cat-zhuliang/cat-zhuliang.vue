<template>
    <div>
<h2>主梁</h2>
    </div>


</template>
<script>
    export default {
        components: {}

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
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
        /*height 87px*/
        display flex
        flex-wrap wrap
        li
          width 25%
          height 87px
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
</style>
