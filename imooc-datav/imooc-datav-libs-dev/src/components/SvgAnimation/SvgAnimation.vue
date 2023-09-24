<template>
  <div>
    <div class="container">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,0) rotate(30) skewX(30) scale(.5)"></rect>
      </svg>
    </div>
    <div class="container">
      <svg width="440" height="440">
        <circle cx="220" cy="220" r="200" stroke-width="20" stroke="#d1d3d7" fill="transparent"></circle>
        <circle class="circle" cx="220" cy="220" r="200" stroke-width="20" stroke="#00a5e0" fill="none" transform="matrix(0 -1 1 0 0 440)"></circle>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200" viewBox="0 0 1000 1000">
        <path class="logo" d="M868.2 377.4c-18.9-45.1-46.3-85.6-81.2-120.6a377.26 377.26 0 0 0-120.5-81.2A375.65 375.65 0 0 0 519 145.8c-41.9 0-82.9 6.7-121.9 20C306 123.3 200.8 120 170.6 120c-2.2 0-7.4 0-9.4 0.2-11.9 0.4-22.8 6.5-29.2 16.4-6.5 9.9-7.7 22.4-3.4 33.5l64.3 161.6a378.59 378.59 0 0 0-52.8 193.2c0 51.4 10 101 29.8 147.6 18.9 45 46.2 85.6 81.2 120.5 34.7 34.8 75.4 62.1 120.5 81.2C418.3 894 467.9 904 519 904c51.3 0 100.9-10.1 147.7-29.8 44.9-18.9 85.5-46.3 120.4-81.2 34.7-34.8 62.1-75.4 81.2-120.6a376.5 376.5 0 0 0 29.8-147.6c-0.2-51.2-10.1-100.8-29.9-147.4z m-66.4 266.5a307.08 307.08 0 0 1-65.9 98c-28.4 28.5-61.3 50.7-97.7 65.9h-0.1c-38 16-78.3 24.2-119.9 24.2a306.51 306.51 0 0 1-217.5-90.2c-28.4-28.5-50.6-61.4-65.8-97.8v-0.1c-16-37.8-24.1-78.2-24.1-119.9 0-55.4 14.8-109.7 42.8-157l13.2-22.1-9.5-23.9L206 192c14.9 0.6 35.9 2.1 59.7 5.6 43.8 6.5 82.5 17.5 114.9 32.6l19 8.9 19.9-6.8c31.5-10.8 64.8-16.2 98.9-16.2a306.51 306.51 0 0 1 217.5 90.2c28.4 28.5 50.6 61.4 65.8 97.8l0.1 0.1 0.1 0.1c16 37.6 24.1 78 24.2 119.8-0.1 41.7-8.3 82-24.3 119.8zM681.1 364.2c-20.4 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.6 37.1 37.1 37.1s37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1z m-175.2 0c-20.5 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.7 37.1 37.1 37.1 20.5 0 37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1z" p-id="5375"></path>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion path="M10 10 L110 10 L110 110 L10 110 Z" dur="5s" rotate="0" fill="freeze" repeatCount="2"></animateMotion>
          <!-- rotate表示小球转弯时的策略,值为auto时转弯处会抖动，改为0可以解决这个问题 -->
        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110 Z" fill="none" stroke="green"></path>
        <!-- M Z表示开始和结束写Z表示这个线段会闭合，L表示画一条线 -->
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion id="forward" path="M10 10 L110 10 L110 110 L10 110" dur="2s" rotate="0" begin="0;backward.end + 0.5s" fill="freeze" />

          <!-- 0; backward-rect.end + 0.5s表示开始时间时0，之后这个值不会再出现然后一直使用backward-rect.end + 0.5s 这个值为开始时间-->
          <animateMotion id="backward" path="M10 110 L110 110 L110 10 L10 10" dur="2s" rotate="0" fill="freeze" begin="forward.end + 0.5s" />
          <animate id="red-to-blue" attributeName="fill" attributeType="XML" from="red" to="blue" dur="2s" fill="freeze" begin="0; blue-to-red.end + 0.5s"></animate>
          <animate id="blue-to-red" attributeName="fill" attributeType="XML" from="blue" to="red" dur="2s" fill="freeze" begin="red-to-blue.end + 0.5s"></animate>
          <!-- begin表示动画开始的时间，forward-rect.end表示获取forward-rect这个动画结束的时间 -->
          <!-- rotate表示小球转弯时的策略,值为auto时转弯处会抖动，改为0可以解决这个问题 -->
        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110" fill="none" stroke="green"></path>
        <!-- M Z表示开始和结束写Z表示这个线段会闭合，L表示画一条线 -->
      </svg>
    </div>
  </div>
</template>

<script>
import {onMounted} from 'vue'
export default {
  name:'SvgAnimation',
  setup() {
    onMounted(() => {
      const logo = document.getElementsByClassName('logo')[0]
      console.log(logo.getTotalLength()) // getTotalLength()可以获取path的整个长度
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid #000;
  }
}
.circle {
  animation: circle 5s linear infinite;
}
@keyframes circle {
  from {
    stroke-dasharray: 0 1257;
  }
  to {
    stroke-dasharray: 1257 0;
  }
}
.logo {
  fill: none;
  stroke: #333;
  stroke-width: 5;
  animation: logo 10s linear infinite;
}
@keyframes logo {
  0% {
    fill: white;
    stroke: #333;
    stroke-dasharray: 6885;
    stroke-dashoffset: 6885;
  }
  50% {
    fill: white;
    stroke: #333;
    stroke-dasharray: 6885;
    stroke-dashoffset: 0;
  }
  75% {
    fill: red;
    stroke: white;
  }
  100% {
    fill: blue;
    stroke: white;
  }
}
</style>