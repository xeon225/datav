<template>
  <div class="right_box">
    <div>
      <dv-border-box-12>
        <dv-scroll-board :config="dvCapsuleOption" style="width:100%;height:100%"/>
      </dv-border-box-12>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'right_4',
  props: {
    msg: String
  },
  data:function(){
    return {
      //图表
      dvCapsuleOption:{
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ],
        rowNum:8
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
