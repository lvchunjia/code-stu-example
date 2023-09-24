<template>
  <div class="imooc-loading">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 50 50"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- stroke-dasharray= 2 * 3.14 / 4 = 34 -->
      <!-- stroke-linecap="round"这个属性的作用是将线条的边缘变成圆角 -->
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke-width="3"
        :stroke="outsideColor"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <!-- from="0 25 25" to="360 25 25" 这里的25 25是改变圆心 -->
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          :dur="`${+duration}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          :values="outsideColorAnimation"
          :dur="`${+duration * 2}s`"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        stroke-width="3"
        :stroke="insideColor"
        stroke-dasharray="19"
        stroke-linecap="round"
      >
        <!-- from 和 to 的值也可以用values来替换 -->
        <!-- values = from;to -->
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 25 25;0 25 25"
          :dur="`${+duration}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          :values="insideColorAnimation"
          :dur="`${+duration * 2}s`"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <div class="imooc-loading-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ImoocLoading",
  props: {
    width: {
      type: [Number, String],
      default: 50,
    },
    height: {
      type: [Number, String],
      default: 50,
    },
    outsideColor: {
      type: String,
      default: "#3be6cb",
    },
    insideColor: {
      type: String,
      default: "#02bcfe",
    },
    duration: {
      type: [Number, String],
      default: 2,
    },
  },
  setup(ctx) {
    const outsideColorAnimation = computed(
      () => `${ctx.outsideColor};${ctx.insideColor};${ctx.outsideColor}`
    );
    const insideColorAnimation = computed(
      () => `${ctx.insideColor};${ctx.outsideColor};${ctx.insideColor}`
    );
    return {
      outsideColorAnimation,
      insideColorAnimation,
    };
  },
};
</script>

<style lang="scss" scoped>
.imooc-loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
