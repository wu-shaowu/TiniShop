// import axios from "axios";
// //进度条
// import nprogress from "nprogress";
// import 'nprogress/nprogress.css'
// //引入仓库
// import store  from "@/store";
// // axios请求
// const requests = axios.create({
//     baseURL:'/api',
//     timeout:5000,
// });
import axios from "axios";
import nprogress from "nprogress";
//在当前模块中引入store
import store from '@/store';
//如果出现进度条没有显示：一定是你忘记了引入样式了
import "nprogress/nprogress.css";
//底下的代码也是创建axios实例
let requests = axios.create({
  //基础路径
  baseURL: "/api",
  //请求不能超过5S
  timeout: 5000,
});

//请求拦截器---在项目中发请求（请求没有发出去）可以做一些事
requests.interceptors.request.use((config)=>{
    //请求前判断是否有临时身份证，有的把id写在请求头中，这是前端给后端数据，要后端配合
    if(store.state.detail.uuid_token){
        config.headers.userTempId=store.state.detail.uuid_token;
    }
    //没错发请求前，需要带token带给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token;
    }
     nprogress.start();   //进度条
     return config;
});

//响应拦截器--当服务器手动请求之后，做出响应（响应成功）会执行
requests.interceptors.response.use((res)=>{
    nprogress.done();   //进度条
    return res.data;
},(error)=>{
    return Promise.reject(new Error('false'));
})


export default requests