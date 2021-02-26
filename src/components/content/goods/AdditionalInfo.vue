<template>
  <span>{{ name }}：{{ content }}</span>
</template>

<script>
export default {
name: "AdditionalInfo",
  props:{
    name:{
      type: String,
      default: '这是附加内容名称'
    },
    content: {
      type: String,
      default: '这是附加内容信息'
    }
  }
}
</script>

<style scoped>
span{
  color: #9e9e9e;
 /* margin-left: 90px;
  text-align: left;
  margin-top: 8px;*/
}
</style>