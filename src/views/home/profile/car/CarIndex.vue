<template>
<div>
  <el-table
      ref="carTable"
    :data="tableData"
    @selection-change="handleSeletion"
  >
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
      label="商品信息"
    >
      <template slot-scope="scope">
<!--        <Detail :url="scope.row.img" :name="scope.row.name"><p slot="additional"></p></Detail>-->
        <Detail><p slot="additional"></p></Detail>
      </template>
    </el-table-column>
    <el-table-column
      label="单价"
      >
      <template slot-scope="scope">
        <PriceFont :good-price="scope.row.price"/>
      </template>
    </el-table-column>
    <el-table-column
      label="数量"
      >
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.count" :min="1"></el-input-number>
      </template>
    </el-table-column>
    <el-table-column
      label="金额"
    >
      <template slot-scope="scope">
        <PriceFont :good-price="onetotalPrice(scope.row)"/>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
    >
      <template slot-scope="scope">
        <el-button type="danger" round @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="float-bar-wrapper">
      <div class="d-selete d-link">
        <el-checkbox v-model="checked1" label="全选" border @change="seleteAll()"></el-checkbox>
      </div>
      <div class="d-link">
        <el-link :underline="false" @click="handleDelete()">
          删除
        </el-link>
      </div>
      <div style="float: right;line-height: 50px;height: 50px;margin-right: 10px">
        <div style="float: right;">
          <el-button v-if="totalPrice == 0" size="medium" disabled style="background: #B0B0B0">结算</el-button>
          <el-button v-else-if="totalPrice">结算</el-button>
        </div>
        <div style="float: right;margin-right: 20px">
          <span>合计：</span>
<!--          <strong>{{totalPrice |}}</strong>-->
          <strong><PriceFont :good-price="totalPrice"/></strong>
        </div>
      </div>
    </div>

</div>
</template>

<script>
import Detail from "@/components/content/goods/Detail";
import PriceFont from "@/components/content/goods/PriceFont";
export default {
name: "CarIndex",
  data(){
    return{
      tableData:[
        {
          name: '',
          img: '',
          price: 11.66,
          count: 1,
        },
        {
          name: '',
          img: '',
          price: 25.40,
          count: 1,
        },
      ],
      checked1: false,
      seleteArray: []
    }
  },
  computed:{
    onetotalPrice(obj){
      return function (obj){
        /*return (obj.count * obj.price).toFixed(2);*/
        return parseFloat((obj.count * obj.price).toFixed(2));
      }
    },
    totalPrice(){
      let totalprice = 0.00;
      for (let index in this.seleteArray){
        totalprice += this.seleteArray[index].price.toFixed(2) * this.seleteArray[index].count;
      }
      return parseFloat(totalprice.toFixed(2));
    }
  },
  methods:{
    handleDelete(obj){
      //可能是个对象 也可能是个数组
      //先判断传入的obj是否为空 为空找数组删除 不为空找obj删除
      console.log(obj);
    },
    handleSeletion(selection){
      this.seleteArray = selection;//将选中的对象放入数组中
    },
    seleteAll(){
      //全选作用
      this.$refs.carTable.toggleAllSelection();
    }
  },
  components: {
    Detail,
    PriceFont
  }
}
</script>

<style scoped>
.float-bar-wrapper{
  background-color: #e5e5e5;
  height: 50px;
  padding-left: 5px;
  margin-top: 10px
}
.float-bar-wrapper .d-link{
  float: left;
  line-height: 50px;
  height: 50px;
}
.float-bar-wrapper .d-selete{
  width: 90px
}
.float-bar-wrapper .d-link .el-link{
  margin-left: 25px;
}
</style>