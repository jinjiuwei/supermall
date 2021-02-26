<template>
<!--  <el-container>
    <el-main style="border: 1px solid #ccc;border-radius: 16px;" align="center">
      <div>
        <el-avatar :size="100" src=""></el-avatar>
        <p>为啥我的网名都被人用了</p>
      </div>
      <div>
        <el-button-group>
          <el-button>待付款</el-button>
          <el-button>待付款</el-button>
          <el-button>待付款</el-button>
          <el-button>待付款</el-button>
        </el-button-group>
      </div>

    </el-main>
    <el-footer>
      <Recommend>
        <h3 slot="title">猜你喜欢</h3>
      </Recommend>
    </el-footer>
  </el-container>-->
  <div style="" align="center">
    <UserInfo
        :prop-obj="{
        size: 100,
       img: this.$store.state.userInfo.userAvatar,
       userName: $store.state.userInfo.userNickName,
    }"></UserInfo>
    <div>
      <el-button-group>
        <el-button>待付款</el-button>
        <el-button>待发货</el-button>
        <el-button>已购买</el-button>
        <el-button>待评价</el-button>
      </el-button-group>
    </div>
    <div>
      <Recommend>
        <h3 slot="title">猜你喜欢</h3>
      </Recommend>
    </div>
  </div>
</template>

<script>
import Recommend from "components/content/goods/Recommend";
import UserInfo from "@/components/content/user/UserInfo";
export default {
  name: "Userbar",
  components: {
    UserInfo,
    Recommend
  },
}
</script>

<style scoped>
.el-button{
  width: 200px;
}
</style>