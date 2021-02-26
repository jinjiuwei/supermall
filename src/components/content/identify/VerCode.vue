<!--滑动验证码组件-->
<template>
  <div>
    <Vcode :show="isShow" @success="success" @close="close" />
  </div>
</template>

<script>
import Vcode from 'vue-puzzle-vcode'
export default {
  name: "VerCode",
  components:{
    Vcode
  },
  props:['Vaccount','Vpassword'],
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    //msg为用户拖动滑块与正确位置的偏差
    success(msg) {
      this.isShow = false; // 通过验证后，需要手动隐藏模态框
      //验证成功后发送请求验证登陆
    },
    close() {
      this.isShow = false;
    },

  },
}
</script>

<style scoped>

</style>