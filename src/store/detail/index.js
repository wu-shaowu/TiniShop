import { reqGoodsInfo ,reqAddOrUpdateShopCart} from "/src/api";
//封装游客临时身份
import {getUUID} from '/src/utils/uuid_token'
const state = {
    goodInfo:{},
    //游客的临时id
    uuid_token:getUUID()
};
const mutations = {
    GETGOODSINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    }
};
const actions ={
    //获得商品详情
   async getGoodsInfo(context,skuId){
       let result = await reqGoodsInfo(skuId);
       if(result.code==200){
           context.commit('GETGOODSINFO',result.data)
       }
    },
    //添加购物车或修改产品
    async addOrUpdateShopCart(context,{skuId,skuNum}){
        let  result = await reqAddOrUpdateShopCart(skuId,skuNum)
        //async函数
        if(result.code==200){
            return "ok"
        }else{
            return Promise.reject(new Error('false'));
        }
    }
};
const getters ={
    //路劲导航简化
    categoryView(state){
        return state.goodInfo.categoryView||{};
    },
    // 简化产品信息
    skuInfo(state){
        return state.goodInfo.skuInfo||{};
    },
    //产品售卖的属性简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[];
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}