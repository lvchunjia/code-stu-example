<template>
  <hr />
  <div class="global-style">1.Home Page</div>
  <div class="global-style1">2.Home Page 全局样式</div>
  <div class="global-style2">3.Home Page 全局样式</div>
  <div class="local-style">4.Home Page 局部样式</div>

  <i class="iconfont icon-cart"></i>
  <i class="iconfont icon-edit"></i>
</template>
<style scoped lang="scss">
/* 1.手动导入全局样式 */
/* @import "~/assets/styles/variables.scss"; */

// as vb: 给这个模块起一个命名空间
// as * : 可以省略命名空间
// @use 和 @import
/* @use "~/assets/styles/variables.scss" as bv; */
/* @use "~/assets/styles/variables.scss" as *; */

.local-style {
  /* color: vb.$fsColor; */
  color: $fsColor;
  font-size: $fs20;
  @include border();
}
</style>
