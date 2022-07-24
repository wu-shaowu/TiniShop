import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
//虚拟数据
const requests = axios.create({
    baseURL:'/mock',
    timeout:5000,
});
//请求
requests.interceptors.request.use((config)=>{
     nprogress.start();
     return config;
});

//回应
requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('false'));
})


export default requests