<template>
  <el-submenu :index="item.index">
    <template slot="title">
      <i :class="item.icon"></i>
      <span>{{ item.title }}</span>
    </template>

    <!-- 遍历子菜单 -->
    <template v-for="child in item.children">
      <!-- 子菜单没有子项 -->
      <el-menu-item
        v-if="!child.children"
        :key="child.index"
        :index="child.index"
        @click="$router.push(child.route)"
      >
        <span slot="title">{{ child.title }}</span>
      </el-menu-item>

      <!-- 子菜单有子项 -->
      <sidebar-item
        v-else
        :key="child.index"
        :item="child"
      ></sidebar-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
