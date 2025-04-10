import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 ElementUI 组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入 ECharts
import * as echarts from 'echarts'

// 引入输入掩码库
import VueTheMask from 'vue-the-mask'

// 去除默认样式
import '@/assets/css/reset.scss'

// 引入mrz公共样式
import '@/assets/css/mrz-global.scss'
// 引入mrz表格样式
import '@/assets/css/mrz-table.scss'
// 引入mrz按钮样式
import '@/assets/css/mrz-button.scss'
// 引入mrz文字样式
import '@/assets/css/mrz-text.scss'
// 引入mrz分页样式
import '@/assets/css/mrz-paging.scss'
// 引入mrz颜色样式
import '@/assets/css/mrz-color.scss'
// 引入mrz进度条样式
import '@/assets/css/mrz-progress.scss'
// 引入mrz导航样式
import '@/assets/css/mrz-navigation.scss'
// 引入mrz通知样式
import '@/assets/css/mrz-notice.scss'
// 引入mrz弹出样式
import '@/assets/css/mrz-popover.scss'
// 引入mrz状态样式
import '@/assets/css/mrz-status.scss'

// 引入mrz表单样式
import '@/assets/css/mrz-form.scss'

Vue.use(ElementUI)
Vue.use(VueTheMask)

// 将 echarts 挂载到 Vue 原型上
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
