import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carValue: 0,//购物车标记数量
    userInfo: JSON.parse(localStorage.getItem('USER_SESSION')) || {},//第二次访问即有用户信息
    isLogin:  false
  },
  mutations: {
    //用于第一次访问赋值 此时的userInfo为空的
    setUserInfo(state,userObj){
      state.userInfo = userObj;
    },
    setIsLogin(state,val){
      state.isLogin = val;
    }
  },
  actions: {
    loginAxios(content,vue,userAccount,userPassword){
      vue.$request.postRequest("/user/customer/getuser",{
        userAccount: userAccount,
        userPassword: userPassword
      }).then(res => {
            //存储用户信息到vuex
            content.commit('setUserInfo',res.data.data);
            content.commit('setIsLogin',true);
            //设置session
            // sessionStorage.setItem('USER_SESSION','true');
            localStorage.setItem('USER_SESSION',JSON.stringify(res.data.data));
            //this.$store.dispatch('ayncIsLogin',localStorage.getItem('USER_SESSION'));
            //跳转首页
        vue.$router.replace('/hindex');
          })
    },
  },
  modules: {
  },
  getters:{
  }
})
