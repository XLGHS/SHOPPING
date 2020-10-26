import Vue from 'vue'
import App from './App.vue'

//导入路由模块
import router from "./router/index.js"
// 引入mint-ui模块
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//引入store模块
import store from "@/vuex/store.js";
//引用 ly-tab
import LyTab from 'ly-tab'
Vue.use(LyTab)
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')