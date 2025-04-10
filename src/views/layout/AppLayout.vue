<template>
  <el-container style="height: 100vh">
    <!-- 网页端侧边栏 -->
    <el-aside
      v-if="!isMobile"
      :width="isCollapse ? '64px' : '200px'"
      style="background-color: #ffffff; transition: width 0.3s"
    >
      <!-- LOGO 区域 -->
      <div
        :style="{ padding: isCollapse ? '10px' : '20px' }"
        class="logo-container"
      >
        <img :src="logo" alt="LOGO" class="logo-icon"/>
        <span v-show="!isCollapse" class="logo-text">{{ title }}</span>
      </div>

      <!-- 侧边导航栏 -->
      <el-menu
        :collapse="isCollapse"
        :collapse-transition="false"
        :default-active="activeMenu"
        active-text-color="#409EFF"
        background-color="#ffffff"
        class="el-menu-vertical-demo"
        text-color="#333"
      >
        <template v-for="(item, index) in menuData">
          <el-menu-item
            v-if="!item.children"
            :key="index"
            :index="item.index"
            @click="$router.push(item.route)"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>

          <mrz-sidebar-item
            v-else
            :key="index"
            :item="item"
            :base-index="item.index"
          />
        </template>
      </el-menu>
    </el-aside>

    <!-- 移动端侧边栏 Drawer -->
    <el-drawer
      v-if="isMobile"
      :modal="true"
      :show-close="false"
      :visible.sync="isCollapse"
      :with-header="false"
      custom-class="mobile-sidebar-drawer"
      direction="ltr"
      size="200px"
    >
      <!-- LOGO 区域 -->
      <div class="logo-container" style="padding: 20px">
        <img :src="logo" alt="LOGO" class="logo-icon"/>
        <span class="logo-text">{{ title }}</span>
      </div>

      <!-- 侧边导航栏 -->
      <el-menu
        :collapse="false"
        :collapse-transition="false"
        :default-active="activeMenu"
        active-text-color="#409EFF"
        background-color="#ffffff"
        class="el-menu-vertical-demo"
        text-color="#333"
      >
        <template v-for="(item, index) in menuData">
          <el-menu-item
            v-if="!item.children"
            :key="index"
            :index="item.index"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>

          <mrz-sidebar-item
            v-else
            :key="index"
            :item="item"
            :base-index="item.index"
          />
        </template>
      </el-menu>
    </el-drawer>

    <el-container>
      <!-- 顶部导航栏 -->
      <el-header
        style="
          background-color: #ffffff;
          border-bottom: 1px solid #e6e6e6;
          display: flex;
          align-items: center;
        "
      >
        <!-- 折叠按钮 -->
        <el-button
          :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          style="font-size: 20px; border: none; background: none"
          @click="toggleCollapse"
        ></el-button>

        <!-- 动态面包屑 -->
        <el-breadcrumb separator="/" style="margin-left: 20px">
          <template v-for="(item, index) in breadcrumbList">
            <el-breadcrumb-item
              :key="index"
              :to="item.path ? { path: item.path } : null"
            >
              {{ item.meta.title }}
            </el-breadcrumb-item>
          </template>
        </el-breadcrumb>

        <div class="user-info">
          <el-dropdown trigger="click">
            <div class="user-info-content">
              <img
                :src="userAvatar"
                class="user-avatar"
                alt="用户头像"
              >
              <span class="user-name">{{ userName }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="profile">
                <i class="el-icon-user"></i>个人中心
              </el-dropdown-item>
              <el-dropdown-item command="settings">
                <i class="el-icon-setting"></i>个人设置
              </el-dropdown-item>
              <el-dropdown-item divided command="logout">
                <i class="el-icon-switch-button"></i>退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <!-- 主体内容 -->
      <el-main v-if="!isMobile" style="background-color: #f5f5f5">
        <router-view></router-view>
      </el-main>

      <div v-if="isMobile" style="background-color: #f5f5f5">
        <router-view></router-view>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import MrzSidebarItem from '@/components/MrzSidebarItem'

export default {
  name: 'AppLayout',
  data () {
    return {
      title: 'Mrz-Admin',
      isCollapse: false,
      logo: require('@/assets/images/logo.png'),
      userAvatar: require('@/assets/images/logo.png'),
      userName: 'MrzAdmin',
      // 是否移动端
      isMobile: false,
      menuData: [
        {
          title: '仪表板',
          icon: 'el-icon-s-data',
          index: '1',
          route: '/dashboard'
        },
        {
          title: '表格',
          icon: 'el-icon-s-grid',
          index: '2',
          children: [
            {
              title: '基础表格',
              index: '2-1',
              route: '/table/basicTable'
            },
            {
              title: '数据表格',
              index: '2-2',
              route: '/table/dataTable'
            }
          ]
        },
        {
          title: '元素UI',
          icon: 'el-icon-s-tools',
          index: '3',
          children: [
            {
              title: '按钮',
              index: '3-1',
              route: '/ui/button'
            },
            {
              title: '文字',
              index: '3-2',
              route: '/ui/text'
            },
            {
              title: '分页',
              index: '3-3',
              route: '/ui/paging'
            },
            {
              title: '颜色',
              index: '3-4',
              route: '/ui/color'
            },
            {
              title: '进度条',
              index: '3-5',
              route: '/ui/progress'
            },
            {
              title: '导航',
              index: '3-6',
              route: '/ui/navigation'
            },
            {
              title: '通知',
              index: '3-7',
              route: '/ui/notice'
            },
            {
              title: '弹出',
              index: '3-8',
              route: '/ui/popover'
            },
            {
              title: '状态',
              index: '3-9',
              route: '/ui/status'
            }, {
              title: '加载',
              index: '3-10',
              route: '/ui/loading'
            }
          ]
        },
        {
          title: '图标',
          icon: 'el-icon-picture',
          index: '4',
          children: [
            {
              title: 'elementIcon',
              index: '4-1',
              route: '/icon/elementIcon'
            },
            {
              title: 'featherIcon',
              index: '4-2',
              route: '/icon/featherIcon'
            },
            {
              title: 'remixIcon',
              index: '4-3',
              route: '/icon/remixIcon'
            },
            {
              title: 'materialIcon',
              index: '4-4',
              route: '/icon/materialIcon'
            }
          ]
        },
        {
          title: '图表',
          icon: 'el-icon-data-line',
          index: '5',
          children: [
            {
              title: '折线图',
              index: '5-1',
              route: '/chart/lineChart'
            },
            {
              title: '柱状图',
              index: '5-2',
              route: '/chart/barChart'
            },
            {
              title: '饼图',
              index: '5-3',
              route: '/chart/pieChart'
            },
            {
              title: '其他图',
              index: '5-4',
              route: '/chart/otherChart'
            }
          ]
        },
        {
          title: '表单',
          icon: 'el-icon-tickets',
          index: '6',
          children: [
            {
              title: '输入',
              index: '6-1',
              route: '/form/input'
            },
            {
              title: '选择',
              index: '6-2',
              route: '/form/select'
            },
            {
              title: '上传',
              index: '6-3',
              route: '/form/upload'
            },
            {
              title: '布局',
              index: '6-4',
              route: '/form/layout'
            }
          ]
        },
        {
          title: '系统页',
          icon: 'el-icon-tickets',
          index: '7',
          children: [
            {
              title: '400',
              index: '7-1',
              route: '/system/400'
            },
            {
              title: '403',
              index: '7-2',
              route: '/system/403'
            },
            {
              title: '404',
              index: '7-3',
              route: '/system/404'
            },
            {
              title: '502',
              index: '7-4',
              route: '/system/502'
            },
            {
              title: '503',
              index: '7-5',
              route: '/system/503'
            },
            {
              title: '登录',
              index: '7-6',
              route: '/system/login'
            },
            {
              title: '注册',
              index: '7-7',
              route: '/system/register'
            }
          ]
        },
        {
          title: '空白页',
          icon: '',
          index: '8',
          route: '/starter'
        },
        {
          title: '一级目录',
          icon: '',
          index: '9',
          children: [
            {
              title: '二级目录',
              index: '9-1',
              children: [
                {
                  title: '三级目录',
                  index: '9-1-1',
                  route: '#'
                },
                {
                  title: '三级目录',
                  index: '9-1-2',
                  route: '#'
                }
              ]
            },
            {
              title: '二级目录',
              index: '9-2',
              children: [
                {
                  title: '三级目录',
                  index: '9-2-1',
                  route: '#'
                },
                {
                  title: '三级目录',
                  index: '9-2-2',
                  route: '#'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    checkIsMobile () {
      // 判断是否为移动端
      this.isMobile = window.innerWidth < 768
    }
  },
  computed: {
    activeMenu () {
      const route = this.$route.path
      switch (route) {
        case '/dashboard':
          // 仪表板
          return '1'
        case '/table/basicTable':
          // 基础表格
          return '2-1'
        case '/table/dataTable':
          // 数据表格
          return '2-2'
        case '/ui/button':
          // 按钮
          return '3-1'
        case '/ui/text':
          // 文字
          return '3-2'
        case '/ui/paging':
          // 分页
          return '3-3'
        case '/ui/color':
          // 颜色
          return '3-4'
        case '/ui/progress':
          // 进度条
          return '3-5'
        case '/ui/navigation':
          // 面包屑
          return '3-6'
        case '/ui/notice':
          // 通知
          return '3-7'
        case '/ui/popover':
          // 弹出
          return '3-8'
        case '/ui/status':
          // 状态
          return '3-9'
        case '/ui/loading':
          // 加载
          return '3-10'
        case '/icon/elementIcon':
          // Element图标
          return '4-1'
        case '/icon/featherIcon':
          // FeatherIcon图标
          return '4-2'
        case '/icon/remixIcon':
          // RemixIcon图标
          return '4-3'
        case '/icon/materialIcon':
          // MaterialIcon图标
          return '4-4'
        case '/chart/lineChart':
          // 折线图
          return '5-1'
        case '/chart/barChart':
          // 柱状图
          return '5-2'
        case '/chart/pieChart':
          // 饼图
          return '5-3'
        case '/chart/otherChart':
          // 其他图
          return '5-4'
        case '/form/input':
          // 输入
          return '6-1'
        case '/form/select':
          // 选择
          return '6-2'
        case '/form/upload':
          // 布局
          return '6-3'
        case '/form/layout':
          // 布局
          return '6-4'
        case '/system/400':
          // 请求无效
          return '7-1'
        case '/system/403':
          // 禁止访问
          return '7-2'
        case '/system/404':
          // 未找到页面
          return '7-3'
        case '/system/502':
          // 网关错误
          return '7-4'
        case '/system/503':
          // 服务不可用
          return '7-5'
        case '/system/login':
          // 登录
          return '7-6'
        case '/system/register':
          // 注册
          return '7-7'
        case '/starter':
          // 空白页
          return '8'
        default:
          // 默认激活仪表板
          return '1'
      }
    },
    breadcrumbList () {
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]
      if (first && first.name !== 'dashboard') {
        matched.unshift({
          path: '/dashboard',
          meta: { title: '仪表板' }
        })
      }
      return matched
    }
  },
  mounted () {
    // 初始化时判断设备类型
    this.checkIsMobile()
    // 监听窗口变化
    window.addEventListener('resize', this.checkIsMobile)
  },
  beforeDestroy () {
    // 销毁时移除监听
    window.removeEventListener('resize', this.checkIsMobile)
  },
  components: {
    MrzSidebarItem
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.el-aside {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.1);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-main {
  padding: 20px;
}

.logo-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  height: 60px;
  overflow: hidden;
  padding-left: 20px;
}

.logo-icon {
  width: 40px;
  height: 40px;
}

.logo-text {
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mobile-sidebar-drawer .el-drawer__body {
  padding: 0;
}

.mobile-sidebar-drawer .el-menu {
  border-right: none;
}

.user-info {
  margin-left: auto;
  cursor: pointer;
  padding: 0 20px;

  .user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }

  .user-info-content {
    display: flex;
    align-items: center;
    height: 60px;

    .user-name {
      font-size: 14px;
      color: #333;
      margin-right: 5px;
    }

    &:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
