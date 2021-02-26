<template>
  <div class="gp">
    <div>
      <ul>
        <Property>
      <span slot="propertyName">
        商品价格：
      </span>
      <span slot="propertyContent">
        <PriceFont style="font-size: 25px"/>
      </span>
        </Property>
        <Property>
      <span slot="propertyName">
        商品价格：
      </span>
          <span slot="propertyContent">
        <PriceFont style="font-size: 25px"/>
      </span>
        </Property>
        <Property>
      <span slot="propertyName">
        商品价格：
      </span>
          <span slot="propertyContent">
        <PriceFont style="font-size: 25px"/>
      </span>
        </Property>
        <Property>
      <span slot="propertyName">
        商品价格：
      </span>
          <span slot="propertyContent">
        <PriceFont style="font-size: 25px"/>
      </span>
        </Property>

      </ul>
    </div>
    <div>
      <el-button>立即购买</el-button>
      <el-button>加入购物车</el-button>
    </div>
    <div>

    </div>
  </div>

</template>

<script>
import Property from "@/components/content/goods/Property";
import PriceFont from "@/components/content/goods/PriceFont";
export default {
  name: "GoodProperty",
  components: {PriceFont, Property}
}
</script>

<style scoped>
.gp div{
  margin: 20px auto;
}
</style>