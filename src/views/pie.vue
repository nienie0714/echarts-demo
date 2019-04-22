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
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)" // a 系列名称  b 数据项名称  c 数值  d 百分比
          },
          toolbox:{
            show: true,
            feature: {
              mark: {
                show: true
              },
              dataView: {
                show: true,
                readOnly: true
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '群发广告', '视频广告', '搜索引擎']
          },
          calculable: true,//2.7版本可以拖拽和计算
          series: [{
            name: '访问来源',
            type: 'pie',// pie:饼图
            // radius: '55%',
            radius: ['55%', '70%'], // 环图
            avoidLabelOverlap: false,// 防止标签内重叠
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {// 具体每一项的配置
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '直接访问', selected: true},
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
