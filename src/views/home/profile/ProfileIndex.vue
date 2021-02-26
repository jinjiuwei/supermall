<template>
  <el-container>
    <el-aside width="200px">
      <Navbar/>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
<!--    <el-container>
      <el-header style="display: flex">
        <Header/>
      </el-header>
      <el-main>

      </el-main>
    </el-container>-->
  </el-container>
</template>

<script>
import Navbar from "views/home/profile/Navbar";
/*import Header from "views/home/profile/Header";*/
export default {
  name: "profile",
  components: {
    Navbar,
    //Header
  }
}
</script>

<style scoped>

</style>