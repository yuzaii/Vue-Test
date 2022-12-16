import Vue from 'vue'
// 有模板解析器
// import Vue from 'vue/dist/vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
    // template:`<App></App>`,
    // components:{App}
    // render(a){
    //     return createElement('h1','你好啊!')
    // }
    // render:createElement=>{
    //     return createElement('h1','你好啊!')
    // }
    // render:createElement=> createElement('h1','你好啊!')

    // render:q=> q('h1','你好啊!')
    render:h=> h(App)

    // render: h => h(App),
}).$mount('#app')
