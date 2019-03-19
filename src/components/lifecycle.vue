<template>
  <div class="lifecycle">
    <div>子组件</div>
    <div>message:{{message}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 0
      }
  },
    methods: {
      update() {
        this.message++
    }
    },
    beforeCreate() {
      console.log('      beforeCreate')
    console.log('            el', this.$el)
    console.log('            data', this.$data)
    console.log('            message', this.message)
  },
    created() {
      console.log('      created')
    console.log('            el', this.$el)
    console.log('            data', this.$data)
    console.log('            message', this.message)
  },
    beforeMount() {
      console.log('      beforeMount')
    console.log('            el', this.$el)
    console.log('            data', this.$data)
    console.log('            message', this.message)
  },
    mounted() {
      console.log('      mounted')
    console.log('            el', this.$el)
    console.log('            data', this.$data)
    console.log('            message', this.message)
  },
    beforeUpdate() {
      console.log('      beforeUpdate')
    console.log('            el', this.$el)
    console.log('            data', this.$data)
    console.log('            message', this.message)
  },
    updated() {
      console.log('      updated')
    console.log('            el', this.$el)
    console.log('            data', this.$data)
    console.log('            message', this.message)
  },
    beforeDestroy() {
      console.log('      beforeDestroy')
    console.log('            el', this.$el)
    console.log('            data', this.$data)
    console.log('            message', this.message)
    console.log('            watch', this)
  },
    destroyed() {
      console.log('      destroyed')
    console.log('            el', this.$el)
    console.log('            data', this.$data)
    console.log('            message', this.message)
    console.log('            watch', this)
  },
    beforeRouterEnter() {
      console.log('      beforeRouterEnter')
    console.log('            el', this.$el)
    console.log('            data', this.$data)
    console.log('            message', this.message)
  },
    beforeRouterLeave() {
      console.log('      beforeRouterLeave')
    console.log('            el', this.$el)
    console.log('            data', this.$data)
    console.log('            message', this.message)
  }
  }
</script>

<style lang="less" scoped>
  .lifecycle {
    background-color: green;
  }
</style>
