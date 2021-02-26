<template>
  <div>
    <el-form
        label-width="80px"
        label-position="left"
        label-suffix=":"
        :rules="UpdateRules"
        ref="updateForm"
        :model="form"
        status-icon
    >
      <el-form-item
          label="账号"
          prop="userAccount"
      >
        <el-input placeholder="请输入账号" prefix-icon="el-icon-user-solid" v-model="form.userAccount" clearable></el-input>
      </el-form-item>
      <el-form-item
          label="旧密码"
          prop="userPassword"
      >
        <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" type="password" show-word-limit show-password v-model="form.userPassword" clearable></el-input>
      </el-form-item>
      <el-form-item
          label="确认密码"
          prop="checkpassword"
      >
        <el-input placeholder="请再次输入密码" prefix-icon="el-icon-lock" type="password" show-password v-model="form.checkpassword" clearable></el-input>
      </el-form-item>
      <el-form-item
          label="性别"
          prop="userSex"
      >
        <el-radio-group v-model="form.userSex">
          <el-radio-button :label=1>男</el-radio-button>
          <el-radio-button :label=0>女</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item
          label="邮箱"
          prop="userEmail"
      >
        <el-input placeholder="请输入邮箱" prefix-icon="el-icon-message" v-model="form.userEmail" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('updateForm')">提交</el-button>
        <el-button @click="resetForm('updateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "PersonInfo",
  data(){
    //验证账号
    let validateAccount = (rule,value,callback) => {
      //字母开头 只含有数字和字母和下划线
      let account_format =  /^[a-z][a-z0-9]*$/;
      if (value === '') {
        callback(new Error('请输入账号'));
      } else if (!account_format.test(value)) {
        callback(new Error('小写字母开头，只能由小写字母与数字组成！'));
      }else {
        this.$request.postRequest('/user/customer/getuser', {userAccount: value}
        ).then(res => {
          if(res.data.result == "SUCCESS"){
            callback(new Error('账号已存在！'));
          }else{
            callback();
          }
        })
      }
    };
    //验证第一密码
    let validatePass = (rule, value, callback) => {
      //必须字母+数字
      let pass_format = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
      if (value === '') {
        callback(new Error('请输入密码'));
      }else if(!pass_format.test(value)){//若不满足正则表达式
        callback(new Error('密码必须包括小写字母和数字'));
      } else {
        if (this.form.checkpassword !== '') {
          this.$refs.ResForm.validateField('checkpassword');
        }
        callback();
      }
    };
    //验证第二密码
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.userPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    //验证邮箱
    let validateEmail = (rule, value, callback) => {
      let email_format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else if (!email_format.test(value)) {
        callback(new Error('邮箱格式不正确，请检查！'));
      } else {
        callback();
      }
    };
    //验证手机号
    /*let validatePhone = (rule,value,callback) => {
      let phone_format = /^1(3|4|5|6|7|8|9)d{9}$/;
    };*/
    return {
      form:{
        userAccount:'jinjiuwei',
        userPassword:'jinjiuwei1999',
        checkpassword:'jinjiuwei1999',
        userSex:1,
        userEmail:'1033685943@qq.com',
        //phone:'',
        //verification: ''
      },
      UpdateRules:{
        userAccount:[
          {min: 6,max: 18,message: '账号长度应为6-18个字符',trigger: 'blur'},
          {validator: validateAccount,trigger: 'blur'}
        ],
        userPassword:[
          {min:6,max:18,message: '密码长度应为6-18个字符',trigger: 'blur'},
          {validator: validatePass,trigger: 'blur'}
        ],
        checkpassword: [
          {validator: validatePass2,trigger: 'blur'}
        ],
        userEmail: [
          {validator: validateEmail,trigger: 'blur'}
        ],
        /*phone:[
          {validator: validatePhone,trigger: 'blur'}
        ]*/
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //验证成功
          // 发送请求插入数据

        } else {
          //验证失败
          this.$message.error('注册失败，请检查注册信息正规性！');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>