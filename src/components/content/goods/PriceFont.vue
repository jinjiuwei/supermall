<!--金额字体-->
<template>
  <span class="pricefont" style="color: brown;font-size: large">
    <em>￥</em>{{ goodPrice | showPrice}}
  </span>
</template>

<script>
export default {
name: "PriceFont",
  props: {
    goodPrice: {
      type: Number,
      default: 0
    }
  },
  filters:{
    //数据保留2位
    showPrice(price){
      return price.toFixed(2);
    }
  },
}
</script>

<style scoped>
.pricefont em{
  font-style: normal;
  font-size: 12px;
}
</style>