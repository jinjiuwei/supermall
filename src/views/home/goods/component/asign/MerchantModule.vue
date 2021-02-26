<!--商品详细信息侧边栏-->
<template>
  <div style="margin-top: 20px">
    <el-card align="center" :body-style="{ padding: '0px', }">
      <div slot="header">
        <el-avatar :size="70"></el-avatar>
      </div>
      <div>
        <Property>
          <span slot="propertyName">用户Id：</span>
          <span slot="propertyContent">1</span>
        </Property>
        <Property>
          <span slot="propertyName">用户Id：</span>
          <span slot="propertyContent">1</span>
        </Property>
        <Property>
          <span slot="propertyName">用户Id：</span>
          <span slot="propertyContent">1</span>
        </Property>
        <Property>
          <span slot="propertyName">用户Id：</span>
          <span slot="propertyContent">1</span>
        </Property>
      </div>
    </el-card>
    <div style="margin-top: 20px">
      <Recommend :span-length="24">
        <h3 slot="title" style="text-align: center">商家商品推荐</h3>
      </Recommend>
    </div>
  </div>



</template>

<script>
import Property from "@/components/content/goods/Property";
import Recommend from "@/components/content/goods/Recommend";
export default {
name: "MerchantModule",
  components: {Recommend, Property}
}
</script>

<style scoped>

</style>