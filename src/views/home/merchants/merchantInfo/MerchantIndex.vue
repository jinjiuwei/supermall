<!--基于买家的卖家界面-->
<template>
  <div>
    <div style="margin-top: 20px" align="center">
      <UserInfo>
        <AdditionalInfo slot="introduct" name="简介：" content="这是商家的个人简介"/>
      </UserInfo>
    </div>
    <div style="margin-top: 20px">
      <el-tabs type="card" v-model="activeName">
        <el-tab-pane  label="出售的商品" name="first">
          <MerchantGoods/>
        </el-tab-pane>
        <el-tab-pane label="评价" name="second">
          <Evaluation :table-data="[{userName:'sdad123',img:'',evalContent:'1111',evalDate:new Date().toDateString()}]"/>
          <el-pagination/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

import MerchantGoods from "@/views/home/merchants/merchantInfo/MerchantGoods";
import UserInfo from "@/components/content/user/UserInfo";
import AdditionalInfo from "@/components/content/goods/AdditionalInfo";
import Evaluation from "@/components/content/evaluation/Evaluation";
export default {
  name: "MerchantIndex",
  components: {Evaluation, AdditionalInfo, UserInfo, MerchantGoods},
  data(){
    return{
      activeName: 'first'
    }
  }
}
</script>

<style scoped>

</style>