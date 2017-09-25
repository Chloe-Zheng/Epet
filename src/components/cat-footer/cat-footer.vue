<template>
  <div class="footer">
    <div class="footerListWrap">
      <ul class="footerList">
        <li><router-link to="/catShouye" class="shouye"></router-link></li>
        <li><router-link to="/catFooterFenlei" class="fenlei"></router-link></li>
        <li ><router-link to="/catFooterShaopcart" class="gouwuche"></router-link></li>
        <li ><router-link to="/catFooterMyepet" class="myEchong"></router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>


</template>
<script>
    export default {
      props:{
        showFooter:Function
      },
      mounted(){
          console.log(this.showFooter)
      },
      methods:{

      },
        components: {}

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer
    width 100%
    height 55px
    position: fixed
    bottom 0
    background-color white

    .footerListWrap
      width 100%
      height 100%
      .footerList
        width 100%
        height 100%
        display flex
        li
          width 25%
          .shouye
            background-image url("../../../img/main_cattab_1_sel.png")
          .fenlei
            background-image url("../../../img/main_tab_2.png")
          .gouwuche
            background-image url("../../../img/main_tab_3.png")
          .myEchong
            background-image url("../../../img/main_tab_4.png")
          &>a
            width 100%
            height 100%
            display block
            /*background-image url("../../../img/main_cattab_1_sel.png")*/
            background-size 50px 50px
            background-position center
            background-repeat no-repeat

</style>
