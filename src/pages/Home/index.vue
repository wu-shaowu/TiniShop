<template>
<div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorlist" :key="floor.id" :list='floor'></Floor>
    <Brand></Brand>
</div>
</template>

<script>
import ListContainer from '../Home/ListContainer'
import Recommend from '../Home/Recommend'
import Rank from '../Home/Rank'
import Like from '../Home/Like'
import Floor from '../Home/Floor'
import Brand from '../Home/Brand'
import {mapState} from 'vuex'
export default {
    name:'MyHome',
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    mounted(){
     
        //发送请求获得轮播图数据
        this.$store.dispatch('getFloorList');
     
        //获得用户信息
        // try {
        //      this.$store.dispatch('getUserInfo');
        // } catch (error) {
        //     return 'fail'
        // }

        
    },
    computed:{
        //取下方轮播图数据
        floorlist(){
             return this.$store.state.home.floorlist 
        }
        // ...mapState({
        //     floorList:state=>state.home.floorlist
        // })
       
    }   
}
</script>

<style>

</style>