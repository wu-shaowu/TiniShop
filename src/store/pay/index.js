import {reqPayInfo} from '../../api/index'
const state ={
    payInfo:{}
}
const actions ={
  async getPayInfo({commit},orderId){
    console.log(111111111111111111111);
    let result = await reqPayInfo(orderId)
    if(result.code==200){
        commit('GETPAYINFO',result.data)
    }
    
 }
}
const mutations = {
    GETPAYINFO(state,payInfo){
        state.payInfo = payInfo;
    }
}
const getters ={}
export default{
    state,
    actions,
    mutations,
    getters
}