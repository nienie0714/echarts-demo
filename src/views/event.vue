<template>
  <div class="event pt">
    <v-header title="事件" back></v-header>
    <div class="content">
      <section>
        调用方式 @click="" say | say() | say('hi', $event) |flag && say()
        <button @click="say('hi', $event)">say hi</button>
      </section>
      <section>
        事件修饰符
        <pre>
.stop  阻止事件冒泡
.prevent  阻止默认行为
.capture 使用事件捕获模式 （默认是事件冒泡,捕获阶段不执行函数处理）
.self event.target是自身时触发
.once 事件只触发一次
.passive 滚动事件的默认行为 (即滚动行为) 将会立即触发
        </pre>
        <div @click.capture="a" class="a">a
          <div @click.capture="b" class="b">b
            <div @click.capture="c" class="c">c</div>
          </div>
        </div>
      </section>
      <section>
        按键修饰符 .enter .tab .delete .esc .space .up .down .left .right .ctrl .alt .shift .meta
      </section>
      <section>
        鼠标按钮修饰符 .left .right .middle
        <button @mousedown.right="say('hi', $event)">say hi</button>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flag: true
      };
    },
    methods: {
      say(val, e) {
        alert(val);
        console.log(e);
      },
      a() {
        console.log('a');
      },
      b() {
        console.log('b');
      },
      c() {
        console.log('c');
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '../style/tool.less';
  section {
    padding: 20px;
  }
  .a {
    width: 200px;
    height: 200px;
    background-color: @red;
    .b {
      width: 150px;
      height: 150px;
      background-color: @green;
      position: absolute;
    }
    .c {
      width: 100px;
      height: 100px;
      background-color: @blue;
      position: absolute;
    }
  }
</style>
