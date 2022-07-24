import requests from "./request";
import mockRequest from './mockAjax'
//三级列表
export const reqCategoryList =()=>requests({url:'/product/getBaseCategoryList',method:'get'})
//轮播图
export const reqGetBannerList = () =>mockRequest.get('/banner');
//floor
export const reqFloorList = () =>mockRequest.get('/floor');
//搜索
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'post',data:params});
//商品详情
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${skuId}`,method:'get'});
//加入购物车
export const reqAddOrUpdateShopCart =(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});
//查看购物车
export const  reqCarList=()=>requests({url:'/cart/cartList',method:'get'})
//删除购物车
export const reqDeleteCarById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
//修改购物车中勾选
export const reqUpdateCheckedByid = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
//注册获得验证码
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});
//注册
export const reqUserRegister=(data)=>requests({url:'/user/passport/register',data,method:'post'});
//登录
export const reqUserLogin =(data)=>requests({url:'/user/passport/login',data,method:'post'});
//获得用户信息带token
export const reqUserInfo =()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});
//退出登录
export const reqLogout =()=>requests({url:'/user/passport/logout',method:'get'});
//获得用户地址信息
export const reqAddressInfo=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});
//获得用户的订单交易
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});
//提交用户交易信息
export const reqSubmitOrder =(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
//获得支付的信息
export const reqPayInfo =(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
//获得支付订单的状态
export const reqPayStatus =(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
//获得订单列表
export const reqMyOrderList =(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})