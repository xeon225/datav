<template>
  <div id="app">
    <!-- <swiper class="text-white" style="" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <datav></datav>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
    </swiper> -->
    <full-page :options="options" ref="fullpage">
      <div class="section">
        <datav></datav>
      </div>
      <div class="section">
        <div class="slide">
          <h3 class="text-white">Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
    
  </div>
</template>

<script>
import datav from './components/datav.vue'

export default {
  name: 'App',
  components: {
    datav
  },
  data(){
    return {
      options: {
        scrollingSpeed:1000,
        keyboardScrolling: true,
        continuousVertical: true,
        afterLoad: this.afterLoad,
        // beforeChange: function (prev, next) {
        // },
        // afterChange: function (prev, next) {
        // }
      },
      swiperOptions:{
          //自动轮播
        autoplay: {
          delay: 3000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: true
      },
      timer:''
    }
  },
  methods:{
    moveDown(t){
      var time = t && 3000;
      this.timer = setInterval(()=>{this.$refs.fullpage.api.moveSectionDown();},time)
    },
    beforeRouteLeave(){
        clearInterval(this.timer)
        // next();
    },
    afterLoad:function(anchors,item){
      // console.log(item)
      if (item.index === 0) {
        this.beforeRouteLeave();
        this.moveDown(5000);
      }else if (item.index === 1) {
        this.beforeRouteLeave();
        this.moveDown(2000);
      }else if (item.index === 2) {
        this.beforeRouteLeave();
        this.moveDown(2000);
      }

    }
  }
}
</script>

<style>
body{
  background:black;
  margin:0;
}
.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.swiper-container{
  width:100%;
  height:100%;
  position:absolute !important;
  top:0;
  right:0;
  bottom:0;
  left:0
}
</style>
