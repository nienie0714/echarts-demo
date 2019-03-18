<template>
  <div class="pt">
    <v-header title="常见问题" back></v-header>
    <div class="content">
      ---------渲染----------
      <section>
        对象数组嵌套的时候，模板里面取属性可能会出错，尽量在初始化data的时候写全默认值，如果无法写全，可以用v-if阻断模板内部的渲染
        <span v-if="name.text">{{name.text.value}}</span>
        <span v-if="name.list" v-for="item in name.list">{{item}}</span>
      </section>
      <section>
        给对象或者数组增加属性或者元素的时候，有时候数据改了，但是页面没有改，是因为新增的数据没有被添加相应,使用Vue.set或者vm.$set
        <button @click="add">新增元素</button>
        <button @click="addSet">新增元素($set)</button>
        <span v-if="name.text">{{name.text}}</span>
        <!-- <span v-if="name.list" v-for="item in name.list">{{item}}</span> -->
      </section>
      <section>
        wathch监听数据变化的时候，如果发现值改变了但是，watch没有触发，可以使用deep增强
      </section>
      <section>
        在数据更新后，视图的更新是异步的，如果想立即使用，比如初始化Swiper的时候，可以放在$nextTick(()=>{/*...*/})的回调里面
      </section>
      ---------组件----------
      <section>
        v-for循环组件的时候，通过$refs获取的组件名称是一个数组 this.$refs.list0 instanceof Array === {{this.$refs.list0 instanceof Array}}
        <list v-for="(item, index) in 3" :ref="'list' + index" :key="index"></list>
      </section>
      <section>
        对于组件多层嵌套，不想通过传参的方式，可以在new Vue的data中增加一个new Vue()的空的实例，通过$on和$emit可以实现任意页面绑定和出发事件。
        <br />this.$root.eventHub.$on('renderDishDetailQuantity', this.renderDishQuantity); this.$root.eventHub.$emit('renderDishDetailQuantity');
      </section>
      <section>
        父组件给子组件穿一个对象的时候，可以利用引用类型的特点，在修改传过来的数据的同时父组件自动更新，不需要emit父组件。
      </section>
      ---------状态机----------
      <section>
        vuex状态在页面刷新后会丢失数据，可以将数据存储在浏览器存储上，sessionStorage，loacalStorage等
      </section>
      <section>
        状态机不允许在除了mutations外的地方修改state数据，如果把一个对象存入状态机中，修改时会报错，可以在取state的值时进行对象的复制 JSON.parse(JSON.stringify(obj));
      </section>
      ---------路由----------
      <section>
        路由通过path层级的多少可以实现页面前进或者后退的动画，此时会导致层次越深的页面，路由地址过长，可以使用别名alias进行跳转。注意全局路由跳转方式必须统一，不能name和alias混合使用。
      </section>
      <section>
        路由表中的meta可以自定义参数，比如进入页面前需要的参数，如果没有的话，再全局路由钩子函数beforeEach中缺少session跳入登陆页面
      </section>
      ---------样式----------
      <section>
        vue组建内style样式加上scoped可以让样式只在本页面生效。注意scoped下也不会对子组件内部的样式进行修改。如果要修改，需要写在组建内，或者全局样式进行覆盖。
      </section>
      <section>
        less某些合起来写样式，比如background，需要加上~ background: ~"url('../assets/orderlist/icon_price_level1_active.png') no-repeat 0 0 / 100% 100%";
      </section>
      <section>
        移动端有时候会出现页面滑动特别卡顿，加上 window.PointerEvent = undefined;就正常了
        <br />-webkit-overflow-scrolling:touch;移动端ios平滑滚动并且会有回弹效果。该属性存在一些问题。慎用！
      </section>
      <section>
        图片路径可以使用别名~assets 代替相对路径。移动页面位置时不会导致路径问题。
      </section>
      ---------其他----------
      <section>
        vue-cli搭建的项目需要修改下
        <br />config.dev.assetsPublicPath = './'; //否则打包导致图片路径找不到
        <br />config.build.host = '0.0.0.0'; //否则不能通过ip地址访问本地服务
      </section>
      <section>
        移动端某些手机对findIndex，includes等方法不能友好支持，如果已经大面积使用，可以用es5重写该方法。
      </section>
      <section>
        手机端图片在使用canvas绘图的时候，又可能把图片的方向高反。图片有一个原始的方向，需要得到原始图像的方向，再进行旋转绘制。使用插件exif-js
      </section>
      <section>
        $ref获取元素通过getBoundingClientRect获取的位置和大小数值不正确，需要延迟后才能拿到正常的值 ？？？
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
        name: {
          // text: {}
        }
      };
    },
    components: {
      list: {
        template: `<span>hi</span>`
      }
    },
    created() {
      setTimeout(() => {
        this.name = {
          list: [1, 2, 3],
          text: { value: 2 }
        };
      }, 1000);
    },
    mounted() {
      console.log(this.$refs.list0 instanceof Array);
    },
    watch: {
      // name(val) {
      //   console.log(val);
      // },
      name: {
        handler(val) {
          console.log(val);
        },
        deep: true
      }
    },
    methods: {
      add() {
        this.name.text.key = this.count++;
        console.log(this.name);
      },
      addSet() {
        this.$set(this.name.text, 'key2', this.count++);
        console.log(this.name);
      }
    }
  };
</script>

<style lang="less" scoped>
  section {
    padding: 20px;
  }
</style>
