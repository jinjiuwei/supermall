<template>
  <el-carousel style="height: 100%">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
name: "Carousel"
}
</script>

<style>
.el-carousel__container{
  height: 100%
}
</style>