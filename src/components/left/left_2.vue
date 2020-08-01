<template>
  <div class="left_box">
    <div>
        <div class="dvTitle flex-container bottom center">{{msg}}</div>
        <dv-active-ring-chart :config="dataDvActive" style="width:100%;height:80%"/>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'left_2',
  props: {
    msg: String
  },
  data:function(){
    return {
      //图表
      dataDvActive:{
        title: {
          text: '系统负荷率',
          style: {
            fill: '#fff'
          }
        },
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
        ],
        lineWidth: 15
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
