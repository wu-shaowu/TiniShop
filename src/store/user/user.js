import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from '/src/api/index'
const state ={
    code:'',
    token:localStorage.getItem('TOKEN'),
    userInfo:{}
};
const actions={
    //获得验证码，返回验证码，正常发手机
    async getCode({commit},phone){
        let result = await reqGetCode(phone);
        if(result.code==200){
            commit('GETCODE',result.data)
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    //用户注册
    async UserRegister({commit},user){
        let result = await reqUserRegister(user);
        if(result.code==200){return 'ok'}
        else{return Promise.reject(new Error('faile'));}
    },
    //登录token令牌 万能取数据唯一标识
    async userLogin({commit},data){
       let result = await reqUserLogin(data)
       if(result.code==200){
        commit('USERLOGIN',result.data.token);  //仓库刷新会消失不持久
        localStorage.setItem('TOKEN',result.data.token)
        return 'ok';
       }else{
           return Promise.reject(new Error('faile'))
       }
    },
    //获得用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo();
        if(result.code==200){
            commit('GETUSERINFO',result.data);
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //退出等录
    async logout({commit}){
        let result =  await reqLogout()
        if (result.code==200) {
            commit('LOGOUT')
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
};
const mutations={
    GETCODE(state,code){
        state.code = code;
    },
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo;
    },
    LOGOUT(state){
        state.token = '';
        state.userInfo={};
        localStorage.removeItem('TOKEN');
    }
};
const getters ={};
export default{
    state,
    actions,
    mutations,
    getters
}
