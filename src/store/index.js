import Vue from 'vue'
import Vuex from 'vuex'
// import {reqCategoryList} from '/src/api'
Vue .use(Vuex);

import home from './home'
import search from './search';
import detail  from './detail';
import shopcar from './shopcar/shopcar';
import user from './user/user';
import trade from './trade/trade';
import pay from './pay/'
// const state =  {
//   categoryList:[],
// };
// const mutations = {
//   CATEGORYLIST(state,categoryList){
//     state.categoryList = categoryList;
   
//   }
// }

// const  actions = {
//     async categoryList({commit}){
//     let result = await reqCategoryList();
//     if(result.code == 200){
//       commit('CATEGORYLIST', result.data);
    
//     }
// }
// }

// const getters ={}

export default new Vuex.Store({
    modules:{
      home,
      search,
      detail,
      shopcar,
      user,
      trade,
      pay
    }

})

