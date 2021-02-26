<template>
  <div>
    <el-table
        border
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    >
      <el-table-column
          label="时间"
          prop="date"
      >
      </el-table-column>
        <el-table-column
            label="宝贝"
        >
          <template slot-scope="scope">
            <Detail :name="scope.row.name"/>
          </template>

        </el-table-column>
        <el-table-column
            label="单价"
            prop="price"
        >
        </el-table-column>
        <el-table-column
            label="数量"
            prop="count"
        >
        </el-table-column>
      <el-table-column
          label="交易状态"
          align="center"
      >
        <template slot-scope="scope">
          <p v-if="scope.row.state == 0">交易关闭</p>
          <p v-else-if="scope.row.state == 1">待付款</p>
          <p v-else-if="scope.row.state == 2">交易中...</p>
          <p v-else-if="scope.row.state == 3">交易成功</p>
          <p><a href="#">订单详情</a></p>
        </template>
      </el-table-column>
        <el-table-column align="center">
          <template slot="header" slot-scope="scope">
            <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
                  v-if="scope.row.state == 0"
                 type="primary"
                 plain
                 @click="handleTo(scope.$index, scope.row)"
            >根据状态变按钮</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-row>
      <el-col>
        <Pagination :total="resultTotal"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "@/components/content/goods/Detail";
import Pagination from "@/components/common/pagination/Pagination";
export default {
name: "Order",
  components: {
    Detail,
    Pagination
  },
  data(){
    return{
      resultTotal: 0,
      tableData:[{
        id:0,
        date: '',
        name: '萨达萨达萨达萨达是的武器恶趣味是大多数',
        img: '',
        ordernumber: '',
        price: 0,
        count: 0,
        state: 0,
      }],
      search: ''
    }
  },
  methods: {
    handleTo(index,row){
      console.log(index, row);
    }

  }
}
</script>

<style scoped>

</style>