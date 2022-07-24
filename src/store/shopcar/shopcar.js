import {
    reqCarList,
    reqDeleteCarById,
    reqUpdateCheckedByid
} from '/src/api/index'
const state = {
    carList: []
};
const actions = {
    //获得购物车
    async getCarList(context) {
        let result = await reqCarList();
        if (result.code == 200) {
            context.commit('GETCARLIST', result.data);

        }
    },
    //删除购物车 没有返回值的处理
    async deleteCarById(context, id) {
        let result = await reqDeleteCarById(id);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('false'));
        }
    },
    //修改购物车的勾选
    async updateCheckedByid(context, {
        skuId,
        isChecked
    }) {
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('false'));
        }
    },
    //删除选中的购物车，{选择context中需要的dispa，getters}
    deleteAllCheckedCar({dispatch,getters}){
        //遍历购物车中的数组，若被选中则发请求删除
        let PromiseAll = []; //装没次返回的promise
       getters.carList.cartInfoList.forEach(element => {
          let Promise = element.isChecked==1?dispatch('deleteCarById',element.skuId):'';
          PromiseAll.push(Promise); 
       });
       return Promise.all(PromiseAll)  //统一return 若有一个失败则返回失败
    },
    //修改全部产品的选中
    updataAllCarChecked({dispatch,getters},isChecked){
        let PromiseAll = [];
       
        getters.carList.cartInfoList.forEach(item=>{
           let promise = dispatch('updateCheckedByid',{skuId:item.skuId,isChecked:isChecked});
           PromiseAll.push(promise);
        })
        return  Promise.all(PromiseAll);
    }
};
const mutations = {
    GETCARLIST(state, value) {
        state.carList = value
    }
};
const getters = {
    //简化数据
    carList() {
        return state.carList[0] || []
    }
};
export default {
    state,
    actions,
    mutations,
    getters
}