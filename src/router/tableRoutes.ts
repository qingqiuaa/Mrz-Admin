import { RouteConfig } from 'vue-router'

// 导入表格组件
import BasicTable from '@/views/table/BasicTable.vue'
import DataTable from '@/views/table/DataTable.vue'

// 表格部分的路由配置
const tableRoutes: Array<RouteConfig> = [
  {
    path: '/table/basicTable',
    name: 'basicTable',
    component: BasicTable,
    meta: { title: '基础表格' }
  },
  {
    path: '/table/dataTable',
    name: 'dataTable',
    component: DataTable,
    meta: { title: '数据表格' }
  }
]

export default tableRoutes
