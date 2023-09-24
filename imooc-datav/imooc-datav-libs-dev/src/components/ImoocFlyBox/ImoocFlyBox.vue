<template>
  <div
    class="imooc-fly-box"
    :ref="refName"
  >
    <svg
      :width="width"
      :height="height"
    >
      <defs>
        <!-- 边框 -->
        <path
          :id="pathId"
          :d="path"
          fill="none"
        ></path>

        <!-- 蒙版，可以将重合的区域颜色进行融合 -->
        <mask :id="maskId">
          <circle
            :r="starLength"
            cx="0"
            cy="0"
            :fill="`url(#${radialGradientId})`"
          >
            <animateMotion
              :dur="`${duration}s`"
              :path="path"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>

        <!-- linearGradient是一种线性渐变色的实现方案 -->
        <!-- <linearGradient :id="radialGradientId">
          <stop
            offset="0%"
            stop-color="red"
            stop-opacity="1"
          ></stop>
          <stop
            offset="50%"
            stop-color="green"
          ></stop>
          <stop
            offset="100%"
            stop-color="blue"
            stop-opacity="0.5"
          ></stop>
        </linearGradient> -->

        <!-- fx和fy的作用时设置内圈的颜色起始放射位置，cx和cy表示的是外圈颜色放射范围，r表示放射半径 -->
        <!-- radialGradient是一种放射性渐变颜色的实现方案 -->
        <radialGradient
          :id="radialGradientId"
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
          r="50%"
        >
          <stop
            offset="0%"
            stop-color="#fff"
            stop-opacity="1"
          ></stop>
          <stop
            offset="100%"
            stop-color="#fff"
            stop-opacity="0"
          ></stop>
        </radialGradient>
      </defs>

      <!-- <rect
        x="100"
        y="100"
        width="100"
        height="100"
        fill="url(#linear-gradient)"
      />
      <circle
        cx="200"
        cy="200"
        r="100"
        fill="url(#radial-gradient)"
      /> -->

      <use
        :href="`#${pathId}`"
        stroke-width="1"
        :stroke="lineColor"
      ></use>
      <use
        :href="`#${pathId}`"
        stroke-width="3"
        :stroke="starColor"
        :mask="`url(#${maskId})`"
      ></use>
    </svg>
    <div class="imooc-fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { ref, onMounted, getCurrentInstance, computed } from "vue";
// getCurrentInstance的作用是拿到vue的实例

export default {
  name: "ImoocFlyBox",
  props: {
    lineColor: {
      type: String,
      default: "#235fa7",
    },
    starColor: {
      type: String,
      default: "#4fd2dd",
    },
    starLength: {
      type: [String, Number],
      default: 50,
    },
    duration: {
      type: [Number, String],
      default: 3,
    },
  },
  setup(ctx) {
    const uuid = uuidv4();
    const width = ref(0);
    const height = ref(0);
    const refName = "";
    const pathId = `${refName}-path-${uuid}`;
    const radialGradientId = `${refName}-gradient-${uuid}`;
    const maskId = `${refName}-mask-${uuid}`;

    const path = computed(
      () =>
        `M5 5 L${width.value - 5} 5 L${width.value - 5} ${
          height.value - 5
        } L5 ${height.value - 5} Z`
    );

    const init = () => {
      const instance = getCurrentInstance();
      const dom = instance.ctx.$refs[refName];
      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
    };

    onMounted(() => {
      init();
    });

    return {
      pathId,
      radialGradientId,
      maskId,
      path,
      refName,
      width,
      height,
    };
  },
};
</script>

<style lang="scss" scoped>
.imooc-fly-box {
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .imooc-fly-box-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
