<template>
  <div class="render pt">
    <v-header title="饼状图" back></v-header>
    <div class="content">
      <div id="fltAChartDb" :style="{width: '400px', height: '200px'}"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      fltAChartDb: '',
      fltADbOption: {
        series: [{
          name: '当前完成情况',
          type: 'pie',// pie:饼图
          radius: ['40%', '55%'],
          center: ['30%', '40%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center',
                  formatter: '{b}\n{d}%'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '14',
                      fontWeight: 'bold'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data: []
        },
        {
          name: '当天完成情况',
          type: 'pie',// pie:饼图
          radius: ['40%', '55%'],
          center: ['73%', '40%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center',
                  formatter: '{b}\n{d}%'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '14',
                      fontWeight: 'bold'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data: []
        }]
      }
    }
  },
  mounted() {
    this.fltAChartDb = this.$echarts.init(document.getElementById('fltAChartDb'))
    this.fltAChartDb.setOption(this.fltADbOption)
  },
  created() {
    this.queryFlightA()
  },
  methods: {
    ...mapActions(['ajax']),
    queryFlightA() {
      let that = this
      this.ajax({
        name: 'queryFlightA',
        data: { "inOutFlag": "A" }
      }).then(res => {
        // charts
        let temp = that.fltADbOption
        let currCompletionRate = res.currCompletionRate
        let dayCompletionRate = res.dayCompletionRate
        // 准点率
        let normalRate = res.normalRate
        // 正常进港
        let normalExecFlight = res.normalExecFlight
        // 延误进港
        let execDlyFlight = res.execDlyFlight
        // 当日取消
        let canFlight = res.canFlight
        // 未执行
        let noExecFligth = res.noExecFligth
        temp.series[0].data = [
          { value: currCompletionRate*100, name: '当前完成率'},
          { value: (1-currCompletionRate)*100, name: '当前未完成率'}
          ]
        temp.series[1].data = [
          { value: dayCompletionRate*100, name: '当天完成率'},
          { value: (1-dayCompletionRate)*100, name: '当天未完成率'}
          ]
        that.fltAChartDb.setOption(temp)

        let index = 0
        that.fltAChartDb.dispatchAction({type: 'highlight',seriesIndex: 0, dataIndex: 0})
        that.fltAChartDb.on('mouseover', function(e) {
        if (e.dataIndex != index) {
            that.fltAChartDb.dispatchAction({type: 'downplay', seriesIndex: 0, dataIndex: index})
          }
        })
        that.fltAChartDb.on('mouseout',function(e) {
          index = e.dataIndex
          that.fltAChartDb.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex: e.dataIndex})
        })

        let index2 = 0
        that.fltAChartDb.dispatchAction({type: 'highlight',seriesIndex: 1, dataIndex: 0})
        that.fltAChartDb.on('mouseover', function(e) {
        if (e.dataIndex != index2) {
            that.fltAChartDb.dispatchAction({type: 'downplay', seriesIndex: 1, dataIndex: index2})
          }
        })
        that.fltAChartDb.on('mouseout',function(e) {
          index2 = e.dataIndex
          that.fltAChartDb.dispatchAction({type: 'highlight',seriesIndex: 1,dataIndex: e.dataIndex})
        })
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
