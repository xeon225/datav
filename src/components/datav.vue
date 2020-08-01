<template>
<div>
  <dv-full-screen-container class="padding5">
    <!-- <dv-loading>Loading...</dv-loading> -->
    <div class="dataTitle text-center text-white flex-container">
      <dv-decoration-8 style="width:300px;height:50px;" />
      <dv-decoration-5 style="width:900px;height:50px;"/><!-- 天狗大屏数据展示 --></div>
      <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
    </div>
    <div class="clearfix" style="height:calc(100% - 100px);width:100%;">
      <div class="dataLeft">
        <dv-border-box-13>
          <left_1 msg="这是一个图表"></left_1>
          <left_2 msg="这是一个动态环图"></left_2>
          <left_3 msg="这是一个水位图"></left_3>
          <left_4 msg="这是一个进度池"></left_4>
        </dv-border-box-13>
      </div>
      <div class="dataRight">
        <div class="dataRightUp">
          <dv-border-box-12>
            <up_1 msg="这是一个数据"></up_1>
            <up_2 msg="这是一个数据"></up_2>
            <up_3 msg="这是一个数据"></up_3>
            <up_4 msg="这是一个数据"></up_4>
            <up_5 msg="这是一个数据"></up_5>
            <up_6 msg="这是一个数据"></up_6>
          </dv-border-box-12>
        </div>
        <div class="dataRightDown">
          <right_1 msg="这是一个xy表"></right_1>
          <right_2 msg="这是一个xy表"></right_2>
          <right_3 msg="这是一个胶囊柱图"></right_3>
          <right_4 msg="这是一个轮播表"></right_4>
        </div>
      </div>
    </div>
      
  </dv-full-screen-container>
</div>
  
</template>

<script>
import left_1 from '@/components/left/left_1.vue';  //图表
import left_2 from '@/components/left/left_2.vue';  //动态环图
import left_3 from '@/components/left/left_3.vue';  //水位图
import left_4 from '@/components/left/left_4.vue';  //进度池
import right_1 from '@/components/right/right_1.vue';//xy表
import right_2 from '@/components/right/right_2.vue';//xy表
import right_3 from '@/components/right/right_3.vue';//胶囊柱图
import right_4 from '@/components/right/right_4.vue';//轮播表
import up_1 from '@/components/up/up_1.vue';//数字翻牌器
import up_2 from '@/components/up/up_2.vue';//数字翻牌器
import up_3 from '@/components/up/up_3.vue';//数字翻牌器
import up_4 from '@/components/up/up_4.vue';//数字翻牌器
import up_5 from '@/components/up/up_5.vue';//数字翻牌器
import up_6 from '@/components/up/up_6.vue';//数字翻牌器

export default {
  name: 'datav',
  props: {
    // msg: String
  },
  components: {
    left_1,
    left_2,
    left_3,
    left_4,
    right_1,
    right_2,
    right_3,
    right_4,
    up_1,
    up_2,
    up_3,
    up_4,
    up_5,
    up_6
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.dataTitle{
  height:100px;
  font-size:30px;
}
.dataLeft{
  width:300px;
  height:calc(100% - 10px);
  float:left;
}
.dataRight{
  width:calc(100% - 305px);
  height:calc(100% - 10px);
  float:right;
  margin-left:5px;
}
.dataRightUp{
  height:150px;
}
.dataRightDown{
  height:calc(100% - 155px);
  margin-top:5px;
}
.left_box{
  height:calc(100% / 4);
  &:first-child{
     &>div{
      &:after{
        content:none;
      }
    }
  }
  &>div{
    height:calc(100% - 10px);
    width:calc(100% - 20px);
    padding:5px 10px;
    position:relative;
    &:after{
      content:'';
      position:absolute;
      height:1px;
      background:#2e6099;
      left:5%;
      right:5%;
      top:0;
    }
  }
}
.right_box{
  height:50%;
  width:50%;
  float:left;
  &>div{
    height:calc(100% - 5px);
    width:calc(100% - 5px);
  }
  &:nth-of-type(1){
    &>div{
      padding:0 2.5px 2.5px 0;
    }
  }
  &:nth-of-type(2){
    &>div{
      padding:0 0 2.5px 2.5px;
    }
  }
  &:nth-of-type(3){
    &>div{
      padding:2.5px 2.5px 0 0;
    }
  }
  &:nth-of-type(4){
    &>div{
      padding:2.5px 0 0 2.5px;
    }
  }
}
.dvTitle{
  color:#fff;
  font-size:24px;
  height:20%;
}
.dvTitle2{
  color:#fff;
  font-size:24px;
  height:35%;
}
.up_box{
  width:15%;
  float:left;
  height:100%;
  &:first-child{
    width:25%;
    &>div{
      &:after{
        content:none;
      }
    }
  }
  &>div{
    height:calc(100% - 10px);
    width:calc(100% - 10px);
    padding:5px 10px 5px 0;
    position:relative;
    &:after{
      content:'';
      position:absolute;
      width:1px;
      background:#2e6099;
      top:10%;
      bottom:10%;
      left:0;
    }
  }
}
</style>
