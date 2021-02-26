<template>
  <div>
    <el-card align="center" class="profile" shadow="never">
      <div>
        <UserInfo v-if="!$store.state.isLogin">
        </UserInfo>
        <UserInfo v-else :prop-obj="propObj">
         </UserInfo>
      </div>
      <div>
        <el-button v-if="!$store.state.isLogin">
          <el-link :underline="false" href="/login">登陆 | 注册</el-link>
        </el-button>
        <p v-else>欢迎登陆，亲爱的{{this.$store.state.userInfo.userNickName}}</p>
      </div>
    </el-card>
    <el-divider></el-divider>
    <div>
      <el-card shadow="never">
        <div slot="header">
          <span>消息快报</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}

        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/content/user/UserInfo";
export default {
name: "Profile",
  data(){
    return{
      propObj:{
        stype: 'square',
        userName: this.$store.state.userInfo.userNickName,
        img: this.$store.state.userInfo.userAvatar,
        size: 50,
        href: '/hindex/profile'
      }
    }
  },
  components: {UserInfo},
}
</script>

<style scoped>

.profile {
  margin-top: 10px;
}
</style>