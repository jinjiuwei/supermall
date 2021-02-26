<!--商品信息选项卡-->
<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="商品详情" name="1">
      <p>这是内容</p>
      <p>这是内容</p>
      <p>这是内容</p>
      <p>这是内容</p>
      <p>这是内容</p>
    </el-tab-pane>
    <el-tab-pane label="联系方式" name="2">
      <p>这是内容</p>
      <p>这是内容</p>
      <p>这是内容</p>
      <p>这是内容</p>
      <p>这是内容</p>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "GoodInfoSelected",
  data(){
    return {
      activeName: '1'
    }
  }
}
</script>

<style scoped>

</style>