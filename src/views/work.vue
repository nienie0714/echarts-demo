<template>
  <div class="render pt">
    <v-header title="值班信息" back></v-header>
    <!-- <div class="flex-wrapper">
      <div class="flex-header">
        <div class="deptCol">部门</div>
        <div class="nameCol">姓名</div>
      </div>
      <div class="flex-content">
        <div>总值班室</div>
        <div>AAAA</div>
      </div>
      <div class="flex-content">
        <div>运行管理部</div>
        <div>BBBB</div>
      </div>
    </div> -->
    <div class="content">
      <div class="sm-out-wrapper">
        <div>机场公司值班领导</div>
        <div>{{dutyLeader}}</div>
      </div>
      <div class="out-wrapper">
        <!-- <div class="inner-title">旅客实时情况</div> -->
        <div class="inner-wrapper">
          <div class="flex-header">
            <div class="deptCol">部门</div>
            <div class="nameCol">姓名</div>
          </div>
          <div class="flex-content" v-for="(item, index) in data" :key="index">
            <div>{{item.name}}</div>
            <div>{{item.value}}</div>
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
      dutyLeader: 'asdfasdf',
      data: [
        {
          name: '总值班室',
          value: ''
        },
        {
          name: '运行管理部',
          value: ''
        },
        {
          name: '安检护卫部',
          value: ''
        },
        {
          name: '机场公安局',
          value: ''
        },
        {
          name: '航站楼管理部',
          value: ''
        },
        {
          name: '航食公司',
          value: ''
        },
        {
          name: '指挥部',
          value: ''
        },
        {
          name: '安全航务部',
          value: ''
        },
        {
          name: '航服公司',
          value: ''
        },
        {
          name: '机场管理部',
          value: ''
        },
        {
          name: '地服公司',
          value: ''
        },
        {
          name: '物流公司',
          value: ''
        },
        {
          name: '物业公司',
          value: ''
        }
      ]
    }
  },
  created() {
    this.queryDuty()
  },
  methods: {
    ...mapActions(['ajax']),
    queryDuty() {
      let that = this
      this.ajax({
        name: 'queryDuty'
      }).then(res => {
        let arr = res.filter(item => item.departmentName == '机场公司值班领导')
        this.dutyLeader = arr[0].dutyLeader
        let that = this
        for(let i = 0; i< res.length; i++) {
          for(let j = 0; j < that.data.length; j++) {
            if (res[i].departmentName == that.data[j].name) {
              this.$set(that.data[j], 'value', res[i].dutyLeader)
              break
            }
          }
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.sm-out-wrapper {
  height: 80px;
  background-color: #fff;
  margin: 15px 30px 22px 30px;
  padding: 14px 16px; 
  border-radius: 22px;
  box-shadow: darkgrey 10px 10px 30px 5px;
  display: flex;
  justify-content: space-around;
}

.out-wrapper {
  height: 910x;
  background-color: #fff;
  margin: 0 30px 50px 30px;
  padding: 14px 16px; 
  border-radius: 22px;
  box-shadow: darkgrey 10px 10px 30px 5px;
  .inner-title {
    color: #8fa3cc;
    font-size: 14px;/*no*/
    margin-bottom: 32px;
  }
  .inner-wrapper {
    display: flex;
    flex-direction: column;
  }
  .flex-header {
    width: 100%;
    display: flex;
    border-bottom: 3px solid #eaeaea;
    .deptCol,
    .nameCol {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      background-color: #fff;
      font-weight: 800;
      width: 50%;
    }
  }
  .flex-content {
    width: 100%;
    display: flex;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      background-color: #fff;
      width: 50%;
    }
  }
}
</style>
