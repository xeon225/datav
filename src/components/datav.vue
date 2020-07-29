<template>
<div>
  <dv-full-screen-container>
    <!-- <dv-loading>Loading...</dv-loading> -->
      <div class="dataLeft">
        <left_1></left_1>
        <left_1></left_1>
        <left_1></left_1>
        <left_1></left_1>
      </div>
      <div class="dataRight">
        <right_1></right_1>
        <right_1></right_1>
        <right_1></right_1>
        <right_1></right_1>
      </div>
  </dv-full-screen-container>
</div>
  
</template>

<script>
import left_1 from '@/components/left/left_1.vue';
import right_1 from '@/components/right/right_1.vue';
export default {
  name: 'datav',
  props: {
    // msg: String
  },
  components: {
    left_1,
    right_1
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
</style>
