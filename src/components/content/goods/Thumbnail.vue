<!--缩略图-->
<template>
  <el-link :href="'/hindex/good/'+goodId" :underline="false" target="_blank">
    <el-card
        :body-style="{ padding: '0px'}"
        shadow="hover"
    >
      <img :src=goodImg>
      <div style="padding: 14px;">
        <span>{{goodName}}</span>
        <div class='price'>
          <p></p>
<!--          <span style="color: brown;font-size: large"><em>￥</em>{{ goodPrice }}</span>-->
          <PriceFont :good-price="goodPrice"/>
          <span class='sale'>销量:{{ goodSales }}</span>
        </div>
      </div>
    </el-card>
  </el-link>

</template>

<script>
import PriceFont from "@/components/content/goods/PriceFont";
export default {
  name: "Thumbnail",
  props:{
    goodId: {
      type: Number,
      default: 0
    },
    goodImg: {
      type: String,
      default: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    },
    goodName: {
      type: String,
      default: '汉堡'
    },
    goodPrice: {
      type: Number
    },
    goodSales: {
      type: Number
    }
  },
  components: {
    PriceFont
  }
}
</script>

<style scoped>

.price .sale{
  font-size: xx-small;
  color: #99a9bf;
  float: right;
  margin-top: 3px;
}
</style>