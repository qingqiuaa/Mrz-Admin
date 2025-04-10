import { RouteConfig } from 'vue-router'

// 导入表单组件
import InputIndex from '@/views/form/InputIndex.vue'
import SelectIndex from '@/views/form/SelectIndex.vue'
import UploadIndex from '@/views/form/UploadIndex.vue'
import FormLayout from '@/views/form/FormLayout.vue'

const formRoutes: Array<RouteConfig> = [
  {
    path: '/form/input',
    name: 'input',
    component: InputIndex,
    meta: { title: '输入' }
  },
  {
    path: '/form/select',
    name: 'select',
    component: SelectIndex,
    meta: { title: '选择' }
  },
  {
    path: '/form/upload',
    name: 'upload',
    component: UploadIndex,
    meta: { title: '上传' }
  },
  {
    path: '/form/layout',
    name: 'layout',
    component: FormLayout,
    meta: { title: '布局' }
  }
]

export default formRoutes
