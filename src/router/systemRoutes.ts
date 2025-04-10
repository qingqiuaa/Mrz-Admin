import { RouteConfig } from 'vue-router'

// 导入系统页组件
import BadRequest from '@/views/system/BadRequest.vue'
import NotFound from '@/views/system/NotFound.vue'
import ForBiddenIndex from '@/views/system/ForBiddenIndex.vue'
import BadGateway from '@/views/system/BadGateway.vue'
import ServiceUnavailable from '@/views/system/ServiceUnavailable.vue'
import LoginIndex from '@/views/system/LoginIndex.vue'
import RegisterIndex from '@/views/system/RegisterIndex.vue'

// 图标部分的路由配置
const systemRoutes: Array<RouteConfig> = [
  {
    path: '/system/400',
    name: '400',
    component: BadRequest,
    meta: { title: '400' }
  },
  {
    path: '/system/403',
    name: '403',
    component: ForBiddenIndex,
    meta: { title: '403' }
  },
  {
    path: '/system/404',
    name: '404',
    component: NotFound,
    meta: { title: '404' }
  },
  {
    path: '/system/502',
    name: '502',
    component: BadGateway,
    meta: { title: '502' }
  },
  {
    path: '/system/503',
    name: '503',
    component: ServiceUnavailable,
    meta: { title: '503' }
  },
  {
    path: '/system/login',
    name: 'login',
    component: LoginIndex,
    meta: { title: '登录' }
  },
  {
    path: '/system/register',
    name: 'register',
    component: RegisterIndex,
    meta: { title: '注册' }
  }
]

export default systemRoutes
