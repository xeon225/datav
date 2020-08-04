<template>
  <div id="app">
    <full-page :options="options" ref="fullpage">
      
      <div class="section">
        <datav></datav>
      </div>
      <div class="section">
        <div class="slide" v-for="(item,index) in slideImg" :key="index">
          <img :src="item" width="100%" alt="">
        </div>
      </div>
      <div class="section">
        <video-player class="video-player vjs-custom-skin" 
          ref="videoPlayer" 
          :playsinline="true" 
          @ended="onPlayerEnded()"
          :options="playerOptions">
        </video-player>
      </div>
    </full-page>
    
  </div>
</template>

<script>
import datav from './components/datav.vue'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  name: 'App',
  components: {
    datav,
    videoPlayer
  },
  data(){
    return {
      options: {
        controlArrows:false,
        loopHorizontal:true,
        scrollingSpeed:1000,
        keyboardScrolling: true,
        continuousVertical: false,
        afterLoad: this.afterLoad,
        slideSelector: ".slide"
        // beforeChange: function (prev, next) {
        // },
        // afterChange: function (prev, next) {
        // }
      },
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: true, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4", // 类型
          src: require('./assets/test2.mp4') // url地址
        }],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: false // 是否显示全屏按钮
        }
      },
      slideImg:[
        require('./assets/001.jpg'),
        require('./assets/002.jpg'),
        require('./assets/003.jpg'),
        require('./assets/004.jpg'),
        require('./assets/005.jpg')
      ],
      timer:'',
      timerSlide:'',
      tData:3000,  //大屏数据时间
      tSlide:10000, //图片轮播时间
      tVideo:15000  //视频显示时间
    }
  },
  methods:{
    moveSectionInit(t){
      var time = t || 3000;
      console.log(time)
      this.timer = setInterval(()=>{this.$refs.fullpage.api.moveTo(1,0);},time)
    },
    moveSection(t){
      var time = t || 3000;
      console.log(time)
      this.timer = setInterval(()=>{this.$refs.fullpage.api.moveSectionDown();},time)
    },
    moveSlide(t){
      var time = t || 3000;
      this.timerSlide = setInterval(()=>{this.$refs.fullpage.api.moveSlideRight();},time)
    },
    videoPlay(){
      this.$refs.videoPlayer.player.play() 
    },
    videoStop(){
      this.$refs.videoPlayer.player.pause()
    },
    // 视频播完回调
    onPlayerEnded() {
      console.log(`player`)
    },
    beforeRouteLeave(){
        clearInterval(this.timer)
        clearInterval(this.timerSlide)
        this.videoStop()
    },
    afterLoad:function(anchors,item){
      // console.log(item)
      if (item.index === 0) {
        this.beforeRouteLeave();
        this.moveSection(this.tData);
      }else if (item.index === 1) {
        this.beforeRouteLeave();
        this.moveSlide(this.tSlide/this.slideImg.length)
        this.moveSection(this.tSlide);
      }else if (item.index === 2) {
        this.beforeRouteLeave();
        this.videoPlay();
        this.moveSectionInit(this.tVideo);
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
