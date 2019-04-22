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
            left: 0
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true, // 类目起始和结束两端空白策略，默认为true留空，false则顶头
              data : ['已值机', '已安检', '已登机', '隔离区', '计划出港']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '旅客数',
              nameTextStyle: {
                align: 'left'
              }
            }
          ],
          series: [{
            name: '旅客数',
            type: 'bar',
            data: [1000, 8, 600, 200, 1000],
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#027fcf',
                fontWeight: 'bold',
                fontSize: 14
              }
            },
            itemStyle:{
              normal:{
                color:function(params) {
                  if(params.value > 0 && params.value < 500) {
                    return "#FE8463"
                  } else if (params.value >=500 && params.value<=900) {
                    return "#27727B"
                  }
                  return "#9BCA63"
                }
              }
            }
          }]
        })
    }
    }
  }
</script>

<style lang="less" scoped>
</style>
