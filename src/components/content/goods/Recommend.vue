<!--推荐模块-->
<template>
  <el-card shadow="never">
    <slot name="headerModule">
      <div slot="header">
        <slot name="title">
          <h3 class="title">好货推荐</h3>
        </slot>
      </div>
    </slot>

    <div align="center">
      <el-row >
<!--        <el-col :span="4" v-for="item in goods">
          <Thumbnail :good="item"/>
        </el-col>-->
        <el-col v-for="i in 12" :span="spanLength" :key="i">
          <Thumbnail />
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import Thumbnail from "components/content/goods/Thumbnail";
export default {
  name: "Recommend",
  props: {
    spanLength: {
      type: Number,
      default: 4
    },
    goods:{ //商品列表
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    Thumbnail
  }
}
</script>

<style scoped>
h3{
  position: relative;
  height: 22px;
  line-height: 22px;
  margin: 17px 18px;
  font-size: 20px;
  color: #FF5500;
}
.title:before {
  content: "";
  position: relative;
  float: left;
  top: 3px;
  width: 4px;
  height: 16px;
  background: linear-gradient(to bottom, #ff7436, #ff0000);
  margin-right: 7px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col{
  padding: 10px;
}
</style>