<template>
  <div class="render pt">
    <v-header title="渲染" back></v-header>
    <div class="content">
      <section>
        <p>1. v-show 显示隐藏 display:none;</p>
        <span v-show="vshow">{{hello}}</span>
        <button @click="vshow = !vshow">v-show</button>
      </section>
      <section>
        <p>2. v-if v-else-if v-else 会触发组建重新渲染 为false时，不触发渲染</p>
        <span v-if="vif" v-html="world"></span>
        <button @click="vif = !vif">v-if</button>
      </section>
      <section>
        <p>3. 在template可以让一组元素显示隐藏而不会渲染出额外的元素</p>
        <template>
          <span>1</span>
          <span>2</span>
        </template>
      </section>
      <section>
        <p>4. v-for 和v-if一起使用时，先循环，然后再每个子元素作判断。key可以让v-for循环提供性能</p>
        循环数组:item,index
        <ul>
          <li v-for="(item, index) in list" v-if="item.display" :key="index">{{item.text}},{{index}}</li>
        </ul>
        <br/>循环对象:key,value,index
        <ul>
          <li v-for="(key, value, index) in obj" :key="index">{{key}},{{value}},{{index}}</li>
        </ul>
        <br/>循环数字:number,index
        <ul>
          <li v-for="(item, index) in 3" :key="index">{{item}},{{index}}</li>
        </ul>
        <br/>循环字符串:chartAt,index
        <ul>
          <li v-for="(item, index) in 'hello'" :key="index">{{item}},{{index}}</li>
        </ul>
      </section>
      <section>
        <p>5. 两个模板使用了相同的元素,不会触发重新渲染</p>
        <input v-if="pwdDisplay" type="password" v-model="password">
        <input v-else type="text" v-model="password">
        <button @click="pwdDisplay = !pwdDisplay">显示/隐藏</button>
      </section>
      <section>
        <p>6. class绑定</p>
        <button :class="toggleColor ? 'red' : 'green'" @click="toggleColor = !toggleColor">点击切换颜色</button>
        <button :class="{[hello + 'world']: toggleColor}">动态样式</button>
        <button :class="['x','y',{red: toggleColor}]">动态样式</button>
        绑定到组件上的class会渲染到组件的根元素，与其合并，组件的根元素的样式属性会优先覆盖组件上的样式属性
        <v-lifecycle :class="['lifecycle', 'bold']"></v-lifecycle>
      </section>
      <section>
        <p>7. style绑定</p>
        <button :style="{'background-color': (toggleColor ? '#ff4351' : '#a5de37')}" @click="toggleColor = !toggleColor">点击切换颜色</button>
        <span :style="[{'backgroundColor':'#ff4351'}]">背景色</span>
      </section>
      <section>
        <p>8. 表单</p>
        输入框
        <input type="text" v-model="input1" />{{input1}}
        <br> 复选框
        <input type="checkbox" v-model="checkbox1" true-value="1" false-value="2">{{checkbox1}}
        <br> 单选框
        <input type="radio" v-model="radio1" value="1">
        <input type="radio" v-model="radio1" value="2"> {{radio1}}
        <br> 下拉列表
        <select v-model="selected1">
          <!-- 内联对象字面量 -->
          <option v-bind:value="{ number: 123 }">123</option>
          <option v-bind:value="{ number: 456 }">456</option>
          <option v-bind:value="{ number: 789 }">789</option>
        </select>
        {{selected1}}
        <br>.lazy修饰后变为chang事件<input type="text" v-model.lazy="input1" />{{input1}}
      </section>
      <section>
        <p>9. 表单修饰符</p> .lazy .number .trim
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hello: 'hello',
        world: `<span style="color:red">world</span>`,
        vshow: true,
        vif: true,
        password: '',
        pwdDisplay: false,
        list: [
          { text: 'text1', display: true },
          { text: 'text2', display: true },
          { text: 'text3', display: false },
          { text: 'text4', display: true }
        ],
        obj: {
          key1: 'value1',
          key2: 'value2',
          key3: 'value3'
        },
        toggleColor: false,
        input1: '',
        radio1: '',
        checkbox1: '',
        selected1: ''
      };
    },
    methods: {

    }
  };
</script>

<style lang="less" scoped>
  section {
    padding: 20px;
  }
  .lifecycle {
    background-color: #7b72e9;
  }
  .bold {
    font-weight: bold;
  }
</style>
