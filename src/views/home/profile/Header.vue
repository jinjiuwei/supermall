<template>
<!--    <el-page-header style="align-self: center;" @back="{}" :content="pageHeader_content">
    </el-page-header>-->
  <el-breadcrumb style="padding: 24px;" separator="/">
  <el-breadcrumb-item :to='item.path'>{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: "Header",
  data(){
    return {
      breadcrumbList: []
    }
  },
  computed: {
    ...mapState(['pageHeader_content'])
  },
  created() {
    this.breadcrumbList = this.$route.matched.filter(item => item.name);
    console.log(this.breadcrumbList);
  }
}
</script>

<style scoped>

</style>