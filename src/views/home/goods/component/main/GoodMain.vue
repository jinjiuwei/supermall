<template>
  <el-card>
    <div slot="header">
      <GoodTitle/>
    </div>
    <div>
      <div>
        <GoodInfo/>
      </div>
      <div>
        <!--  评价 详情      -->
        <GoodInfoSelected style="margin-top: 20px"/>
      </div>
    </div>
  </el-card>
</template>

<script>
import GoodTitle from "@/views/home/goods/component/main/Title";
import GoodInfo from "@/views/home/goods/component/main/GoodInfo";
import GoodInfoSelected from "@/views/home/goods/component/main/GoodInfoSelected";
export default {
name: "GoodMain",
  components:{
    GoodInfoSelected,
    GoodInfo,
    GoodTitle
  }
}
</script>

<style scoped>

</style>