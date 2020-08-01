<template>
  <div class="left_box">
    <div>
        <div class="dvTitle flex-container bottom center">{{msg}}</div>
        <div class="flex-container center margint20">
          <dv-percent-pond :config="dvPercentOption" style="width:150px;height:120px"/>
        </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'left_4',
  props: {
    msg: String
  },
  data:function(){
    return {
      //图表
      dvPercentOption:{
        value: 66,
        borderWidth: 10,
        borderRadius: 10,
        borderGap: 5
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
