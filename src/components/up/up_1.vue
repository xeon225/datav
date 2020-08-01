<template>
  <div class="up_box">
    <div>
        <div class="dvTitle2 flex-container bottom center">{{msg}}</div>
        <div class="flex-container center bottom" style="width:100%;height:50%">
          <dv-digital-flop :config="dvDigitalOption" class="marginr10" style="height:50px;width:240px;"/>
          <div class="text-white fs-16 text-bolder" style="line-height: 38px;">万元</div>
        </div>
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
      dvDigitalOption:{
        number: [1000000],
        content: '{nt}',
        textAlign:'right',
        style: {
          fontSize: 50,
          fill: 'orange',
          fontWeight:'bold'
        },
        formatter:4
      }
    }
  },
  mounted(){
    window.setInterval(() => {
      this.dvDigitalOption = {
        number: [this.dvDigitalOption.number[0]+Math.round(Math.random()*100)],
        content: '{nt}',
        textAlign:'right',
        style: {
          fontSize: 50,
          fill: 'orange',
          fontWeight:'bold'
        },
        formatter:4
      }
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
