<template>
  <div>
    <el-container>
      <el-header height="150%">
        <div>
          <Search/>
        </div>
        <el-divider></el-divider>
      </el-header>
      <el-main>
        <Recommend><div slot="headerModule"></div></Recommend>
      </el-main>
      <el-footer>
        <Pagination :total="0"/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Search from "@/components/content/search/Search";
import Recommend from "@/components/content/goods/Recommend";
import Pagination from "@/components/common/pagination/Pagination";
export default {
name: "SIndex",
  components:{
    Search,
    Recommend,
    Pagination
  }
}
</script>

<style scoped>

</style>