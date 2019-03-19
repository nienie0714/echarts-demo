<template>
  <div class="container-wrapper">
    <transition :name="transitionName">
      <router-view class="container"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transitionName: ''
      }
  },
    watch: {
      '$route'(to, from) {
        const toDepth = to.path.substr(1) ? to.path.substr(1).split('/').length : 0
      const fromDepth = from.path.substr(1) ? from.path.substr(1).split('/').length : 0
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
    }
  }
</script>

<style lang="less">
  @import 'swiper/dist/css/swiper.min.css';
  @import 'mint-ui/lib/style.css';
  @import './style/index.less';
  .slide-left-enter,
  .slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    -webkit-transform: translate(-100%, 0);
  }
  html,
  body {
    background-color: #f3f3f3;
    font-family: '苹方', '微软雅黑', '宋体';
  }

  .container-wrapper {
    height: 100%;
  }
</style>