<template>

      <div class="header">
        <div class="overflow xiazaiApp " v-show="isShow">
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



</template>
<script>
  import BScroll from 'better-scroll'
    export default {

      data(){
          return {
            isShow:true
          }
      },
      methods:{
        toggleDownload(){
          this.isShow=!this.isShow
        }
      }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    position fixed
    background-color white
    z-index 100
    top 0
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
      /*background-color pink*/
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





</style>
