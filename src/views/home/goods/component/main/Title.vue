<template>
  <div>
    <div>
      <Title title="这是商品名称"/>
    </div>
    <div>
      <AdditionalInfo style="margin-left: 0"/>
    </div>
  </div>
</template>

<script>
import Title from "@/components/content/goods/Title";
import AdditionalInfo from "@/components/content/goods/AdditionalInfo";
export default {
name: "GoodTitle",
  components:{
    Title,
    AdditionalInfo
  }
}
</script>

<style scoped>

</style>