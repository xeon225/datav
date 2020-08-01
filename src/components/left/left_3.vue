<template>
  <div class="left_box">
    <div>
        <div class="dvTitle flex-container bottom center">{{msg}}</div>
        <div class="flex-container center margint20">
          <dv-water-level-pond :config="dvWaterOption" style="width:110px;height:110px"/>
        </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'left_3',
  props: {
    msg: String
  },
  data:function(){
    return {
      //图表
      dvWaterOption:{
        data: [66, 45],
        shape: 'round'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.left_box .dv-water-pond-level{
  border: 10px solid #19c3eb;
  border-radius: 50%;
  canvas {
    margin: 8px;
  }
  ellipse {
    stroke: transparent!important;
  }
}
</style>
