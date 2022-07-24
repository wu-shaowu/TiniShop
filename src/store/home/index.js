import {
  reqCategoryList,
  reqGetBannerList,
  reqFloorList
} from '/src/api'
const state = {
  categoryList: [], //三级列表
  bannerList:[],    //中心轮播图
  floorlist:[]      //下方轮播floor

};

//   const  actions = {
//     async categoryList({commit}){
//     let result = await reqCategoryList();
//     if(result.code == 200){
//       commit('CATEGORYLIST', result.data);

//     }
// }
// }

const actions = {
  // 三级列表数据请求
  async categoryList(context, value) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      context.commit('CATEGORYLIST', result.data);
    }
  },
  //中心轮播图数据请求
  async getBannerList(context,value) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      context.commit('GETBANNERLIST', result.data);

    }
  },
  //下方轮播图的floor
  async getFloorList(context,value){
    let result = await reqFloorList();
    if(result.code==200){
      context.commit('GETFLOORLIST',result.data)
    }
  }
}

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;

  },
  GETBANNERLIST(state, bannerList){
    state.bannerList = bannerList
  },
  GETFLOORLIST(state,floorlist){
    state.floorlist = floorlist
  }
}



const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}