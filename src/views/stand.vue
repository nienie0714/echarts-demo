<template>
  <div class="render pt">
    <v-header title="机位信息" back></v-header>
    <!-- 机位使用情况 -->
    <div class="content">
      <div class="stand-charts-flex">
        <div id="galleryChart" :style="{width: '200px', height: '150px'}"></div>
        <div id="farChart" :style="{width: '200px', height: '150px'}"></div>
      </div>
      <div class="stand-charts-flex">
        <div id="iceChart" :style="{width: '200px', height: '150px'}"></div>
        <div id="cargoChart" :style="{width: '200px', height: '150px'}"></div>
      </div>
      <div class="flight-guarantee-wrapper mb70 hei320">
        <div class="flight-title ">机位使用实况</div>
        <div class="stand-flex-wrapper">
          <div id="standChart" :style="{width: '200px', height: '150px'}"></div>
          <div class="stand-flex-font">
            <div class="flight-flex-item">
              <div>近机位</div>
              <div>{{queryStandData.nearlyStand}}</div>
            </div>
            <div class="flight-flex-item">
              <div>远机位</div>
              <div>{{queryStandData.farStand}}</div>
            </div>
            <div class="flight-flex-item">
              <div>不可用</div>
              <div class="fc-red">{{queryStandData.disableStand}}</div>
            </div>
          </div>
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
      queryStandData: {
        nearlyStand: '',
        farStand: '',
        disableStand: '',
        totalCan: 0,
        totalFree: 0
      },
      standChart: '',
      standOption: {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: ['50%', '50%']
        },
        legend: {
          orient: 'vertical',
          left: 'lefft',
          data: ['占用', '空闲'],
          formatter: this.standFormatter
        },
        series: [{
          name: '机位使用情况',
          type: 'pie',// pie:饼图
          radius: '45%',
          center: ['50%', '50%'],
          data: [
            {value: 0, name: '占用'},
            {value: 0, name: '空闲'}
          ]
        }]
        // color: ['#c23531', '#c4ccd3']
      },
      // 廊桥位
      galleryChart: '',
      galleryOption: {
        title: {
          text: '廊桥位',
          textAlign: 'auto',
          padding: [10, 70],
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
          name: '机位使用情况',
          type: 'pie',// pie:饼图
          radius: '45%',
          center: ['50%', '50%'],
          label: {
            show: true,
            normal : {
              position : "outside",
              formatter: "{b}: {c}"
            }
          },
          labelLine : {
            normal : {
              length : 7,
              length2 : 7
            }
          },
          data: [
            {value: 0, name: '占用'},
            {value: 0, name: '空闲'}
          ]
        }],
        color: ['#d48265', '#e5c2b6']
      },
      // 远机位
      farChart: '',
      farOption: {
        title: {
          text: '远机位',
          textAlign: 'auto',
          padding: [10, 70],
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
          name: '机位使用情况',
          type: 'pie',// pie:饼图
          radius: '45%',
          center: ['50%', '50%'],
          label: {
            show: true,
            normal : {
              position : "outside",
              formatter: "{b}: {c}"
            }
          },
          labelLine : {
            normal : {
              length : 7,
              length2 : 7
            }
          },
          data: [
            {value: 0, name: '占用'},
            {value: 0, name: '空闲'}
          ]
        }],
        color: ['#749f83', '#bcd1c3']
      },
      // 除冰位
      iceChart: '',
      iceOption: {
        title: {
          text: '除冰位',
          textAlign: 'auto',
          padding: [10, 70],
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
          name: '机位使用情况',
          type: 'pie',// pie:饼图
          radius: '45%',
          center: ['50%', '50%'],
          label: {
            show: true,
            normal : {
              position : "outside",
              formatter: "{b}: {c}"
            }
          },
          labelLine : {
            normal : {
              length : 7,
              length2 : 7
            }
          },
          data: [
            {value: 0, name: '占用'},
            {value: 0, name: '空闲'}
          ]
        }],
        color: ['#ca8622', '#e8d3b3']
      },
      // 货运位
      cargoChart: '',
      cargoOption: {
        title: {
          text: '货运位',
          textAlign: 'auto',
          padding: [10, 70],
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
          name: '机位使用情况',
          type: 'pie',// pie:饼图
          radius: '45%',
          center: ['50%', '50%'],
          label: {
            show: true,
            normal : {
              position : "outside",
              formatter: "{b}: {c}"
            }
          },
          labelLine : {
            normal : {
              length : 7,
              length2 : 7
            }
          },
          data: [
            {value: 0, name: '占用'},
            {value: 0, name: '空闲'}
          ]
        }],
        color: ['#61a0a8', '#bbd8dc']
      }
    }
  },
  mounted() {
    // 机位
    this.standChart = this.$echarts.init(document.getElementById('standChart'))
    this.standChart.setOption(this.standOption)
    // 廊桥位
    this.galleryChart = this.$echarts.init(document.getElementById('galleryChart'))
    this.galleryChart.setOption(this.galleryOption)
    // 远机位
    this.farChart = this.$echarts.init(document.getElementById('farChart'))
    this.farChart.setOption(this.farOption)
    // 除冰位
    this.iceChart = this.$echarts.init(document.getElementById('iceChart'))
    this.iceChart.setOption(this.iceOption)
    // 货运位
    this.cargoChart = this.$echarts.init(document.getElementById('cargoChart'))
    this.cargoChart.setOption(this.cargoOption)
  },
  created() {
    this.queryStand()
    this.showData()
  },
  methods: {
    ...mapActions(['ajax']),
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
    showData() {
      setTimeout(this.queryData, 100)
    },
    queryData() {
      // charts
      let temp1 = this.galleryOption
      temp1.series[0].data = [{value: 8, name: '占用'}, { value: 6, name: '空闲'}]
      this.galleryChart.setOption(temp1)

      let temp2 = this.farOption
      temp2.series[0].data = [{value: 9, name: '占用'}, { value: 5, name: '空闲'}]
      this.farChart.setOption(temp2)

      let temp3 = this.iceOption
      temp3.series[0].data = [{value: 7, name: '占用'}, { value: 4, name: '空闲'}]
      this.iceChart.setOption(temp3)

      let temp4 = this.cargoOption
      temp4.series[0].data = [{value: 3, name: '占用'}, { value: 5, name: '空闲'}]
      this.cargoChart.setOption(temp4)
    }
  }
}
</script>
<style lang="less" scoped>
.flight-guarantee-wrapper {
  height: 220px;
  background-color: #fff;
  margin: 0px 30px 22px 30px;
  padding: 14px 16px; 
  border-radius: 22px;
  box-shadow: darkgrey 0 10px 30px 5px;
  .flight-title {
    color: #8fa3cc;
    font-size: 14px;/*no*/
    margin-bottom: 32px;
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
.mb70 {
  margin-bottom: 70px;
}
.hei320 {
  height: 370px;
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
.stand-charts-flex {
  display: flex;
  flex-direction: row;
}
</style>
