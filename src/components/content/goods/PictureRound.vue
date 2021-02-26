<!--图片轮播图-->
<template>
  <el-carousel
      :autoplay="false"
      indicator-position="outside"
      arrow="always"
  >
    <el-carousel-item v-for="item in 4" :key="item">
        <!--  图片位置    -->
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "PictureRound"
}
</script>

<style scoped>

</style>