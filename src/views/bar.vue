<template>
  <div class="lifecycle pt">
    <v-header title="柱状图" back></v-header>
    <div class="centent">
      <div id="myChart" :style="{width: '400px', height: '300px'}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
  },
    mounted() {
      this.drawLine()
  },
    methods: {
      drawLine() {
        // 基于准备好的dom,初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
          title: {
            show: true,
            text: 'echarts',
            subtext: '柱状图、折线图',
            left: 0
            // borderColor: 'red',
            // borderWidth: 4
          },
          tooltip: {
            trigger: 'axis'
          },
          // 工具箱
          toolbox: {
            show: true,
            feature: {
              dataView: {
                show: true
              },
              saveAsImage: {
                show: true
              },
              dataZoom: {
                show: true
              },
              restore: {
                show: true
              },
              magicType: {
                type: ['line', 'bar']
              }
            }
          },
          legend: {
            data: ['销量'],
            left: 90
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',// bar:直方图
            data: [5, 20, 10],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }, {
            name: '产量',
            type: 'line',// line:折线图
            data: [100, 80, 60]
          }]
        })
    }
    }
  }
</script>

<style lang="less" scoped>
</style>
