<template>
  <mt-header :title="title">
    <mt-button icon="back" v-if="isDefined('back')" @click="backHandler" slot="left">返回</mt-button>
    <!-- <mt-button slot="right">分享</mt-button>
    <mt-button slot="right">分享</mt-button> -->
  </mt-header>
</template>

<script>
  export default {
    props: ['title', 'back'],
    methods: {
      isDefined(val) {
        return this[val] !== undefined;
      },
      isFunction(val) {
        return this[val] === 'function';
      },
      backHandler() {
        if(this.isDefined('back')) {
          if(this.isFunction('back')) {
            this.back();
          } else {
            this.$router.go(-1);
          }
        }
      }
    }
  };
</script>