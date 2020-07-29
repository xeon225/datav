<template>
<div>
  <dv-full-screen-container>
    <!-- <dv-loading>Loading...</dv-loading> -->
      <div class="dataLeft flex-container-col vfull">
        <left_1 class="flex1"></left_1>
        <!-- <left_1 class="flex1"></left_1>
        <left_1 class="flex1"></left_1>
        <left_1 class="flex1"></left_1> -->
        <!-- <div class="flex1 bg-red">1s</div> -->
        <div class="flex1 bg-blue">1</div>
        <div class="flex1 bg-red">2</div>
        <div class="flex1 bg-green">3</div>
      </div>
      <div class="dataRight"></div>
      
  </dv-full-screen-container>
</div>
  
</template>

<script>
import left_1 from '@/components/left/left_1.vue'
export default {
  name: 'datav',
  props: {
    // msg: String
  },
  components: {
    left_1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
