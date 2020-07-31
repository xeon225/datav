<template>
<div>
  <dv-full-screen-container>
    <!-- <dv-loading>Loading...</dv-loading> -->
      <div class="dataLeft">
        <left_1 msg="这是一个图表"></left_1>
        <left_2 msg="这是一个动态环图"></left_2>
        <left_3 msg="这是一个水位图"></left_3>
        <left_4 msg="这是一个进度池"></left_4>
      </div>
      <div class="dataRight">
        <div class="dataRightUp"></div>
        <div class="dataRightDown">
          <right_1 msg="这是一个xy表"></right_1>
          <right_2 msg="这是一个xy表"></right_2>
          <right_3 msg="这是一个胶囊柱图"></right_3>
          <right_4 msg="这是一个轮播表"></right_4>
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
    right_4
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.dataLeft{
  width:300px;
  height:100%;
  float:left;
}
.dataRight{
  width:calc(100% - 300px);
  height:100%;
  float:right;
}
.dataRightUp{
  height:200px;
}
.dataRightDown{
  height:calc(100% - 200px);
}
.left_box{
  height:calc(100% / 4);
  &>div{
    height:calc(100% - 10px);
    width:calc(100% - 20px);
    padding:5px 10px;
  }
}
.right_box{
  height:50%;
  width:50%;
  float:left;
  &>div{
    height:calc(100% - 10px);
    width:calc(100% - 10px);
    padding:5px 10px 5px 0;

  }
}
.dvTitle{
  color:#fff;
  font-size:24px;
  height:20%;
}
</style>
