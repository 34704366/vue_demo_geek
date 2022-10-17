import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
    {
        path: '/hello',
        component: () => import('../components/HelloWorld'),
        name: 'hello'
    },
    {
        path: '/item',
        component: () => import('../components/ToDoItem'),
        name: 'item'
    },
    {
        path: '/err',
        component: () => import('../components/ErrorPage'),
        name: '404'
    },

    
    // 重定向
    {
        path: '*',
        redirect: '/err'
    },
    {
        path: '/helloworld',
        redirect: '/hello'
    },
    {
        path: '/Hello',
        redirect: '/hello'
    },
]

// 创建router的函数
const createRouter = () => new Router({
    mode: 'history',
    routes: routes
});

// 自动创建
const router = createRouter();

// 重置路由
export function resetRouter() {
    const newRouter = createRouter();
    // reset
    router.matcher = newRouter.matcher;   
}

export default router


