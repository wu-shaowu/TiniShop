import Mock from 'mockjs'
import floor from './floor.json'
import banner from './banner.json'
//中心轮播图
Mock.mock('/mock/banner',{code:200,data:banner});
//下方轮播图
Mock.mock('/mock/floor',{code:200,data:floor});