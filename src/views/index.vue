<template>
  <div class="index pt">
    <v-header title="Echarts 目录"></v-header>
    <div class="content">
      <ul>
        <router-link v-for="(item, index) in catalog" tag="li" :to="{name: item.path}" :key="index">{{index + 1}} - {{item.title}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        catalog: [{
          title: '介绍',
          path: 'introduction'
        },
        {
          title: '生命周期',
          path: 'lifecycle'
        },
        {
          title: '渲染',
          path: 'render'
        },
        {
          title: '事件',
          path: 'event'
        },
        {
          title: '组件',
          path: 'component'
        },
        {
          title: 'axios',
          path: 'axios'
        },
        {
          title: '问题',
          path: 'questions'
        }]
      };
    },
    methods: {
      ...mapActions(['ajax'])
    }
  };
</script>

<style lang="less" scoped>
  ul {
    padding: 20px;
    li {
      padding: 20px 0;
    }
  }
</style>

