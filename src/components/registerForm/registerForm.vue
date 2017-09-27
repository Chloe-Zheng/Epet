<template>
    <div class="registerWrapper">
      <div class="registerPhoneWrap" v-show="this.showRegisterList">
        <ul class="registerPhone"  >
          <li><input type="number" autocomplete="off" placeholder="请输入注册的手机号" v-model="registNumbers"></li>
        </ul>
        <div class="registerNext" @click="showRegisters()"><a href="javascript:;" :class="{'active':registNumbers}">下一步</a></div>
      </div>
      <div class="registerFormWrap" v-show="!this.showRegisterList">
        <ul class="registerForm" >
          <li class="registNum"><input type="text" readonly="readonly" :value="this.registNumbers"></li>
          <li class="registPic"><input type="text" placeholder="图片验证码" v-model="registPicVal"><img class="registImg" src="../../../static/img/seccode.png" alt=""></li>
          <li class="registCode"><input type="text" placeholder="验证码" v-model="registCodeVal"><a href="javascript:;">获取短信验证码</a></li>
          <li class="registNickname"><input type="text" placeholder="你的昵称/用户名" v-model="registNicknameVal"></li>
          <li class="registPsw"><input type="password" placeholder="请设置密码" v-model="registPswVal"></li>
          <li class="registConfirmPsw"><input type="password" placeholder="请确认密码" v-model="registConfirmPswVal"></li>
        </ul>
        <div class="registerNext" ><a href="javascript:;" @click="this.confirmPsw">下一步</a></div>
      </div>

    </div>


</template>
<script>
  import axios from 'axios'
  import {MessageBox} from 'mint-ui'
    export default {
        /*props:{
          registerShow:Booleans
        },*/
        data(){
          return {
            showRegisterList:true,
            registNumbers:'',
            registPicVal:'',
            registCodeVal:'',
            registNicknameVal:'',
            registPswVal:'',
            registConfirmPswVal:''

          }
        },
      mounted(){

      },
      methods:{
          //验证电话号码
        showRegisters(){
            this.registNumbers=this.registNumbers.trim()
            console.log(this.registNumbers)
            const reg=/^1[3|4|5|7|8|9]\d{9}$/

          this.showRegisterList=reg.test(this.registNumbers)?false:true
          if(this.showRegisterList){
            MessageBox('请输入正确的电话号码')
          }
        },
        //验证密码
        confirmPsw(){
          const regPsw=/^\w{6,9}$/
          this.registPswVal=this.registPswVal.trim()
          this.registConfirmPswVal=this.registConfirmPswVal.trim()
          const {registPswVal,registConfirmPswVal,registNicknameVal}=this
          if(regPsw.test(registPswVal)){
            if(registPswVal==registConfirmPswVal){

              /*MessageBox('注册成功','快去逛逛吧~~~')*/
              MessageBox.alert('注册成功，快去逛逛吧~~~').then(action => {
                axios.get('./api/userMsg?username=admin&password=123123')
                  .then((response)=>{
                    const code=response.data
                    console.log(code)
                  })
              })

            }else {
              MessageBox('密码设置错误~~~')

            }
          }else {
            MessageBox('密码格式不正确~~~')

          }

        }

      },
        components: {

        }

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
.registerWrapper
  width 100%
  height 100%
  background-color white
  .registerPhoneWrap
    width 100%
    padding 0 15px
    box-sizing border-box
    .registerPhone
      width 100%
      li
        margin 0 5px
        width 100%
        /*background-color pink*/
        border-bottom 1px solid rgb(231,231,231)
        box-sizing border-box
        padding 12px 0 13px 30px
        height 46px
        background url("../../../static/img/ico1.png") no-repeat
        background-size 13px 18px
        background-position left center
        input
          outline none

    .registerNext
      margin-top 40px
      font-size 14px
      height 30px
      width 100%
      text-align center

      a
        background-color rgb(231,231,231)
        border-radius 15px
        display inline-block
        width 300px
        text-align center
        height 30px
        line-height 30px
        color white
      .active
        background-color darkred


  .registerFormWrap
    width 100%
    padding 0 15px
    box-sizing border-box
    .registerForm
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

      .registNum
        background url("../../../static/img/ico1.png") no-repeat
        background-size 13px 18px
        background-position left center
      .registPic
        background url("../../../static/img/ico5.png") no-repeat
        background-size 18px 18px
        background-position left center
        position relative
        .registImg
          position absolute
          width 85px
          height 30px
          top 5px
          right 20px
      .registCode
        background url("../../../static/img/ico2.png") no-repeat
        background-size 18px 18px
        background-position left center
        input
          width 190px
          height 20px
        a
          display inline-block
          padding 10px 10px
          font-size 14px
          background-color orange
          color white
          vertical-align top
          border-radius 15px
      .registNickname
        background url("../../../static/img/ico3.png") no-repeat
        background-size 18px 18px
        background-position left center
      .registPsw
        background url("../../../static/img/ico4.png") no-repeat
        background-size 18px 18px
        background-position left center
      .registConfirmPsw
        background url("../../../static/img/ico4.png") no-repeat
        background-size 18px 18px
        background-position left center

    .registerNext
      margin-top 40px
      font-size 14px
      height 30px
      width 100%
      text-align center

      a
        background-color rgb(231,231,231)
        border-radius 15px
        display inline-block
        width 300px
        text-align center
        height 30px
        line-height 30px
        color white


  .close
    margin 200px auto 0
    height 30px
    line-height 30px
</style>
