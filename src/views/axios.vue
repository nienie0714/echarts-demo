<template>
  <div class="axios pb pt">
    <v-header></v-header>
    <div class="content">
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
      };
    },
    created() {
      this.getDeviceInfo();
    },
    methods: {
      ...mapActions(['ajax']),
      getDeviceInfo() {
        // let req1 = this.ajax({
        //   name: 'getDeviceInfo',
        //   method: 'get',
        //   options: {
        //     name: 1
        //   },
        //   lalla: 22
        // });

        // let req2 = this.ajax({
        //   name: 'getPortSize',
        //   options: {
        //     name: 1
        //   }
        // });

        // req1.then(res => {
        //   console.log('getDeviceInfo success', res);
        // }).catch(err => {
        //   this.toast('哈哈哈哈');
        //   console.log('getDeviceInfo catch', err);
        // });

        // req2.then(res => {
        //   console.log('getDeviceInfo success', res);
        // }).catch(err => {
        //   this.toast('哈哈哈哈');
        //   console.log('getDeviceInfo catch', err);
        // });

        // this.ajax([req1, req2]).then(this.spread((res1, res2) => {
        //   console.log('getDeviceInfo all success', res1, res2);
        // }), res => {
        //   console.log('getDeviceInfo all fail', res);
        // });

        this.ajax({
          name: 'getUsers'
        }).then(res => {

        });
      }
    }
  };
</script>

<style lang="less" scoped></style>
