import {createRouter, createWebHistory} from 'vue-router';
import {useI18n} from 'vue-i18n';  // 引入 useI18n
import Home from '../views/Home.vue';

// 创建路由配置
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'MaxCosmos | 主页',
        }
    }
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory("/"),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;
