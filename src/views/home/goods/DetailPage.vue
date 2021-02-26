<template>
  <el-container style="width: 80%;margin-left: 10%">
    <el-main>
      <GoodMain/>
    </el-main>
    <el-aside width="400px">
      <MerchantModule/>
    </el-aside>
  </el-container>
</template>

<script>
import GoodMain from "@/views/home/goods/component/main/GoodMain";
import MerchantModule from "@/views/home/goods/component/asign/MerchantModule";
export default {
  name: "DetailPage",
  components: {
    MerchantModule,
    GoodMain
  }
}
</script>

<style scoped>

</style>