import { RouteConfig } from 'vue-router'

// 导入图表组件
import LineChart from '@/views/chart/LineChart.vue'
import BarChart from '@/views/chart/BarChart.vue'
import PieChart from '@/views/chart/PieChart.vue'
import OtherChart from '@/views/chart/OtherChart.vue'

// 图表部分的路由配置
const chartRoutes: Array<RouteConfig> = [
  {
    path: '/chart/lineChart',
    name: 'lineChart',
    component: LineChart,
    meta: { title: '折线图' }
  },
  {
    path: '/chart/barChart',
    name: 'barChart',
    component: BarChart,
    meta: { title: '柱状图' }
  },
  {
    path: '/chart/pieChart',
    name: 'pieChart',
    component: PieChart,
    meta: { title: '饼图' }
  },
  {
    path: '/chart/otherChart',
    name: 'otherChart',
    component: OtherChart,
    meta: { title: '其他组' }
  }
]

export default chartRoutes
