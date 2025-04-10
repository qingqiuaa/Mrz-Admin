import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import DashBoard from '@/views/dashboard/DashBoard.vue'

// 导入布局组件
import AppLayout from '@/views/layout/AppLayout.vue'

// 导入表格部分的路由模块
import tableRoutes from './tableRoutes'

// 导入元素UI部分的路由模块
import uiRoutes from './uiRoutes'

// 导入图标部分的路由模块
import iconRoutes from './iconRoutes'

// 导入图表部分的路由模块
import chartRoutes from '@/router/chartRoutes'

// 导入表单部分的路由模块
import formRoutes from './formRoutes'

// 导入系统页部分的路由模块
import systemRoutes from '@/router/systemRoutes'

// 导入空白页组件
import StarterIndex from '@/views/starter/StarterIndex.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: AppLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard,
        meta: { title: '仪表板' }
      },
      // 合并表格部分的路由
      ...tableRoutes,
      // 合并元素部分的路由
      ...uiRoutes,
      // 合并图标部分的路由
      ...iconRoutes,
      // 合并图表部分的路由
      ...chartRoutes,
      // 合并表单部分的路由
      ...formRoutes,
      {
        path: '/starter',
        name: 'starter',
        component: StarterIndex,
        meta: { title: '空白页' }
      }
    ]
  },
  // 合并系统页部分的路由
  ...systemRoutes
]

const router = new VueRouter({
  routes
})

// 捕获 NavigationDuplicated 错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location: any) {
  return (originalPush.call(this, location) as any).catch((err: any) => {
    if (err.name !== 'NavigationDuplicated') throw err
  })
}

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === from.path) {
    next(false)
  } else {
    next()
  }
})

export default router
