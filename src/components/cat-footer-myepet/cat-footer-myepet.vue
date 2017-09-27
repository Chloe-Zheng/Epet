<template>
    <div class="myPet">
      <registerForm v-show="this.registerShow" ></registerForm>
      <div class="myPetContent" v-show="!this.registerShow">
        <div class="myPetTitle">
          <div class="myPetTitleHeader">
            <router-link to="/catShouye"><span class="left"></span></router-link>
            <span class="regist" @click="showRegisterForm(true)">注册</span>
          </div>
          <div class="myPetTitleCenter">
            <span class="myPetPic"></span>
          </div>
          <div class="myPetTitleRouters">
              <div class="normalLogin" @click="isShow(1)">普通登录</div>
              <div class="activepsLogin" @click="isShow(2)">手机动态密码登录</div>
          </div>
        </div>
        <div class="sanjiaoxing">
          <span ><i v-show="this.state==1"></i></span>
          <span ><i v-show="this.state==2"></i></span>
        </div>
        <normalLogin :state="this.state"></normalLogin>
        <div class="space"></div>
        <div class='loginCompony'>
          <div class="loginComponyTitle"><span>合作网站登录</span></div>
          <div class="loginComponyPic">
            <a href="https://passport.epet.com/Oauth.html?type=4&returnurl=https://wap.epet.com/user/UserCenter.html"><span  class="zhifubao"></span></a>
            <a href="https://passport.epet.com/Oauth.html?type=2&returnurl=https://wap.epet.com/user/UserCenter.html"><span class="QQ"></span></a>
          </div>
        </div>
      </div>
    </div>


</template>
<script>
  import registerForm from '../registerForm/registerForm.vue'
  import normalLogin from '../normalLogin/normalLogin.vue'
    export default {
      data(){
          return {
            state:1,
            registerShow:false

          }

      },
      methods:{
        isShow(state){
           this.state=state
        },
        showRegisterForm(value){
            this.registerShow=value
        },
        computed:{

        },

        },
        components: {normalLogin,registerForm}

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .myPet
    width 100%
    height 667px
    background-color rgb(231,231,231)
    .myPetContent
      width 100%
      background-color white
      position relative
      .myPetTitle
        width 100%
        background url("../../../static/img/background.png") center no-repeat
        background-size 100% 172px
        box-sizing border-box
        .myPetTitleHeader
          height 50px
          position relative
          width 100%
          font-size 16px
          box-sizing border-box
          padding 0 10px
          line-height 50px
          text-align center
          .left
            display inline-block
            position absolute
            left 10px
            top 16px
            width 20px
            height 20px
            background url("../../../static/img/personal-bico3.png") center no-repeat
            background-size 14px 18px
          .regist
            position absolute
            display inline-block
            vertical-align top
            right 10px
            color white


        .myPetTitleCenter
          width 100%
          height 48px
          margin 10px 0 20px
          text-align center
          .myPetPic
            width 75px
            height 48px
            background url("../../../static/img/logo.png") center no-repeat
            background-size 75px auto
            display inline-block


        .myPetTitleRouters
          width 100%
          font-size 15px
          height 44px
          color white
          display flex
          justify-content space-around
          background-color rgba(255,255,255,.2)
          div
            height 44px
            line-height 44px
            text-align center
            width 50%

      //三角形
      .sanjiaoxing
        width 100%
        height 10px
        position absolute
        font-size 0
        /*background-color pink*/
        /*display flex
        justify-content space-around*/
        span
          display inline-block
          height 10px
          width 50%
          text-align center
          i
            display inline-block
            width 17px
            height 17px
            background-color white
            transform rotate(45deg)
            margin-top -9px
      .space
        height 100px
        width 100%
      .loginCompony
        width 100%
        .loginComponyTitle
          width 100%
          height 20px
          line-height 20px
          text-align center
          margin-top 8px
          color #d7d7d7
        .loginComponyPic
          width 100%
          box-sizing border-box
          padding 15px 0 15px 10px
          height 90px
          span
            display inline-block
            width 60px
            height 60px
            background-color pink
            margin 0 20px
         .zhifubao
            background url("../../../static/img/zhi.png") center no-repeat
            background-size 60px 60px
            border-radius 50% 50%
          .QQ
            background url("../../../static/img/QQ.png") center no-repeat
            background-size 60px 60px
            border-radius 50% 50%




</style>
