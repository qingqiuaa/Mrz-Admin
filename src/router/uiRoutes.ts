import { RouteConfig } from 'vue-router'

// 导入元素组件
import ButtonIndex from '@/views/ul/ButtonIndex.vue'
import TextIndex from '@/views/ul/TextIndex.vue'
import PagingIndex from '@/views/ul/PagingIndex.vue'
import ColorIndex from '@/views/ul/ColorIndex.vue'
import ProgressIndex from '@/views/ul/ProgressIndex.vue'
import NavigationIndex from '@/views/ul/NavigationIndex.vue'
import NoticeIndex from '@/views/ul/NoticeIndex.vue'
import PopoverIndex from '@/views/ul/PopoverIndex.vue'
import StatusIndex from '@/views/ul/StatusIndex.vue'
import LoadingIndex from '@/views/ul/LoadingIndex.vue'

// 元素部分的路由配置
const uiRoutes: Array<RouteConfig> = [
  {
    path: '/ui/button',
    name: 'button',
    component: ButtonIndex,
    meta: { title: '按钮' }
  },
  {
    path: '/ui/text',
    name: 'text',
    component: TextIndex,
    meta: { title: '文字' }
  },
  {
    path: '/ui/paging',
    name: 'paging',
    component: PagingIndex,
    meta: { title: '分页' }
  },
  {
    path: '/ui/color',
    name: 'color',
    component: ColorIndex,
    meta: { title: '颜色' }
  },
  {
    path: '/ui/progress',
    name: 'progress',
    component: ProgressIndex,
    meta: { title: '进度条' }
  },
  {
    path: '/ui/navigation',
    name: 'navigation',
    component: NavigationIndex,
    meta: { title: '导航' }
  },
  {
    path: '/ui/notice',
    name: 'notice',
    component: NoticeIndex,
    meta: { title: '通知' }
  },
  {
    path: '/ui/popover',
    name: 'popover',
    component: PopoverIndex,
    meta: { title: '弹出' }
  }, {
    path: '/ui/status',
    name: 'status',
    component: StatusIndex,
    meta: { title: '状态' }
  }, {
    path: '/ui/loading',
    name: 'loading',
    component: LoadingIndex,
    meta: { title: '加载' }
  }
]

export default uiRoutes
