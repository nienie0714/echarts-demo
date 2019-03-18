<template>
  <div class="component pt">
    <v-header title="组件" back></v-header>
    <div class="content">
      <component-a ref="component-a" @say="fatherSay" :prop-name="name" :prop-say="fatherSay">
        <span slot="name1">来自父组件的name1</span>
        <span slot="name2">来自父组件的name2</span>
      </component-a>
      <br/>
      <component-b v-model="name"></component-b>
      <br/>
      <button @click="$refs['component-a'].childSay(name)">父组件调用子组件A的方法</button>
      父组件：<input type="text" v-model="name" />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  Vue.component('componentB', {
    template: `<div class="red">子组件B<input v-model="text" /></div>`,
    props: {
      value: String
    },
    data() {
      return {
        text: ''
      };
    },
    created() {
      this.text = this.value;
    },
    watch: {
      value(val) {
        this.text = val;
      },
      text(val) {
        this.$emit('input', val);
      }
    }
  });

  let componentA = {
    template: `
      <div class="green">父组件通过prop传递数据给子组件A的数据：{{propName}}
        <br/><button @click="$emit('say', name)">子组件A $emit父组件</button>
        <br/><button @click="propSay(name)">子组件A通过prop调用父组件方法</button>
        <br/><button @click="$parent.fatherSay(name)">子组件A直接调用父组件方法</button>
        <slot name="name1"></slot>
        <slot name="name2"></slot>
      </div>
    `,
    props: {
      'prop-say': Function,
      'prop-name': {
        type: String,
        required: true,
        default: '',
        validator: (val) => {
          //自定义验证
          // return val === 'CCC';
          return true;
        }
      }
    },
    data() {
      return {
        name: 'AAA'
      };
    },
    created() {
      // this.propName = '222'; //不要试图修改prop的值，否则会报错
    },
    methods: {
      childSay(val) {
        alert('[子组件A]从父组件获取的数据:' + val);
      }
    }
  };

  export default {
    data() {
      return {
        name: 'CCC'
      };
    },
    components: {
      componentA
    },
    watch: {
      name(val) {
        console.log('父组件', val);
      }
    },
    methods: {
      fatherSay(val) {
        alert('[父组件]从子组件A获取的数据:' + val);
      }
    }
  };
</script>

<style lang="less" scoped>
</style>
