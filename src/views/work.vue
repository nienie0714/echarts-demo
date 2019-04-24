<template>
  <div class="render pt">
    <v-header title="值班信息" back></v-header>
    <mt-cell title="机场公司值班领导">{{a}}</mt-cell>
    <div class="flex-wrapper">
      <div class="flex-header">
        <div class="deptCol">部门</div>
        <div class="nameCol">姓名</div>
      </div>
      <div class="flex-content">
        <div>总值班室</div>
        <div>AAAA</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 'asdfasdf',
      data: {
        totalGuardsRoom: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.flex-wrapper {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
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
