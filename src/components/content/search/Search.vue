<template>
  <div class='search'>
    <el-row>
      <el-col :offset="2" :span="2">
        <Logo/>
      </el-col>
      <el-col :offset="4" :span="10">
        <SearchTem/>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import Logo from "@/components/content/logo/Logo";
import SearchTem from "@/components/content/search/SearchTem";
export default {
  name: "Search",
  components:{
    Logo,
    SearchTem
  }
}
</script>

<style>

</style>