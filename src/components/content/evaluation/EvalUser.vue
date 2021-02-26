<template>
  <div>
    <el-avatar shape="square" :size="size" :src="img"></el-avatar>
    <p>{{userName | showName}}</p>
  </div>
</template>

<script>
export default {
name: "EvalUser",
  props:['size','img','userName'],
  filters:{
    showName(userName){
      return userName[0]+ '***' + userName[userName.length-1];
    }
  }
}
</script>

<style scoped>

</style>