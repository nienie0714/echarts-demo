<template>
  <div class="render pt">
    <v-header title="饼状图" back></v-header>
    <div class="content">
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
            text: '某站点用户访问来源',
            subtext: '柱状图、折线图',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '群发广告', '视频广告', '搜索引擎']
          },
          series: [{
            name: '访问来源',
            type: 'pie',// pie:饼图
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '群发广告'},
              {value: 135, name: '视频广告'},
              {value: 600, name: '搜索引擎'}
            ]
          }]
        })
    }
    }
  }
</script>

<style lang="less" scoped>
</style>
