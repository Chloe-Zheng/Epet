<template>

      <div class="header">



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
