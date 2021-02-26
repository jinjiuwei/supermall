<template>
  <el-pagination
      @current-change="handleCurrentChange"
      prev-text="上一页"
      next-text="下一页"
      :total="total"
      layout="prev, pager, next, jumper">
  </el-pagination>
</template>

<script>
export default {
  name: "Pagination",
  props:['total'],
  methods:{
    handleCurrentChange(page){
      /*
        都是通过页码获取一个data数据
        只要获取到数据将数据发送给父组件处理即可
       */
      console.log(page);
    },
  }
}
</script>

<style scoped>

</style>