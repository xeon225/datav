<template>
  <div class="right_box">
    <div>
      <dv-border-box-8>
        <div class="dvTitle flex-container center">{{msg}}</div>
        <div class="flex-container center top" style="height:70%">
          <dv-capsule-chart :config="dvCapsuleOption" style="width:80%;height:100%"/>
        </div>
      </dv-border-box-8>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'right_3',
  props: {
    msg: String
  },
  data:function(){
    return {
      //图表
      dvCapsuleOption:{
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
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
