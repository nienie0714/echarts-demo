<template>
  <div class="render pt">
    <v-header title="数据分析" back></v-header>
    <div class="content">
       <mt-navbar v-model="selected">
        <mt-tab-item id="1">进港统计</mt-tab-item>
        <mt-tab-item id="2">出港统计</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected" class="flt-tab-container">
        <mt-tab-container-item id="1">
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
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
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
            <div>{{fltGuarantee.completionRate}}%</div>
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
              <div>{{queryFltD.execDlyFlight}}</div>
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
              <div>{{queryFltD.noExecDlyFlight}}</div>
              <div>延误未出</div>
            </div>
            <div class="flight-flex-item">
              <div>{{queryFltD.abnormalRate*100}}%</div>
              <div>不正常率</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 机位使用情况 -->
      <div class="flight-guarantee-wrapper mb70">
        <div class="flight-title">机位使用实况</div>
        <div class="flight-flex-wrapper">
          <div class="flight-flex-item">
            <div>{{queryStandData.nearlyStand}}</div>
            <div>近机位</div>
          </div>
          <div class="flight-flex-item">
            <div>{{queryStandData.farStand}}</div>
            <div>远机位</div>
          </div>
          <div class="flight-flex-item">
            <div>{{queryStandData.disableStand}}</div>
            <div>不可用</div>
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
      selected: "1",
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
      fltGuarantee: {
        "totalExecFlight": 0,
        "servicedFlight": 0,
        "servicingFlight": 0,
        "completionRate": 0
      },
      queryStandData: {
        nearlyStand: '',
        farStand: '',
        disableStand: ''
      }
    }
  },
  mounted() {
  },
  created() {
    this.queryFlightA()
    this.queryFlightD()
    this.queryFlight()
    this.queryStand()
  },
  methods: {
    ...mapActions(['ajax']),
    // 进港
    queryFlightA() {
      this.ajax({
        name: 'queryFlightA',
        data: { "inOutFlag": "A" }
      }).then(res => {
        console.log(res)
        this.queryFltA.totalExecFlight = res.totalExecFlight
        this.queryFltA.nowExecFlight = res.nowExecFlight
        this.queryFltA.execFlight = res.execFlight
        this.queryFltA.dlyFlight = res.dlyFlight
      })
    },
    queryFlightD() {
      this.ajax({
        name: 'queryFlightD',
        data: { "inOutFlag": "D" }
      }).then(res => {
        this.queryFltD.totalExecFlight = res.totalExecFlight
        this.queryFltD.nowExecFlight = res.nowExecFlight
        this.queryFltD.execFlight = res.execFlight
        this.queryFltD.dlyFlight = res.dlyFlight

        // 航班放行实况
        this.queryFltD.normalExecFlight = res.normalExecFlight
        this.queryFltD.execDlyFlight = res.execDlyFlight
        this.queryFltD.canFlight = res.canFlight
        this.queryFltD.rtnFlight = res.rtnFlight
        this.queryFltD.noExecDlyFlight = res.noExecDlyFlight
        this.queryFltD.abnormalRate = res.abnormalRate

      })
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
    // 机位使用情况
    queryStand() {
      this.ajax({
        name: 'queryStand',
        data: {}
      }).then(res => {
        this.queryStandData.nearlyStand = res.nearlyStand
        this.queryStandData.farStand = res.farStand
        this.queryStandData.disableStand = res.disableStand
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  position: relative;
}
.flt-tab-container {
  height: 500px;
  background: linear-gradient(to right, rgb(9,57,153) , rgb(13,103,198));
}
.flightA-flex-wrapper {
  height: 120px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  .flightA-flex-item {
    display: flex;
    flex-direction: column;
    div:nth-of-type(1) {
      height: 50%;
      color: #fff;
      font-size: 20px;/*no*/
      font-weight: 1000;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
    div:nth-of-type(2) {
      height: 50%;
      color: rgba(255, 255, 255, 0.6);
      display: flex;
      justify-content: center;
    }
  }
}
.flight-guarantee-wrapper {
  height: 200px;
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
  .flight-flex-wrapper {
    display: flex;
    justify-content: space-between;
    .flight-flex-item {
      display: flex;
      flex-direction: column;
      div:nth-of-type(1) {
        height: 50%;
        color: #1f3666;
        font-size: 20px;/*no*/
        font-weight: 1000;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }
      div:nth-of-type(2) {
        height: 50%;
        color: #4c6699;
        display: flex;
        justify-content: center;
      }
    }
  }
}

.flight-out-wrapper {
  height: 350px;
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
        font-size: 20px;/*no*/
        font-weight: 1000;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }
      div:nth-of-type(2) {
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
</style>
