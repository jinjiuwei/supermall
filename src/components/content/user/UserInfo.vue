<template>
  <div>
    <el-link :underline="false" :href="pageProp.href">
      <el-avatar :shape="pageProp.stype" :size="pageProp.size" :src="pageProp.img"></el-avatar>
    </el-link>

    <slot name="username"><p>{{pageProp.userName}}</p></slot>
    <slot name="introduct"></slot>
  </div>
</template>

<script>
export default {
name: "UserInfo",
  props: {
    propObj: {
      type: Object,
      default: () => {
      }
    },
  },
  computed:{
    pageProp(){
      return Object.assign({
        stype: 'circle',
        size: 'large',
        userName: 'hi!你好!',
        href: '#',
        img: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      },this.propObj)
    }
  }
}
</script>

<style scoped>

</style>