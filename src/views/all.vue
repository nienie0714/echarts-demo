<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-tabbar-container">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="statistic">
        <img slot="icon" src="../assets/flt.png">
        航班信息
      </mt-tab-item>
      <mt-tab-item id="stand">
        <img slot="icon" src="../assets/stand.png">
        机位信息
      </mt-tab-item>
      <mt-tab-item id="passenger">
        <img slot="icon" src="../assets/statistic.png">
        旅客信息
      </mt-tab-item>
      <mt-tab-item id="work">
        <img slot="icon" src="../assets/work.png">
        值班信息
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
 
<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: 'statistic'
    }
  },
  created() {
    // let path = localStorage.getItem('path')
    // if (path == '/work') {
    //   this.selected = 'work'
    //   this.$router.push(path)
    // } else if (path == '/passenger') {
    //   this.selected = 'passenger'
    //   this.$router.push(path)
    // } else if (path == '/stand') {
    //   this.selected = 'stand'
    //   this.$router.push(path)
    // } else {
    //   this.selected = 'statistic'
    //   this.$router.push('/statistic')
    // }
  },
  watch: {
    selected(val) {
      // localStorage.setItem('path', '/' + val)
      this.$router.push('/' + val)
    }
  }
}
</script>
 
<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
 
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 60px;/*no*/
  }
</style>
