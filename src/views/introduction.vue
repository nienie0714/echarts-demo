<template>
  <div class="introduction pt">
    <v-header title="介绍" back></v-header>
    <div class="content">
      <p class="text-indent">ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。</p>
      <br>
      <p>借助于图形化手段，清晰有效地传达于沟通信息。即文不如表，表不如图</p>
      <br>
      <p>流程：数据接入-->数据整合-->数据处理（得到干净数据源）-->数据分析-->可视化-->数据展示（图文混合）</p>
      <br>
      <ul>可视化类型：
        <li>常规：折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图</li>
        <li>地理数据可视化：地图、热力图、线图</li>
        <li>关系数据可视化：关系图、treemap、旭日图</li>
        <li>多维数据可视化：平行坐标</li>
        <li>BI：漏斗图</li>
        <li>仪表盘</li>
      </ul>
      <br>
      <ul>交互：
        <li>图例、视觉映射、数据区域缩放、tooltip、数据刷选</li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.text-indent {
  text-indent: 32px;/*no*/
}
</style>
