<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 线形进度条 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">线形进度条</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">默认宽度</span>
                <el-progress class="mrz-progress" :percentage="0" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="25" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="75" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="100" :show-text="false"></el-progress>
              </div>
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">宽度</span>
                <el-progress class="mrz-progress" :percentage="0" :stroke-width="16"></el-progress>
                <el-progress class="mrz-progress" :percentage="25" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="75" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="100" :stroke-width="16" :show-text="false"></el-progress>
              </div>
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">大宽度</span>
                <el-progress class="mrz-progress" :percentage="0" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="25" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="75" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="100" :stroke-width="30" :show-text="false"></el-progress>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 进度显示进度条 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">进度显示进度条</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">默认宽度</span>
                <el-progress class="mrz-progress" :percentage="0" :show-text="true"></el-progress>
                <el-progress class="mrz-progress" :percentage="25" :show-text="true"></el-progress>
                <el-progress class="mrz-progress" :percentage="50" :show-text="true"></el-progress>
                <el-progress class="mrz-progress" :percentage="75" :show-text="true"></el-progress>
                <el-progress class="mrz-progress" :percentage="100" :show-text="true"></el-progress>
              </div>
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">宽度</span>
                <el-progress class="mrz-progress" :percentage="0" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="25" :stroke-width="16" :text-inside="true"></el-progress>
                <el-progress class="mrz-progress" :percentage="50" :stroke-width="16" :text-inside="true"></el-progress>
                <el-progress class="mrz-progress" :percentage="75" :stroke-width="16" :text-inside="true"></el-progress>
                <el-progress class="mrz-progress" :percentage="100" :stroke-width="16" :text-inside="true"></el-progress>
              </div>
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">大宽度</span>
                <el-progress class="mrz-progress" :percentage="0" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress" :percentage="25" :stroke-width="30" :text-inside="true"></el-progress>
                <el-progress class="mrz-progress" :percentage="50" :stroke-width="30" :text-inside="true"></el-progress>
                <el-progress class="mrz-progress" :percentage="75" :stroke-width="30" :text-inside="true"></el-progress>
                <el-progress class="mrz-progress" :percentage="100" :stroke-width="30" :text-inside="true"></el-progress>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 颜色进度条 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">颜色进度条</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">默认宽度</span>
                <el-progress class="mrz-progress mrz-success" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-info" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-warning" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-danger" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-black" :percentage="50" :show-text="false"></el-progress>
              </div>
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">宽度</span>
                <el-progress class="mrz-progress mrz-success" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-info" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-warning" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-danger" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-black" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
              </div>
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">大宽度</span>
                <el-progress class="mrz-progress mrz-success" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-info" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-warning" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-danger" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-black" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 条纹进度条 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">条纹进度条</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">默认宽度</span>
                <el-progress class="mrz-progress mrz-striped" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-success mrz-striped" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-info mrz-striped" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-warning mrz-striped" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-danger mrz-striped" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-black mrz-striped" :percentage="50" :show-text="false"></el-progress>
              </div>
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">宽度</span>
                <el-progress class="mrz-progress mrz-striped" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-success mrz-striped" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-info mrz-striped" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-warning mrz-striped" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-danger mrz-striped" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-black mrz-striped" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
              </div>
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">大宽度</span>
                <el-progress class="mrz-progress mrz-striped" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-success mrz-striped" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-info mrz-striped" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-warning mrz-striped" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-danger mrz-striped" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-black mrz-striped" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 动画条纹进度条 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">动画条纹进度条</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">默认宽度</span>
                <el-progress class="mrz-progress mrz-striped mrz-animated" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-success mrz-striped mrz-animated" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-info mrz-striped mrz-animated" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-warning mrz-striped mrz-animated" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-danger mrz-striped mrz-animated" :percentage="50" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-black mrz-striped mrz-animated" :percentage="50" :show-text="false"></el-progress>
              </div>
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">宽度</span>
                <el-progress class="mrz-progress mrz-striped mrz-animated" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-success mrz-striped mrz-animated" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-info mrz-striped mrz-animated" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-warning mrz-striped mrz-animated" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-danger mrz-striped mrz-animated" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-black mrz-striped mrz-animated" :percentage="50" :stroke-width="16" :show-text="false"></el-progress>
              </div>
              <div class="mrz-progress-section">
                <span class="mrz-progress-label">大宽度</span>
                <el-progress class="mrz-progress mrz-striped mrz-animated" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-success mrz-striped mrz-animated" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-info mrz-striped mrz-animated" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-warning mrz-striped mrz-animated" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-danger mrz-striped mrz-animated" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
                <el-progress class="mrz-progress mrz-black mrz-striped mrz-animated" :percentage="50" :stroke-width="30" :show-text="false"></el-progress>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ProgressIndex'
}
</script>
