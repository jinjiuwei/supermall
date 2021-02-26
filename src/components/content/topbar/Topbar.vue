<template>
  <el-menu
      mode="horizontal"
      router
  >
    <el-menu-item index="/hindex">
    <!--logo自动传入 默认路径是assets/logo.png-->
        <el-image
            style="width: 50px; height: 50px"
            :src= "imgUrl"
            fit="fill">
        </el-image>
    </el-menu-item>

    <el-menu-item v-if="!$store.state.isLogin" index="/login" style="float: right">
       登陆/注册
    </el-menu-item>
    <el-submenu v-else index="" style="float: right">
      <template slot="title">
        <el-avatar size="large" :src="$store.state.userInfo.userAvatar"></el-avatar>
      </template>
      <el-menu-item index="/hindex/profile/me">
        <i class="el-icon-s-custom"></i>个人资料
      </el-menu-item>
      <el-menu-item @click="layout">
        <i class="el-icon-switch-button"></i>退出
      </el-menu-item>
    </el-submenu>

      <el-menu-item index="/hindex/profile">
        我的淘宝
      </el-menu-item>

      <el-menu-item index="/hindex/profile/favorites">
        收藏夹
      </el-menu-item>

      <el-menu-item index="/hindex/profile/car">
        <el-badge :value="this.$store.state.carValue" >
         购物车
        </el-badge>
      </el-menu-item>

      <el-menu-item index="/hindex/merchants">
        成为店家
      </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "topbar",
  props:{
  },
  data(){
    return {
      imgUrl: require('assets/small_logo.png'),
    }
  },
  methods:{
    layout(){
      localStorage.removeItem('USER_SESSION');
      this.$store.commit('setUserInfo',{});
      this.$store.commit('setIsLogin',false);
      this.$router.push('/hindex');
    }
  }
}
</script>

<style scoped>

</style>