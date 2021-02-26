<template>
  <el-tabs v-model="activeName" type="border-card">
    <el-tab-pane label="登陆" name="first">
      <Login/>
    </el-tab-pane>
    <el-tab-pane label="注册" name="second">
      <Register/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Login from "views/LoginAndRes/Login";
import Register from "views/LoginAndRes/Register";

export default {
  name: "LoginAndRes",
  data() {
    return {
      activeName:'first',
    }
  },
  components:{
    Login,
    Register
  }
}
</script>

<style scoped>

</style>