<template>
  <div class="echarts" :id="idName"></div>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
import { onMounted, watch } from 'vue'
import * as echarts from 'echarts'
// 手动引入 ECharts 各模块来减小打包体积
// import {
//   CanvasRenderer
// } from 'echarts/renderers'
// import {
//   BarChart
// } from 'echarts/charts'
// import {
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent,
//   GridComponent
// } from 'echarts/components'

// echarts.use([
//   CanvasRenderer,
//   BarChart,
//   GridComponent,
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent
// ])
export default {
  name:'VueEcharts',
  props:{
    option:Object,
    theme:[String,Object]
  },
  setup(props) {
    let dom;
    let chart;
    const uuid = uuidv4()
    let idName = `${uuid}-echarts`
    const initChart = () => {
      if(!chart){
        dom = document.getElementById(idName)
        chart = echarts.init(dom,props.theme)
      }
      if(props.option){
        chart.setOption(props.option)
      }
    }
    onMounted(() => {
      

      initChart()
    })
    watch(() => props.option , (n,o) => {
      initChart()
    })
    return{
      idName
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>