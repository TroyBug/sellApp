// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    template: '<app/>', // 这里需要和components里的key相同
    components: { app: App }  // value要和import的名称相同
}).$mount('#app');
