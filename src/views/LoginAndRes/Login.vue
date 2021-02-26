<template>
  <div id="login">
    <el-form
        :model="form"
        :rules="loginRules"
        label-width="80px"
        label-position="left"
        label-suffix=":"
        status-icon
        ref="loginForm"
        :hide-required-asterisk="true"
        @keyup.enter.native="submitForm('loginForm')"
    >
      <el-form-item
          prop="userAccount"
          label="账号"
          >
        <el-input placeholder="请输入登陆账号" type="text" prefix-icon="el-icon-user-solid" clearable v-model="form.userAccount"></el-input>
      </el-form-item>
      <el-form-item
          prop="userPassword"
          label="密码"
      >
        <el-input placeholder="请输入登陆密码" type="password" prefix-icon="el-icon-lock" show-password clearable v-model="form.userPassword"></el-input>
      </el-form-item>
<!--      <VerCode ref='vercode' :Vaccount="form.account" :Vpassword="form.password"/>-->
      <el-form-item
          prop="verification"
          label="验证码"
      >
        <el-row>
          <el-col :span="12">
            <el-input required placeholder="请输入验证码" type="text" prefix-icon="el-icon-warning-outline" clearable v-model="form.verification"></el-input>
          </el-col>
          <el-col :offset="2" style="width: auto;height: 38px">
            <div @click="refreshCode">
              <s-identify :identifyCode="identifyCode" ></s-identify>
            </div>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import SIdentify from "components/common/identify/SIdentify";

export default {
  name: "Login",
  components: {
    SIdentify
  },
  data() {
    const validataCode = (rule,value,callback) => {
      value = value.toLowerCase(); //不区分大小写
      if (this.identifyCode != value){
        this.form.verification = '';
        this.refreshCode();
        callback(new Error("验证码输入错误！"));
      }else{
        callback();
      }
    }
    return {
      form:{
        userAccount: 'jinjiuwei',
        userPassword: 'jinjiuwei1999',
        verification: '1111',//输入的验证码
      },
      //identifyCodes: '1234567890qwertyuiopasdfghjklzxcvbnm',
      identifyCodes: '1',
      identifyCode: '',//生成的验证码
      loginRules:{
        userAccount:[
          {required:true,message:'请输入账号！',trigger:'blur'}
        ],
        userPassword: [
          {required:true,message:'请输入密码！',trigger:'blur'}
        ],
        verification: [
          //{required:true,message:'请输入验证码！',trigger:'blur'},
          {validator: validataCode,trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('loginAxios',this,this.form.userAccount,this.form.userPassword);
        } else {
          //验证失败
          this.$message.error('登陆失败，请检查登陆信息正规性！');
          return false;
        }
      });
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = '';
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ]
      }
    },
  },
  created() {
    this.refreshCode()
  }
}
</script>

<style scoped>
  div {
    height: 100%
  }
</style>