<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <!-- 基础标签风格1 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础标签风格1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-tag class="mrz-tag-1">普通标签</el-tag>
                <el-tag class="mrz-tag-1 mrz-success">成功风标签</el-tag>
                <el-tag class="mrz-tag-1 mrz-info">消息风标签</el-tag>
                <el-tag class="mrz-tag-1 mrz-warning">警告风标签</el-tag>
                <el-tag class="mrz-tag-1 mrz-danger">危险风标签</el-tag>
              </div>
            </el-card>
          </el-col>

          <!-- 基础标签风格2 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础标签风格2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-tag class="mrz-tag-2">普通标签</el-tag>
                <el-tag class="mrz-tag-2 mrz-success">成功风标签</el-tag>
                <el-tag class="mrz-tag-2 mrz-info">消息风标签</el-tag>
                <el-tag class="mrz-tag-2 mrz-warning">警告风标签</el-tag>
                <el-tag class="mrz-tag-2 mrz-danger">危险风标签</el-tag>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <!-- 基础标记风格1 -->
        <el-col :span="12" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">基础标记风格1</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-badge-group">
                <el-badge class="mrz-badge-1" :value="99">
                  <el-button class="mrz-btn" size="small">普通标记</el-button>
                </el-badge>
                <el-badge class="mrz-badge-1 mrz-success" :value="99">
                  <el-button class="mrz-btn" size="small">成功标记</el-button>
                </el-badge>
                <el-badge class="mrz-badge-1 mrz-info" :value="99">
                  <el-button class="mrz-btn" size="small">消息标记</el-button>
                </el-badge>
                <el-badge class="mrz-badge-1 mrz-warning" :value="99">
                  <el-button class="mrz-btn" size="small">警告标记</el-button>
                </el-badge>
                <el-badge class="mrz-badge-1 mrz-danger" :value="99">
                  <el-button class="mrz-btn" size="small">危险标记</el-button>
                </el-badge>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 基础标记风格2 -->
        <el-col :span="12" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">基础标记风格2</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-badge-group">
                <el-badge class="mrz-badge-2" :value="99">
                  <el-button class="mrz-btn" size="small">普通标记</el-button>
                </el-badge>
                <el-badge class="mrz-badge-2 mrz-success" :value="99">
                  <el-button class="mrz-btn" size="small">成功标记</el-button>
                </el-badge>
                <el-badge class="mrz-badge-2 mrz-info" :value="99">
                  <el-button class="mrz-btn" size="small">消息标记</el-button>
                </el-badge>
                <el-badge class="mrz-badge-2 mrz-warning" :value="99">
                  <el-button class="mrz-btn" size="small">警告标记</el-button>
                </el-badge>
                <el-badge class="mrz-badge-2 mrz-danger" :value="99">
                  <el-button class="mrz-btn" size="small">危险标记</el-button>
                </el-badge>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'StatusIndex'
}
</script>
