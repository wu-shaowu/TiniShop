//路由配置信息
// import Home from '../pages/Home'  懒加载，使用的时候再引入加载
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
//二级
import MyOrder from '../pages/Center/myOrder'
import GroupOrder from '../pages/Center/groupOrder'
export default [{
        path: '/center',
        component: Center,
        meta: {
            show: true
        },
        children: [{
                path: 'myorder',
                component: MyOrder,
            },
            {
                path: 'grouporder',
                component: GroupOrder
            },
            {
                path: '/center',
                redirect: '/center/myorder'

            },
        ]
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: {
            show: true
        },
        beforeEnter: (to, from, next) => {
            if(from.path=='/pay'){
                next();
            }else{
                next(false)
            }
        }
       
    },
    {
        path: '/pay',
        component: Pay,
        meta: {
            show: true
        },
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        path: '/trade',
        component: Trade,
        meta: {
            show: true
        },
        //独享守卫
        beforeEnter: (to, from, next) => {
            //只能从购物车去
            if(from.path=='/shopcart'){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        path: '/shopCart',
        component: ShopCart,
        meta: {
            show: true
        }
    },
    {
        path: '/home',
        //懒加载，使用的时候再引入加载
        component:()=>import('../pages/Home'),
        meta: {
            show: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show: false
        },
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            show: true
        },
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: {
            show: true
        },
        name: 'search'
    },
    {
        path: '/addCartSuccess',
        component: AddCartSuccess,
        meta: {
            show: true
        },
        name: 'addCartSuccess'
    },

    //重定向
    {
        path: '*',
        redirect: '/home'
    }
]