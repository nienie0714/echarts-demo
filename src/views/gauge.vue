<template>
  <div class="render pt">
    <v-header title="仪表图" back></v-header>
    <div class="content">
      <div id="myChart" :style="{width: '400px', height: '300px'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myChart: null,
      options: {
        title: {
          show: true,
          text: '业务指标',
          subtext: '仪表图'
        },
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          name: '业务指标',
          type: 'gauge',// gauge:仪表图
          detail: {formatter: '{value}%'},
          data: [
            {value: 32, name: '完成率'}
          ]
        }]
      }
    }
  },
  mounted() {
    this.drawLine()
    this.reValue()
  },
  created() {
  },
  methods: {
    drawLine() {
      // 基于准备好的dom,初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      this.myChart.setOption(this.options)
    },
    reValue() {
      // setInterval(() => {
      //   console.log(this.options.series[0].data[0])
      //   this.$set(this.options.series[0].data[0], value, (Math.random() * 100).toFixed(2) - 0)
      //   this.myChart.setOption(this.options, true)
      // }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
