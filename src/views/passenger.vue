<template>
  <div class="render pt">
    <v-header title="旅客信息" back></v-header>
    <div class="content">
      <div class="pass-out-wrapper">
        <div class="pass-title">旅客实时情况</div>
        <!-- &nbsp;&nbsp;&nbsp;{{queryPassData.statDate.substring(11)}} -->
        <div class="pass-wrapper">
          <div id="passChart" :style="{width: '330px', height: '300px', margin: '0 auto', marginTop: '-23px'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      passTimer: null,
      queryPassData: {
        "statDate": '',
        "checkinNum": 0,
        "verifyNum": 0,
        "boardNum": 0,
        "isolationNum": 0,
        "plannedTotalNum": 0
      },
      passChart: '',
      passOption: {
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {
              myTool1: {
                  show: true,
                  title: '刷新',
                  icon: 'M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5',
                  iconStyle: {
                    textPosition: 'top'
                  },
                  onclick: this.postPassenger
              }
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true, // 类目起始和结束两端空白策略，默认为true留空，false则顶头
            data : ['已值机', '已安检', '已登机', '隔离区', '计划出港'],
            axisLabel: {
              width: 20,
              interval: 0,
              rotate: 30,
              margin: 10
            }
          }
        ],
        grid: {
          left: '2%',
          right: '2%',
          bottom: '10%',
          containLabel: true
        },
        yAxis: [
          {
            type: 'value',
            name: '旅客数',
            nameTextStyle: {
              align: 'left'
            },
            nameGap: 20
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
                if(params.value > 0 && params.value < 5000) {
                  return "#FE8463"
                } else if (params.value >=5000 && params.value<=10000) {
                  return "#27727B"
                }
                return "#9BCA63"
              }
            }
          }
        }]
      }
    }
  },
  mounted() {
    // 旅客
    this.passChart = this.$echarts.init(document.getElementById('passChart'))
    this.passChart.setOption(this.passOption)
  },
  created() {
    clearInterval(this.passTimer)
    this.queryPassenger()
  },
  distroyed() {
    clearInterval(this.passTimer)
  },
  methods: {
    ...mapActions(['ajax']),
    // 旅客
    queryPassenger() {
      this.postPassenger()
      this.queryPassengerInterval()
    },
    queryPassengerInterval() {
      this.passTimer = setInterval(this.postPassenger, 600000)
    },
    postPassenger() {
      let that = this
      that.ajax({
        name: 'queryPassenger',
        data: {}
      }).then(res => {
        // charts
        let temp = that.passOption
        that.passOption.series[0].data = []
        // temp.series[0].data = [res.checkinNum, res.verifyNum, res.boardNum, res.isolationNum, res.isolationNum]
        temp.series[0].data = [1000, 800, 15000, 200, 10000]
        that.passChart.setOption(temp)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.pass-out-wrapper {
  height: 580px;
  background-color: #fff;
  margin: 15px 30px 50px 30px;
  padding: 14px 16px; 
  border-radius: 22px;
  box-shadow: darkgrey 10px 10px 30px 5px;
  .pass-title {
    color: #8fa3cc;
    font-size: 14px;/*no*/
    margin-bottom: 32px;
  }
  .pass-wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>
