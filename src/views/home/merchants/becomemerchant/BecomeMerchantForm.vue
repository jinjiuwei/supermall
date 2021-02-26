<template>
  <div style="width: 500px">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="真实姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证正反面">
        <ImgUpload :limit="2"/>
      </el-form-item>
      <el-form-item label="有效期至">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.endDate" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="城市">
        <el-cascader
            v-model="form.userCity"
            :options="options"
            style="width: 100%;"
        ></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import city from 'assets/js/city';
import ImgUpload from "@/components/content/imgupload/ImgUpload";
export default {
  name: "BecomeMerchantForm",
  components: {ImgUpload},
  data(){
    return {
      form:{
        merchantName:'',
        merchantId:'',
        userCity:'',
        idImg1:'',
        idImg2:'',
        endDate:''
      },
      options:city,
    }
  },
  methods:{
    onSubmit(){

    },

  }
}
</script>

<style scoped>

</style>