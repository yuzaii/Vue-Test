// 该文件是整个项目的入口文件
// 引入vue
import Vue from 'vue'
//引入app组件，他是所有组件的父组件
import App from './App.vue'
// 关关闭vue的生产提示
Vue.config.productionTip = false

// 创建vue的实例对象--vm
new Vue({
  // el:'#app',
  // 下面这行代码一会解释，完成了这个功能：将App组件放入容器中
  render: h => h(App),
})
.$mount('#app')// 或者用上面的el
// console.log(666)
