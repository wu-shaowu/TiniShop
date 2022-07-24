import {v4 as uuidv4} from 'uuid'
export const getUUID=()=>{
    //判断本地有无uuid
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    // 无则添加
    if(!uuid_token){
        //生成且保存
        uuid_token = uuidv4();
        localStorage.setItem('UUIDTOKEN',uuid_token);

    }
    return uuid_token;
}