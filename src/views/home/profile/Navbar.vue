<template>
  <el-container>
    <el-header>
      <h5>全部功能</h5>
    </el-header>
    <el-main>
      <el-menu router>
        <el-menu-item index="/hindex/profile/home">
          首页
        </el-menu-item>
        <el-menu-item index="/hindex/profile/order">
          订单详情
        </el-menu-item>
        <el-menu-item index="/hindex/profile/favorites">
          <!--     无需做页面     -->
          我的收藏
        </el-menu-item>
        <el-menu-item index="/hindex/profile/car">
          购物车
        </el-menu-item>
        <el-menu-item index="/hindex/profile/me">
          个人资料
        </el-menu-item>
      </el-menu>
    </el-main>
  </el-container>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>

</style>