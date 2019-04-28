<template>
  <div class="render pt">
    <v-header title="数据分析"></v-header>
    <div class="content" style="overflow: hidden;">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">进港统计</mt-tab-item>
        <mt-tab-item id="2">出港统计</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected" class="flt-tab-container">
        <mt-tab-container-item id="1">
          <mt-swipe :auto="0" :style="{height: '200px'}">
            <mt-swipe-item>
              <div id="fltAChartDb" :style="{width: '320px', height: '200px', margin: '0 auto'}"></div>
            </mt-swipe-item>
            <mt-swipe-item>
              <div id="fltAChart" :style="{width: '320px', height: '200px', margin: '0 auto'}"></div>
            </mt-swipe-item>
          </mt-swipe>
          <div class="flightA-flex-wrapper">
            <div class="flightA-flex-item">
              <div>{{queryFltA.totalExecFlight}}</div>
              <div>今日计划</div>
            </div>
            <div class="flightA-flex-item">
              <div>{{queryFltA.nowExecFlight}}</div>
              <div>当前计划</div>
            </div>
            <div class="flightA-flex-item">
              <div>{{queryFltA.execFlight}}</div>
              <div>已执行</div>
            </div>
            <div class="flightA-flex-item">
              <div>{{queryFltA.dlyFlight}}</div>
              <div>当前延误</div>
            </div>
            <div class="flightA-flex-item">
              <div>{{queryFltA.normalRate}}%</div>
              <div>准点率</div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-swipe :auto="0" :style="{height: '200px'}">
            <mt-swipe-item>
              <div id="fltDChartDb" :style="{width: '320px', height: '200px', margin: '0 auto'}"></div>
            </mt-swipe-item>
            <mt-swipe-item>
              <div id="fltDChart" :style="{width: '320px', height: '200px', margin: '0 auto'}"></div>
            </mt-swipe-item>
          </mt-swipe>
          <!-- <div id="fltDChart" :style="{width: '400px', height: '200px'}"></div> -->
          <div class="flightA-flex-wrapper">
            <div class="flightA-flex-item">
              <div>{{queryFltD.totalExecFlight}}</div>
              <div>今日计划</div>
            </div>
            <div class="flightA-flex-item">
              <div>{{queryFltD.nowExecFlight}}</div>
              <div>当前计划</div>
            </div>
            <div class="flightA-flex-item">
              <div>{{queryFltD.execFlight}}</div>
              <div>已执行</div>
            </div>
            <div class="flightA-flex-item">
              <div>{{queryFltD.dlyFlight}}</div>
              <div>当前延误</div>
            </div>
            <div class="flightA-flex-item">
              <div>{{queryFltD.normalRate}}%</div>
              <div>准点率</div>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      <div class="flight-guarantee-wrapper">
        <div class="flight-title">航班保障实况</div>
        <div class="flight-flex-wrapper">
          <div class="flight-flex-item">
            <div>{{fltGuarantee.totalExecFlight}}</div>
            <div>今日计划</div>
          </div>
          <div class="flight-flex-item">
            <div>{{fltGuarantee.servicedFlight}}</div>
            <div>保障完成</div>
          </div>
          <div class="flight-flex-item">
            <div>{{fltGuarantee.servicingFlight}}</div>
            <div>正在保障</div>
          </div>
          <div class="flight-flex-item">
            <div class="fc-blue">{{fltGuarantee.completionRate}}%</div>
            <div>完成率</div>
          </div>
        </div>
      </div>
      <div class="flight-out-wrapper">
        <div class="flight-title">航班放行实况</div>
        <div class="flight-wrapper">
          <div class="flight-flex-wrapper">
            <div class="flight-flex-item">
              <div>{{queryFltD.totalExecFlight}}</div>
              <div>计划始发</div>
            </div>
            <div class="flight-flex-item">
              <div>{{queryFltD.execFlight}}</div>
              <div>已出港</div>
            </div>
            <div class="flight-flex-item">
              <div>{{queryFltD.normalExecFlight}}</div>
              <div>正常出港</div>
            </div>
            <div class="flight-flex-item">
              <div class="fc-red">{{queryFltD.execDlyFlight}}</div>
              <div>延误出港</div>
            </div>
          </div>
          <div class="flight-flex-wrapper">
            <div class="flight-flex-item">
              <div>{{queryFltD.canFlight}}</div>
              <div>取消出港</div>
            </div>
            <div class="flight-flex-item">
              <div>{{queryFltD.rtnFlight}}</div>
              <div>出港返回</div>
            </div>
            <div class="flight-flex-item">
              <div class="fc-red">{{queryFltD.noExecDlyFlight}}</div>
              <div>延误未出</div>
            </div>
            <div class="flight-flex-item">
              <div class="fc-red">{{queryFltD.abnormalRate}}%</div>
              <div>不正常率</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 进出港速率 -->
      <div class="flight-guarantee-wrapper mb70 hei450" :style="{'margin-bottom': '15px'}">
        <div class="flight-title" :style="{'margin-bottom': '10px'}">本月放行正常率</div>
        <div class="flex-table">
          <div>昨日</div>
          <div>80%</div>
          <div class="split-line">|</div>
          <div>今日</div>
          <div>20%</div>
          <div class="split-line">|</div>
          <div>本月</div>
          <div>98%</div>
        </div>
        <div class="bar-wrapper">
          <div id="monthGreenChart" :style="{width: '330px', height: '200px', margin: '0 auto', marginTop: '-23px'}"></div>
        </div>
      </div>
      <!-- 机位使用情况 -->
      <!-- 进出港速率 -->
      <div class="flight-guarantee-wrapper mb30 hei320">
        <div class="flight-title" :style="{'margin-bottom': '0px'}">进出港速率</div>
        <div class="stand-flex-wrapper">
          <div id="aRateChart" :style="{width: '200px', height: '150px'}"></div>
          <div id="dRateChart" :style="{width: '200px', height: '150px'}"></div>
        </div>
      </div>
      <!-- 靠桥率 -->
      <div class="flight-guarantee-wrapper mb70 hei320">
        <div class="flight-title" :style="{'margin-bottom': '0px'}">靠桥率</div>
        <div class="bar-wrapper">
          <div id="bridgeRateChart" :style="{width: '330px', height: '200px', margin: '0 auto', marginTop: '-35px'}"></div>
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
      selected: "1",
      // 进港-----------------------------------------------------------
      queryFltA: {
        "totalExecFlight": 0,//今日计划
        "nowExecFlight": 0,//当前计划
        "execFlight": 0,//已执行
        "dlyFlight": 0,//当前延误////
        "canFlight": 0,//已取消
        "noExecFligth": 0,//未执行
        "normalExecFlight": 0,//正常执行
        "execDlyFlight": 0,//延误进港
        "currCompletionRate": 0,//当前完成率
        "dayCompletionRate": 0,//当天完成率
        "rtnFlight": 0,//返航航班
        "noExecDlyFlight": 0,//已延误未执行航班
        "normalRate": 0,//准点率
        "abnormalRate": 0 //不正常率
      },
      fltAChart: '',
      fltAOption: {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',
          right: 'right',
          data: ['正常进港', '延误进港', '当日取消', '未执行'],
          formatter: this.fltAFormatter
        },
        series: [{
          name: '进港统计',
          type: 'pie',// pie:饼图
          radius: '60%',
          label : {
            normal : {
              position : "outside"
            }
          },
          startAngle: 45, //起始角度
          // labelLine : {
          //   normal : {
          //     length : 5,
          //     length2 : 10
          //   }
          // },
          center: ['35%', '40%'],
          data: [
          { value: 0, name: '正常进港'},
          { value: 0, name: '延误进港'},
          { value: 0, name: '当日取消'},
          { value: 0, name: '未执行'}
          ]
        }]
      },
      fltAChartDb: '',
      fltADbOption: {
        tooltip: {
          show: true,
          trigger: 'none'
        },
        series: [{
          name: '当前完成情况',
          type: 'pie',// pie:饼图
          radius: ['40%', '55%'],
          center: ['30%', '40%'],
          avoidLabelOverlap: false,
          clickable: false,
          silent: true,
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
          data: [
          { value: 0, name: '当前完成率'},
          { value: 0, name: '当前未完成率'}
          ]
        },
        {
          name: '当天完成情况',
          type: 'pie',// pie:饼图
          radius: ['40%', '55%'],
          center: ['73%', '40%'],
          avoidLabelOverlap: false,
          clickable: false,
          silent: true,
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
          data: [
          { value: 0, name: '当天完成率'},
          { value: 0, name: '当天未完成率'}
          ]
        }]
      },
      // 出港-----------------------------------------------------------
      queryFltD: {
        "totalExecFlight": 0,//今日计划
        "nowExecFlight": 0,//当前计划
        "execFlight": 0,//已执行
        "dlyFlight": 0,//当前延误
        "canFlight": 0,//已取消
        "noExecFligth": 0,//未执行
        "normalExecFlight": 0,//正常执行
        "execDlyFlight": 0,//延误进港
        "currCompletionRate": 0,//当前完成率
        "dayCompletionRate": 0,//当天完成率
        "rtnFlight": 0,//返航航班
        "noExecDlyFlight": 0,//已延误未执行航班
        "normalRate": 0,//准点率
        "abnormalRate": 0 //不正常率
      },
      fltDChart: '',
      fltDOption: {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',
          right: 'right',
          data: ['正常出港', '延误出港', '当日取消', '未执行'],
          formatter: this.fltDFormatter
        },
        series: [{
          name: '出港统计',
          type: 'pie',// pie:饼图
          radius: '60%',
          startAngle: 45, //起始角度
          center: ['35%', '40%'],
          data: [
          { value: 0, name: '正常出港'},
          { value: 0, name: '延误出港'},
          { value: 0, name: '当日取消'},
          { value: 0, name: '未执行'}
          ]
        }]
      },
      fltDChartDb: '',
      fltDDbOption: {
        series: [{
          name: '当前完成情况',
          type: 'pie',// pie:饼图
          radius: ['40%', '55%'],
          center: ['30%', '40%'],
          avoidLabelOverlap: false,
          clickable: false,
          silent: true,
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
          data: [
          { value: 0, name: '当前完成率'},
          { value: 0, name: '当前未完成率'}
          ]
        },
        {
          name: '当天完成情况',
          type: 'pie',// pie:饼图
          radius: ['40%', '55%'],
          center: ['73%', '40%'],
          avoidLabelOverlap: false,
          clickable: false,
          silent: true,
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
          data: [
          { value: 0, name: '当天完成率'},
          { value: 0, name: '当天未完成率'}
          ]
        }]
      },
      // 保障-----------------------------------------------------------
      fltGuarantee: {
        "totalExecFlight": 0,
        "servicedFlight": 0,
        "servicingFlight": 0,
        "completionRate": 0
      },
      // 旅客-----------------------------------------------------------
      // 当月放行正常率-----------------------------------------------------------
      monthGreenChart: '',
      monthGreenOption: {
        tooltip: {
          trigger: 'axis',
          formatter: "{b}日 <br/>{a}: {c}%",
          axisPointer: {
            type: 'line',
            label: 'cross',
            show: true
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true, // 类目起始和结束两端空白策略，默认为true留空，false则顶头
            data : (function() {
              let list = []
              for (let i = 1; i < 27; i++) {
                list.push(i)
              }
              return list
            })(),
            axisLabel: {
              width: 5,
              interval: 3,
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
            name: '正常率',
            nameTextStyle: {
              align: 'left'
            },
            nameGap: 10
          }
        ],
        series: [{
          name: '正常率',
          type: 'line',
          data: []
        }]
      },
      // 航班-----------------------------------------------------------
      // queryStandData: {
      //   nearlyStand: '',
      //   farStand: '',
      //   disableStand: '',
      //   totalCan: 0,
      //   totalFree: 0
      // },
      // standChart: '',
      // standOption: {
      //   tooltip: {
      //     trigger: 'item',
      //     formatter: "{a} <br/>{b}: {c} ({d}%)",
      //     position: ['50%', '50%']
      //   },
      //   legend: {
      //     orient: 'vertical',
      //     left: 'lefft',
      //     data: ['占用', '空闲'],
      //     formatter: this.standFormatter
      //   },
      //   series: [{
      //     name: '机位使用情况',
      //     type: 'pie',// pie:饼图
      //     radius: '45%',
      //     center: ['50%', '50%'],
      //     data: [
      //       {value: 0, name: '占用'},
      //       {value: 0, name: '空闲'}
      //     ]
      //   }]
      // }
      // 进出港速率-进----------------------------------------------------------
      aRateChart: '',
      aRateOption: {
        title: {
          text: '进港速率',
          textAlign: 'auto',
          padding: [10, 50],
          textStyle: {
            color: '#6e7074',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: ['50%', '50%']
        },
        series: [{
          name: '进港速率（15分钟/架）',
          type: 'pie',// pie:饼图
          radius: '45%',
          center: ['50%', '50%'],
          label: {
            show: true,
            normal : {
              position : "outside",
              formatter: "{b}\n{c}"
            }
          },
          labelLine : {
            normal : {
              length : 7,
              length2 : 7
            }
          },
          data: [
            {value: 0, name: '起飞'},
            {value: 0, name: '未起飞'}
          ]
        }],
        color: ['#61a0a8', '#bbd8dc']
      },
      // 进出港速率-出----------------------------------------------------------
      dRateChart: '',
      dRateOption: {
        title: {
          text: '出港速率',
          textAlign: 'auto',
          padding: [10, 50],
          textStyle: {
            color: '#6e7074',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: ['50%', '50%']
        },
        series: [{
          name: '出港速率（15分钟/架）',
          type: 'pie',// pie:饼图
          radius: '45%',
          center: ['50%', '50%'],
          label: {
            show: true,
            normal : {
              position : "outside",
              formatter: "{b}\n{c}"
            }
          },
          labelLine : {
            normal : {
              length : 7,
              length2 : 7
            }
          },
          data: [
            {value: 0, name: '降落'},
            {value: 0, name: '未降落'}
          ]
        }],
        color: ['#d48265', '#e5c2b6']
      },
      // 靠桥率-----------------------------------------------------------
      bridgeRateChart: '',
      bridgeRateOption: {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        grid: {
          left: '6%',
          containLabel: true
        },
        yAxis: [
          {
            type: 'category',
            data: ['航班靠桥率', '旅客靠桥率']
          }
        ],
        series: [{
          name: '靠桥率',
          type: 'bar',
          data: [98, 66],
          label: {
            normal: {
              show: true,
              position: 'inside',
              color: '#027fcf',
              fontWeight: 'bold',
              fontSize: 14,
              formatter: "{c}%"
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = ['#f6d36c', '#92afe6']
                return colorList[params.dataIndex]
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        }]
      }
    }
  },
  mounted() {
    // 进港统计
    this.fltAChart = this.$echarts.init(document.getElementById('fltAChart'))
    this.fltAChart.setOption(this.fltAOption)

    this.fltAChartDb = this.$echarts.init(document.getElementById('fltAChartDb'))
    this.fltAChartDb.setOption(this.fltADbOption)
    // 出港统计
    this.fltDChart = this.$echarts.init(document.getElementById('fltDChart'))
    this.fltDChart.setOption(this.fltDOption)

    this.fltDChartDb = this.$echarts.init(document.getElementById('fltDChartDb'))
    this.fltDChartDb.setOption(this.fltDDbOption)

    // 进出港速率
    this.aRateChart = this.$echarts.init(document.getElementById('aRateChart'))
    this.aRateChart.setOption(this.aRateOption)
    this.dRateChart = this.$echarts.init(document.getElementById('dRateChart'))
    this.dRateChart.setOption(this.dRateOption)

    // 本月放行正常率
    this.monthGreenChart = this.$echarts.init(document.getElementById('monthGreenChart'))
    this.monthGreenChart.setOption(this.monthGreenOption)

    // 靠桥率
    this.bridgeRateChart = this.$echarts.init(document.getElementById('bridgeRateChart'))
    this.bridgeRateChart.setOption(this.bridgeRateOption)
  },
  created() {
    this.queryFlightA()
    this.queryFlightD()
    this.queryFlight()
    this.queryRate()
    this.queryMonthGreen()
    this.queryBridgeRate()
  },
  methods: {
    ...mapActions(['ajax']),
    // 进港
    queryFlightA() {
      let that = this
      this.ajax({
        name: 'queryFlightA',
        data: { "inOutFlag": "A" }
      }).then(res => {
        this.queryFltA.totalExecFlight = res.totalExecFlight
        this.queryFltA.nowExecFlight = res.nowExecFlight
        this.queryFltA.execFlight = res.execFlight
        this.queryFltA.dlyFlight = res.dlyFlight

        // charts
        let temp = that.fltAOption
        let currCompletionRate = res.currCompletionRate
        let dayCompletionRate = res.dayCompletionRate
        // 准点率
        let normalRate = (res.normalRate * 100).toFixed(1)
        this.queryFltA.normalRate = normalRate
        // 正常进港
        this.queryFltA.normalExecFlight = res.normalExecFlight
        // 延误进港
        this.queryFltA.execDlyFlight = res.execDlyFlight
        // 当日取消
        this.queryFltA.canFlight = res.canFlight
        // 未执行
        this.queryFltA.noExecFligth = res.noExecFligth

        // 进港统计 Chart
        temp.series[0].data = [
          { value: this.queryFltA.normalExecFlight, name: '正常进港'},
          { value: this.queryFltA.execDlyFlight, name: '延误进港'},
          { value: this.queryFltA.canFlight, name: '当日取消'},
          { value: this.queryFltA.noExecFligth, name: '未执行'}
          ]
        that.fltAChart.setOption(temp)

        // 完成率 Chart
        let temp2 = that.fltADbOption
        temp2.series[0].data = [
          { value: currCompletionRate*100, name: '当前完成率'},
          { value: (1-currCompletionRate)*100, name: '当前未完成率'}
          ]
        temp2.series[1].data = [
          { value: dayCompletionRate*100, name: '当天完成率'},
          { value: (1-dayCompletionRate)*100, name: '当天未完成率'}
          ]
        that.fltAChartDb.setOption(temp2)
        that.fltAChartDb.dispatchAction({type: 'highlight',seriesIndex: 0, dataIndex: 0})
        that.fltAChartDb.dispatchAction({type: 'highlight',seriesIndex: 1, dataIndex: 0})

        // that.fltAChartDb.dispatchAction({type: 'highlight',seriesIndex: 0, dataIndex: 0})
        // that.fltAChartDb.on('mouseover', function(e) {
        //   that.fltAChartDb.dispatchAction({type: 'downplay', seriesIndex: 0, dataIndex: 0})
        // })
        // that.fltAChartDb.on('mouseout',function(e) {
        //   that.fltAChartDb.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex: 0})
        // })

        // that.fltAChartDb.dispatchAction({type: 'highlight',seriesIndex: 1, dataIndex: 0})
        // that.fltAChartDb.on('mouseover', function(e) {
        //   that.fltAChartDb.dispatchAction({type: 'downplay', seriesIndex: 1, dataIndex: 0})
        // })
        // that.fltAChartDb.on('mouseout',function(e) {
        //   that.fltAChartDb.dispatchAction({type: 'highlight',seriesIndex: 1,dataIndex: 0})
        // })
        that.fltAChartDb.off('click')
      })
    },
    fltAFormatter(name) {
      let index = 0
      let clientlabels = ['正常进港', '延误进港', '当日取消', '未执行']
      let clientcounts = [this.queryFltA.normalExecFlight, this.queryFltA.execDlyFlight, this.queryFltA.canFlight, this.queryFltA.noExecFligth]
      clientlabels.forEach(function(value,i) {
        if(value == name) {
            index = i
        }
      })
      return name + "  " + clientcounts[index]
    },
    queryFlightD() {
      let that = this
      this.ajax({
        name: 'queryFlightD',
        data: { "inOutFlag": "D" }
      }).then(res => {
        this.queryFltD.totalExecFlight = res.totalExecFlight
        this.queryFltD.nowExecFlight = res.nowExecFlight
        this.queryFltD.execFlight = res.execFlight
        this.queryFltD.dlyFlight = res.dlyFlight

        // charts
        let temp = that.fltDOption
        let currCompletionRate = res.currCompletionRate
        let dayCompletionRate = res.dayCompletionRate
        // 准点率
        let normalRate = (res.normalRate * 100).toFixed(1)
        this.queryFltD.normalRate = normalRate
        // 正常进港
        this.queryFltD.normalExecFlight = res.normalExecFlight
        // 延误进港
        this.queryFltD.execDlyFlight = res.execDlyFlight
        // 当日取消
        this.queryFltD.canFlight = res.canFlight
        // 未执行
        this.queryFltD.noExecFligth = res.noExecFligth
        temp.series[0].data = [
          { value: this.queryFltD.normalExecFlight, name: '正常出港'},
          { value: this.queryFltD.execDlyFlight, name: '延误出港'},
          { value: this.queryFltD.canFlight, name: '当日取消'},
          { value: this.queryFltD.noExecFligth, name: '未执行'}
          ]
        that.fltDChart.setOption(temp)

        // 航班放行实况
        // this.queryFltD.normalExecFlight = res.normalExecFlight
        // this.queryFltD.execDlyFlight = res.execDlyFlight
        // this.queryFltD.canFlight = res.canFlight
        this.queryFltD.rtnFlight = res.rtnFlight
        this.queryFltD.noExecDlyFlight = res.noExecDlyFlight
        let abnor = (res.abnormalRate * 100).toFixed(1)
        this.queryFltD.abnormalRate = abnor

        // 完成率 Chart
        let temp2 = that.fltDDbOption
        temp2.series[0].data = [
          { value: currCompletionRate*100, name: '当前完成率'},
          { value: (1-currCompletionRate)*100, name: '当前未完成率'}
          ]
        temp2.series[1].data = [
          { value: dayCompletionRate*100, name: '当天完成率'},
          { value: (1-dayCompletionRate)*100, name: '当天未完成率'}
          ]
        that.fltDChartDb.setOption(temp2)
        that.fltDChartDb.dispatchAction({type: 'highlight',seriesIndex: 0, dataIndex: 0})
        that.fltDChartDb.dispatchAction({type: 'highlight',seriesIndex: 1, dataIndex: 0})
        that.fltDChartDb.off('click')
      })
    },
    fltDFormatter(name) {
      let index = 0
      let clientlabels = ['正常出港', '延误出港', '当日取消', '未执行']
      let clientcounts = [this.queryFltD.normalExecFlight, this.queryFltD.execDlyFlight, this.queryFltD.canFlight, this.queryFltD.noExecFligth]
      clientlabels.forEach(function(value,i) {
        if(value == name) {
            index = i
        }
      })
      return name + "  " + clientcounts[index]
    },
    // 航班保障
    queryFlight() {
      this.ajax({
        name: 'queryFlight',
        data: {}
      }).then(res => {
        this.fltGuarantee.totalExecFlight = res.totalExecFlight
        this.fltGuarantee.servicedFlight = res.servicedFlight
        this.fltGuarantee.servicingFlight = res.servicingFlight
        this.fltGuarantee.completionRate = res.completionRate
      })
    },
    // 旅客
    // 本月航班放行正常率
    queryMonthGreen() {
      let that = this
      setTimeout(() => {
        let temp1 = that.monthGreenOption
        temp1.series[0].data = []
        for(let i = 1; i < 27; i++) {
          let num = Math.ceil(Math.random()*20 + 80)
          temp1.series[0].data.push(num)
        }
        that.monthGreenChart.setOption(temp1)
      }, 100)
      setTimeout(() => {
        that.monthGreenChart.dispatchAction({
          type: 'showTip',
          seriesIndex:0,  // 显示第几个series
          dataIndex: new Date().getDate()-1 // 显示第几个数据
        })
      }, 200)
    },
    queryBridgeRate() {
      let that = this
    },
    // 机位使用情况
    queryStand() {
      let that = this
      this.ajax({
        name: 'queryStand',
        data: {}
      }).then(res => {
        this.queryStandData.nearlyStand = res.nearlyStand
        this.queryStandData.farStand = res.farStand
        this.queryStandData.disableStand = res.disableStand

        // charts
        let temp = that.standOption
        let totalArr = res.totalStand.split('/')
        this.queryStandData.totalCan = parseInt(totalArr[0])
        this.queryStandData.totalFree = parseInt(totalArr[1])

        temp.series[0].data = [{value: parseInt(totalArr[0]), name: '占用'}, { value: parseInt(totalArr[1]), name: '空闲'}]
        that.standChart.setOption(temp)
      })
    },
    standFormatter(name) {
      let index = 0
      let clientlabels = ['占用','空闲']
      let clientcounts = [this.queryStandData.totalCan, this.queryStandData.totalFree]
      clientlabels.forEach(function(value,i) {
        if(value == name) {
            index = i
        }
      })
      return name + "  " + clientcounts[index]
    },
    queryRate() {
      let that = this
      setTimeout(() => {
        let temp1 = that.aRateOption
        temp1.series[0].data = [{value: 20, name: '起飞'}, { value: 15, name: '未起飞'}]
        that.aRateChart.setOption(temp1)

        let temp2 = that.dRateOption
        temp2.series[0].data = [{value: 12, name: '降落'}, { value: 19, name: '未降落'}]
        that.dRateChart.setOption(temp2)
      }, 100)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  position: relative;
}
.flt-tab-container {
  height: 580px;
  // background: linear-gradient(to right, rgb(9,57,153) , rgb(13,103,198));
  background: #F3F3F3;
}
.flightA-flex-wrapper {
  height: 120px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  margin-top: -9px;
  .flightA-flex-item {
    display: flex;
    flex-direction: column;
    div:nth-of-type(1) {
      height: 50%;
      // color: #fff;
      color: rgb(9,57,153);
      font-size: 16px;/*no*/
      font-weight: 1000;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
    div:nth-of-type(2) {
      font-size: 14px;/*no*/
      height: 50%;
      // color: rgba(255, 255, 255, 0.6);
      color: rgb(13,103,198);
      display: flex;
      justify-content: center;
    }
  }
}
.flight-guarantee-wrapper {
  height: 220px;
  background-color: #fff;
  margin: 0 30px 22px 30px;
  padding: 14px 16px; 
  border-radius: 22px;
  box-shadow: darkgrey 10px 10px 30px 5px;
  .flight-title {
    color: #8fa3cc;
    font-size: 14px;/*no*/
    margin-bottom: 32px;
  }
  .flex-table {
    display: flex;
    align-items: center;
    div:nth-of-type(1) {
      text-align: right;
      font-size: 14px;/*no*/
      margin-right: 25px;
      width: 18%;
      color: #4c6699;
    }
    div:nth-of-type(2) {
      width: 10%;
      color: #1f3666;
      font-size: 16px;/*no*/
    }
    .split-line {
      margin: 0 20px;
    }
    div:nth-of-type(4) {
      font-size: 14px;/*no*/
      width: 12%;
      color: #4c6699;
    }
    div:nth-of-type(5) {
      width: 13%;
      color: #1f3666;
      font-size: 16px;/*no*/
    }
    div:nth-of-type(7) {
      font-size: 14px;/*no*/
      width: 10%;
      color: #4c6699;
    }
    div:nth-of-type(8) {
      width: 20%;
      color: #1f3666;
      font-size: 16px;/*no*/
    }
  }
  .flight-flex-wrapper {
    display: flex;
    justify-content: space-between;
    .flight-flex-item {
      display: flex;
      flex-direction: column;
      div:nth-of-type(1) {
        height: 50%;
        color: #1f3666;
        font-size: 16px;/*no*/
        font-weight: 1000;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }
      div:nth-of-type(2) {
        font-size: 14px;/*no*/
        height: 50%;
        color: #4c6699;
        display: flex;
        justify-content: center;
      }
    }
  }
}

.flight-out-wrapper {
  height: 370px;
  background-color: #fff;
  margin: 0 30px 22px 30px;
  padding: 14px 16px; 
  border-radius: 22px;
  box-shadow: darkgrey 10px 10px 30px 5px;
  .flight-title {
    color: #8fa3cc;
    font-size: 14px;/*no*/
    margin-bottom: 32px;
  }
  .flight-wrapper {
    display: flex;
    flex-direction: column;
  }
  .flight-flex-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;
    .flight-flex-item {
      display: flex;
      flex-direction: column;
      div:nth-of-type(1) {
        height: 50%;
        color: #1f3666;
        font-size: 16px;/*no*/
        font-weight: 1000;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }
      div:nth-of-type(2) {
        font-size: 14px;/*no*/
        height: 50%;
        color: #4c6699;
        display: flex;
        justify-content: center;
      }
    }
  }
}
.mb70 {
  margin-bottom: 70px;
}
.mb30 {
  margin-bottom: 30px;
}
.hei320 {
  height: 320px;
}
.hei450 {
  height: 450px;
}
.bar-wrapper {
  display: flex;
  justify-content: space-between;
}
.stand-flex-wrapper {
  display: flex;
  div:nth-of-type(1) {
    width: 250px;
  }
  .stand-flex-font {
    display: flex;
    flex-direction: column;
    .flight-flex-item {
      display: flex;
      height: 70px;
      align-items: center;
      div:nth-of-type(1) {
        font-size: 14px;/*no*/
        width: 110px;
        color: #4c6699;
      }
      div:nth-of-type(2) {
        color: #1f3666;
        font-size: 16px;/*no*/
        font-weight: 1000;
      }
    }
  }
}
.fc-blue {
  color: #00ACDA !important;
}
.fc-red {
  color: #F4614E !important;
}
.statics-wrapper {
  width: 200%;
}

.pass-out-wrapper {
  height: 450px;
  background-color: #fff;
  margin: 0 30px 22px 30px;
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
