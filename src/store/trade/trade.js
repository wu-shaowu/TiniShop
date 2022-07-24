import {reqAddressInfo,reqOrderInfo} from '/src/api/index'
const state={
    address:[],
    orderInfo:{},
}
const actions={
    async getAddressInfo({commit}){
        let result = await reqAddressInfo();
        console.log(result);
        if(result.code==200){
            commit('GETADDRESSINFO',result.data);
        }else{
            
        }
    },
     async getOrderInfo({commit}){
        let result = await reqOrderInfo();
        if(result.code==200){
            commit('GETORDERINFO',result.data);
        }else{
            
        }
    }
}
const mutations={
    GETADDRESSINFO(state,address){
        state.address=address;
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo=orderInfo;
    }
}
const getters ={}
export default{
    state,
    actions,
    mutations,
    getters
}