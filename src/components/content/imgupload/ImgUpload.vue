<template>
  <el-upload
      action="#"
      list-type="picture-card"
      :limit="limit"
      :auto-upload="false"
      :on-exceed="handleExceed"
  >
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
          class="el-upload-list__item-thumbnail"
          :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
  </el-upload>
</template>

<script>
export default {
name: "ImgUpload",
  props:['limit'],
  data(){
    return{
      dialogImageUrl:'',
      dialogVisible: false
    }
  },
  methods:{
    handleRemove(file) {
      console.log(file);
      this.$message.success('移除成功！');
    },
    handleExceed(){
      this.$message.error('文件个数不能超过'+this.limit+'个！');
    }
  }
}
</script>

<style scoped>

</style>