<template>
    <div class="classifyList">
      <div class="classifyLeft">
        <ul class="classifyLi" >
          <scroller>
            <li v-for="(sort,index) in sorts" :key="index"  class="classLi" @click="showDetail(sort)">{{sort.name}}</li>
          </scroller>
        </ul>
      </div>

     <div class="classifyRight">
       <div class="classifyRightWraper">
         <h3>{{sort.name}}</h3>
         <ul >
           <li v-for="(detail,index) in sort.details" :key="index">

             <div>
               <img :src="detail.pic" alt="">
             </div>
             <p>{{detail.text}}</p>

           </li>
         </ul>
       </div>


     </div>

    </div>


</template>
<script>

    export default {
        props:{
            sorts:Array
        },
      data(){
        return {
          sort:{}

        }
      },
      methods:{
        showDetail(sort){
            this.sort=sort
        }
      },
        components: {},
      computed:{

      }

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
.classifyList
  width 100%
  height 600px
  background-color rgb(231,231,231)
  margin-top 3px
  position relative
  .classifyLeft
    position absolute
    left 0
    display inline-block
    width 18%
    height 567px

    ul
      margin-top 1px
      margin-right 2%
      width 100%
      box-sizing border-box
      li
        background-color white
        height 60px
        line-height 40px
        font-size 14px
        text-align center
        margin 1px 0
  .classifyRight

    position absolute
    right 0
    display inline-block
    width 80%
    /*background-color pink*/
    height 60px
    .classifyRightWraper
      width 300px
      background-color white
      h3
        margin-top 10px
        box-sizing border-box
        padding-top 20px
        height 40px
        padding-left 25px
        font-size 12px
        border-bottom 1px solid rgb(231,231,231)
      &>ul
        width 300px
        padding 15px 5px 20px 5px
        box-sizing border-box
        display flex
        justify-content space-around
        flex-wrap wrap

        &>li
          margin-bottom 20px
          width 86px
          height 116px
          line-height 1.6
          font-family 'Microsoft Yahei' -apple-system-font Helvetica Neue sans-serif
          font-size 14px
          /*background-color #007aff*/
          display flex
          justify-content space-around
          flex-wrap wrap
          img
            width 86px
            height  86px



</style>
