<template>
  <div>
    <div style="height: 88px;">

    </div>
    <div style="">
      <LoginAndRes/>
    </div>
  </div>
</template>

<script>
import LoginAndRes from "@/views/LoginAndRes/LoginAndRes";
export default {
  name: "LIndex",
  components: {LoginAndRes}
}
</script>

<style scoped>
.back{
  height: 600px;
  background-size:cover;
}
.el-tabs{
  margin:20px auto;
  width: 600px;
  height: 450px;
}
</style>