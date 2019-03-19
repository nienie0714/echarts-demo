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
import { mapActions } from 'vuex'

export default {
    data() {
      return {
        catalog: [{
          title: '介绍',
          path: 'introduction'
        },
        {
          title: '柱状图',
          path: 'bar'
        },
        {
          title: '饼状图',
          path: 'pie'
        },
        {
          title: '仪表图',
          path: 'gauge'
        },
        {
          title: 'axios',
          path: 'axios'
        },
        {
          title: 'stand',
          path: 'stand'
        },
        {
          title: '统计页面',
          path: 'statistics'
        }]
      }
  },
    methods: {
      ...mapActions(['ajax'])
    }
  }
</script>

<style lang="less" scoped>
  ul {
    padding: 20px;
    li {
      padding: 20px 0;
    }
  }
</style>

