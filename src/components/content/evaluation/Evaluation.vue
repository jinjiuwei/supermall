<template>
  <div>
    <el-table
        :data="tableData"
        :show-header="false"
        style="width: 100%">
      <el-table-column
          label="用户"
          width="180"
          align="center"
          >
        <template slot-scope="scope">
          <EvalUser :user-name="scope.row.userName" size="large" :img="scope.row.img"/>

        </template>
      </el-table-column>
      <el-table-column
        label="评价"
        min-width="180"
      >
        <template slot-scope="scope">
          <EvalContent :eval-content="scope.row.evalContent" :eval-date="scope.row.evalDate">
           <div slot="previewImg" v-if="!scope.row.evalImg" style="display: block"></div>
          </EvalContent>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import EvalUser from "@/components/content/evaluation/EvalUser";
import EvalContent from "@/components/content/evaluation/EvalContent";
export default {
name: "Evaluation",
  components: {EvalContent, EvalUser},
  props:{
    tableData:{
      type: Array,
      default:[]
    }
  },
  methods:{
    test(scope){
      console.log(scope);
    }
  }
}
</script>

<style scoped>

</style>