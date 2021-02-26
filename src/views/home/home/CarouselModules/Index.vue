<template>
  <el-container>
    <el-header>
      <Navbar/>
    </el-header>
    <el-container>
      <el-aside width="300px">
          <Profile/>
      </el-aside>
      <el-main style="padding: 0">
          <Carousel/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from "views/home/home/CarouselModules/Navbar";
import Profile from "views/home/home/CarouselModules/Profile";
import Carousel from "views/home/home/CarouselModules/Carousel";
export default {
  name: "Index",
  components: {
    Navbar,
    Profile,
    Carousel
  }
}
</script>

<style scoped>

</style>