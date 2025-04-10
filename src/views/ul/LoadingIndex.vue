<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <!-- 区域加载1 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">区域加载1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body" v-loading="loading1"></div>
            </el-card>
          </el-col>

          <!-- 区域加载2 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">区域加载2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body" v-loading="loading2"
                   element-loading-text="正在加载中"
                   element-loading-spinner="el-icon-loading"
              >
              </div>
            </el-card>
          </el-col>

          <!-- 整页加载1 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">整页加载1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-button class="mrz-btn" @click="openFullScreen1" v-loading.fullscreen.lock="loading3">按下加载
                </el-button>
              </div>
            </el-card>
          </el-col>

          <!-- 整页加载2 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">整页加载2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-button class="mrz-btn" @click="openFullScreen2" v-loading.fullscreen.lock="loading4"
                           element-loading-text="正在加载中" element-loading-spinner="el-icon-loading">按下加载
                </el-button>
              </div>
            </el-card>
          </el-col>

          <!-- 基础骨架屏 -->
          <el-col :span="8" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础骨架屏</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-skeleton />
              </div>
            </el-card>
          </el-col>

          <!-- 动画骨架屏 -->
          <el-col :span="8" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">动画骨架屏</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-skeleton animated/>
              </div>
            </el-card>
          </el-col>

          <!-- 空状态 -->
          <el-col :span="8" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">空状态</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-empty></el-empty>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  nane: 'LoadingIndex',
  data () {
    return {
      loading1: true,
      loading2: true,
      loading3: false,
      loading4: false
    }
  },
  methods: {
    openFullScreen1 () {
      this.loading3 = true
      setTimeout(() => {
        this.loading3 = false
      }, 2000)
    },
    openFullScreen2 () {
      this.loading4 = true
      setTimeout(() => {
        this.loading4 = false
      }, 2000)
    }
  }
}
</script>
