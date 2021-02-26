<template>
  <el-row :gutter="2">
    <el-col :span="11">
      <PictureRound/>
    </el-col>
    <el-col :span="11">
      <GoodProperty/>
    </el-col>
  </el-row>
</template>

<script>
import PictureRound from "@/components/content/goods/PictureRound";
import GoodProperty from "@/views/home/goods/component/main/GoodProperty";
export default {
name: "GoodInfo",
  components: {
    PictureRound,
    GoodProperty
  }
}
</script>

<style scoped>

</style>