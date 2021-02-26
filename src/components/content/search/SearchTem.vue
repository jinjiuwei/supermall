<template>
  <div class='search'>
      <el-form
          ref="searchForm"
          :inline="true"
          :model="form"
          @submit.native.prevent>
          <el-form-item
              style="width: 85%"
              required
              prop="searchInput"
          >
            <el-input
                prefix-icon="el-icon-search"
                placeholder="请输入关键字"
                type="text"
                clearable
                v-model="form.searchInput"
            ></el-input>
          </el-form-item>
          <el-form-item
              style="width: 10%">
            <el-button native-type="submit" @click="handleSubmit('searchForm')">搜索</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
name: "SearchTem",
  data(){
    return {
      form:{
        searchInput: ''
      }
    }
  },
  methods:{
    handleSubmit(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form.searchInput);
          //提交跳转到搜索页面展示商品
          this.$router.push('search');
        } else {
          //验证失败
          this.$message.error('搜索失败，请填写搜索关键字！');
          return false;
        }
      });
    }
  }
}
</script>

<style>
.search{
  margin: 20px auto;
}
.el-form-item__content {
  width: 100%;
}
</style>