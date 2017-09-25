<template>
    <div>
      <div class="normalLoginWrap" v-show="state==1">
        <ul class="normalLoginTab">
          <li class="useIcon">
            <input type="text" placeholder="手机号/邮箱/用户名">
          </li >
          <li class="pswIcon"><input type="text" placeholder="输入密码"></li>
        </ul>
        <div class="forgetPsw"><a href="https://wap.epet.com/login.html?do=findpassword">忘记密码?</a></div>
        <div class="login"><a href="javascript:void(0)">登录</a></div>
        <div class="discount">
          <span>APP专享:E宠团5折包邮,首单满99送99</span>
          <a href="https://wap.epet.com/download.html?appname=epetmall">去下载</a>
        </div>
      </div>
      <div class="activepsLoginWrap" v-show="state==2">
        <ul class="normalLoginTab">
          <li class="useIcon">
            <input type="text" placeholder="已注册的手机号">
          </li >
          <li class="pswIcon">
            <input type="text" placeholder="请输入图片内容">
            <img class="codevar" src="../../../static/img/seccode.png" alt="">
          </li>
          <li class="actPswIcon">
            <input type="text" placeholder="动态密码">
            <span class="actPws">获取动态密码</span>
          </li>
        </ul>
        <div class="forgetPsw"><a href="https://wap.epet.com/login.html?do=findpassword">忘记密码?</a></div>
        <div class="login"><a href="javascript:void(0)">登录</a></div>
        <div class="discount">
          <span>APP专享:E宠团5折包邮,首单满99送99</span>
          <a href="https://wap.epet.com/download.html?appname=epetmall">去下载</a>
        </div>
      </div>
      </div>





</template>
<script>
    export default {
        props:{
            state:Number
        },
        components: {}

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .normalLoginWrap
    width 100%
    padding 0 15px
    box-sizing border-box

    .normalLoginTab
      width 100%
      li
        margin 0 5px
        width 100%
        /*background-color pink*/
        border-bottom 1px solid rgb(231,231,231)
        box-sizing border-box
        padding 12px 0 12px 30px
        height 46px
        input
          outline none
      .useIcon
        background url("../../../static/img/ico3.png") no-repeat
        background-size 18px 18px
        background-position left center
      .pswIcon
        background url("../../../static/img/ico4.png") no-repeat
        background-size 17px 21px
        background-position left center

    .forgetPsw
      width 100%
      height 20px
      margin 10px 0 5px
      text-align right
      a
        width 100%
        height 20px
        display block
        font-size 14px

    .login
      display block
      width 100%
      height 38px
      padding 9px 0
      box-sizing border-box
      background-color #2ec975
      text-align center
      border-radius 5px
      a
        color white
        font-size 15px

    .discount
      width 100%
      /*padding 0 20px*/
      margin 10px 0 5px
      text-align center
      font-size 13px


  .activepsLoginWrap
    width 100%
    padding 0 15px
    box-sizing border-box

    .normalLoginTab
      width 100%
      li
        margin 0 5px
        width 100%
        /*background-color pink*/
        border-bottom 1px solid rgb(231,231,231)
        box-sizing border-box
        padding 12px 0 12px 30px
        height 46px
        input
          outline none
      .useIcon
        background url("../../../static/img/ico1.png") no-repeat
        background-size 18px 18px
        background-position left center
      .pswIcon
        background url("../../../static/img/ico4.png") no-repeat
        background-size 17px 21px
        background-position left center
        position relative
        .codevar
          position absolute
          width 85px
          height 30px
          top 5px
          right 20px
      .actPswIcon
        background url("../../../static/img/ico4.png") no-repeat
        background-size 17px 21px
        background-position left center
        position relative
        .actPws
          position absolute
          width 100px
          height 30px
          border 1px solid red
          border-radius 3px
          color red
          font-size 13px
          line-height 30px
          box-sizing border-box
          text-align center
    .forgetPsw
      width 100%
      height 20px
      margin 10px 0 5px
      text-align right
      a
        width 100%
        height 20px
        display block
        font-size 14px

    .login
      display block
      width 100%
      height 38px
      padding 9px 0
      box-sizing border-box
      background-color #2ec975
      text-align center
      border-radius 5px
      a
        color white
        font-size 15px

    .discount
      width 100%
      /*padding 0 20px*/
      margin 10px 0 5px
      text-align center
      font-size 13px


</style>
