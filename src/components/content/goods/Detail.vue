<!--订单页商品信息-->
<template>
  <div>
    <div class="detail" >
      <el-image
          :src="url"
      ></el-image>
    </div>
    <div>
      <p>{{name}}</p>
      <slot name="additional"><AdditionalInfo name="订单号" :content="ordernumber"/></slot>
    </div>
  </div>
</template>

<script>
import AdditionalInfo from "@/components/content/goods/AdditionalInfo";
export default {
name: "Detail",
  props:{
    url: {
      type: String,
      default: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    },
    name: {
      type: String,
      default: '商品名'
    },
    ordernumber:{
      type: String,
      default: '暂时无法查询'
    }
  },
  components:{
    AdditionalInfo
  }
}
</script>

<style scoped>
.detail{
  width: 80px;
  float: left;
}
p{
  margin-left: 90px;
  margin-top: 8px;
  text-align: left;
}
</style>