<template>
  <div class="render pt">
    <v-header title="饼状图" back></v-header>
    <div class="content">
      <div id="standChart" :style="{width: '400px', height: '300px'}"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      standChart: '',
      standOption: {
        title: {
          show: true,
          text: '机位使用情况',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',
          top: '10%',
          data: ['近机位(占用)', '远机位(占用)', '近机位(空闲)', '远机位(空闲)', '不可用']
        },
        series: [{
          name: '机位使用情况',
          type: 'pie',// pie:饼图
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            {value: this.stand.nearly, name: '近机位(占用)'},
            {value: this.stand.nearlyFree, name: '远机位(占用)'},
            {value: this.stand.far, name: '近机位(空闲)'},
            {value: this.stand.farFree, name: '远机位(空闲)'},
            {value: this.stand.disabled, name: '不可用'}
          ]
        }]
      },
      standData: {
        nearly: 0,
        nearlyFree: 0,
        far: 0,
        farFree: 0,
        disabled: 0
      }
    }
  },
  mounted() {
    this.standChart = this.$echarts.init(document.getElementById('standChart'))
    this.standChart.setOption(this.standOption)
  },
  created() {
    this.queryToday()
  },
  methods: {
    ...mapActions(['ajax']),
    queryToday() {
      let that = this
      this.ajax({
        name: 'queryStand',
        data: {}
      }).then(res => {
        let temp = that.standOption
        let nearlyArr = res.nearlyStand.split('/')
        let farArr = res.farStand.split('/')
        temp.series[0].data = [parseInt(nearlyArr[0]), parseInt(nearlyArr[1]), parseInt(farArr[0]), parseInt(farArr[1]), parseInt(res.disableStand)]
        that.standChart.setOption(temp)
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
