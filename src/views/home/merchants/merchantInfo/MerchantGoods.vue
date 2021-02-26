<!--商家出售中的商品展示-->
<template>
  <div>
    <div>
      <Recommend :span-length="4">
        <div slot="headerModule"></div>
      </Recommend>
    </div>
    <div>
      <el-pagination></el-pagination>
    </div>
  </div>

</template>

<script>
import Recommend from "@/components/content/goods/Recommend";
export default {
name: "MerchantGoods",
  components:{
    Recommend
  }
}
</script>

<style scoped>

</style>