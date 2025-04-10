<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">FeatherIcon</span>
              <span class="mrz-card-subtitle">
              </span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body mrz-icon-grid">
              <div
                v-for="(icon, index) in icons"
                :key="index"
                class="mrz-icon-item"
              >
                <div class="mrz-icon-container">
                  <i :data-feather="icon" class="mrz-icon"></i>
                  <span class="mrz-icon-name">{{ icon }}</span>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
// 引入feather icon
import feather from 'feather-icons'
// 引入图标json
import iconsData from '@/assets/json/featherIcons.json'

export default {
  name: 'FeatherIcon',
  data () {
    return {
      icons: iconsData.value
    }
  },
  mounted () {
    // 在组件挂载后初始化
    feather.replace()
  }
}
</script>
