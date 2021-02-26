<template>
  <div>
    <p>{{evalContent}}</p>
    <slot name="previewImg">
      <div>
        <el-image
            style="width: 100px; height: 100px"
            :src="evalImg"
            :preview-src-list="evalImgList">
        </el-image>
      </div>
    </slot>
    <AdditionalInfo :name="'时间'" :content="evalDate"/>
  </div>
</template>

<script>
import AdditionalInfo from "@/components/content/goods/AdditionalInfo";
export default {
  name: "EvalContent",
  components: {AdditionalInfo},
  props:{
    evalContent:{
      type: String,
      default: '买家未添加评论内容'
    },
    evalDate:{
      type: String,
      default: '2020-01-01'
    },
    evalImg:{
      type: String,
      default: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    },
    evalImgList: {
      type: Array,
      default(){
        return ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'];
      }
    }
  },
}
</script>

<style scoped>
p{
  font-size: 14px;
}
</style>