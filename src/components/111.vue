<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <dv-full-screen-container>
      <!-- <dv-loading>Loading...</dv-loading> -->
      <div class="flex-container marginb10" style="height:30%">
        <dv-border-box-1>
          <!-- 图表 -->
          <dv-charts :option="dvChartsOption" />
        </dv-border-box-1>
        <dv-border-box-2 class="marginl10">
          <!-- 动态环图 -->
          <div class="flex-container center" style="height:100%;">
            <dv-active-ring-chart :config="dvChartsRCOption" style="width:300px;height:300px" />
          </div>
        </dv-border-box-2>
        <dv-border-box-3 class="marginl10">
          <!-- 胶囊柱图 -->
          <div class="flex-container center" style="height:100%;">
            <dv-capsule-chart :config="dvChartsRCOption" style="width:400px;height:260px" />
          </div>
        </dv-border-box-3>
      </div>
      <div class="flex-container" style="height:70%">
        <dv-border-box-13>
          <!-- 水位图 -->
          <dv-water-level-pond :config="dvWaterOption" style="width:150px;height:200px" />
          <!-- 进度池 -->
          <dv-percent-pond :config="dvCapsule" style="width:200px;height:100px;" />
        </dv-border-box-13>
        <dv-border-box-4 class="marginl10">
          <dv-charts :option="option"  style="width:100%;height:450px;"/>

        </dv-border-box-4>
        <dv-border-box-5 class="marginl10">
          <dv-digital-flop :config="config1" style="width:200px;height:50px;" />

        </dv-border-box-5>
        <dv-border-box-6 class="marginl10">
          <dv-scroll-board :config="dvScrollOption" style="width:100%;height:100%" />

        </dv-border-box-6>
      </div>
      
      
    </dv-full-screen-container>
    
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
const config1 = {
  number: [100],
  content: '{nt}个'
}
const config2 = {
  number: [20000],
  content: '{nt}个'
}

export default {
  name: 'App',
  data:function(){
    return {
      //图表
      dvChartsOption:{
        title: {
          text: '系统负荷率',
          style: {
            fill: '#fff'
          }
        },
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
      },
      //动态环图
      dvChartsRCOption: {
        radius: '60%',
        activeRadius: '75%',
        data:[
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
        ]
      },
      //水位图
      dvWaterOption:{
        data: [55],
        shape: 'roundRect'
      },
      dvCapsule:{
        value: 66,
        lineDash: [10, 2]
      },
      dvScrollOption:{
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
        ]
      },
      times:true,
      config1,
      config2,
      option: {
        legend: {
          data: ['设备完好率'],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '10/01', '10/02', '10/03', '10/04', '10/05', '10/06',
            '10/07', '10/07', '10/08', '10/09', '10/10', '10/11',
            '10/12', '10/13', '10/14', '10/15'
          ],
          boundaryGap: false,
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            },
            formatter ({ value }) {
              return value.toFixed(2)
            }
          },
          axisTick: {
            show: false
          },
          min: 95,
          max: 100,
          interval: 0.5
        },
        series: [
          {
            data: [
              99.56, 99.66, 99.84, 99.22, 99.11, 99.45,
              99.44, 99.81, 99.84, 99.32, 99.14, 99.45,
              99.15, 99.45, 99.64, 99.89
            ],
            type: 'line',
            name: '设备完好率',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          }
        ]
      }
    }
  },
  mounted(){
    window.setInterval(() => {
      console.log(config1.number[0])
      // this.config1.number[0] = 200
      this.config1 = {
        number: [this.config1.number[0]+100],
        content: '{nt}个'
      }
    }, 2000)
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
body{
  background:black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
