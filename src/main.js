import {createApp} from 'vue';
import App from './App.vue';
import 'reset-css/reset.css';
import router from './router';
import i18n from './i18n'


const app = createApp(App);

// 使用 i18n 和 router 插件
app.use(i18n);
app.use(router);

// 挂载应用
app.mount('#app');
