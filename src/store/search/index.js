import {
    reqGetSearchInfo,
  } from '/src/api'
const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
}
const actions = {
    async getSearchList(context,params){ //默认参数
       let result = await reqGetSearchInfo(params)
       if(result.code==200){
           context.commit('GETSEARCHLIST',result.data);
       }
    }
}
const getters = {
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    attrsList(state){
        return state.searchList.attrsList;
    },
    trademarkList(state){
        return state.searchList.trademarkList;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}