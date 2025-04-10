import { RouteConfig } from 'vue-router'

// 导入图标组件
import ElementIcon from '@/views/icon/ElementIcon.vue'
import FeatherIcon from '@/views/icon/FeatherIcon.vue'
import RemixIcon from '@/views/icon/RemixIcon.vue'
import MaterialIcon from '@/views/icon/MaterialIcon.vue'

// 图标部分的路由配置
const iconRoutes: Array<RouteConfig> = [
  {
    path: '/icon/elementIcon',
    name: 'elementIcon',
    component: ElementIcon,
    meta: { title: 'ElementIcon' }
  },
  {
    path: '/icon/featherIcon',
    name: 'featherIcon',
    component: FeatherIcon,
    meta: { title: 'FeatherIcon' }
  },
  {
    path: '/icon/remixIcon',
    name: 'remixIcon',
    component: RemixIcon,
    meta: { title: 'RemixIcon' }
  },
  {
    path: '/icon/materialIcon',
    name: 'materialIcon',
    component: MaterialIcon,
    meta: { title: 'MaterialIcon' }
  }
]

export default iconRoutes
