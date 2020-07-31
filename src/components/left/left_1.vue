<template>
  <div class="left_box">
    <div>
      <dv-border-box-8>
        <div class="dvTitle flex-container bottom center">{{msg}}</div>
        <dv-charts :option="dvChartsOption" style="width:100%;height:80%"/>
      </dv-border-box-8>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'left_1',
  props: {
    msg: String
  },
  data:function(){
    return {
      //图表
      dvChartsOption:{
        
        series: [
          {
            type: 'gauge',
            data: [ { name: 'itemA', value: 55 } ],
            center: ['50%', '55%'],
            axisLabel: {
              formatter: '{value}%',
              style: {
                fill: '#fff'
              }
            },
            axisTick: {
              style: {
                stroke: '#fff'
              }
            },
            animationCurve: 'easeInOutBack'
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
