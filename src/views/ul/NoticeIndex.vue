<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <!-- 基础警告风格1 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础警告风格1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-alert
                  title="普通提示的文案" class="mrz-alert-1">
                </el-alert>

                <el-alert
                  title="成功提示的文案" class="mrz-alert-1 mrz-success" type="success">
                </el-alert>

                <el-alert
                  title="消息提示的文案" class="mrz-alert-1 mrz-info" type="info">
                </el-alert>

                <el-alert
                  title="警告提示的文案" class="mrz-alert-1 mrz-warning" type="warning">
                </el-alert>

                <el-alert
                  title="错误提示的文案" class="mrz-alert-1 mrz-danger" type="error">
                </el-alert>
              </div>
            </el-card>
          </el-col>

          <!-- 基础警告风格2 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础警告风格2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-alert
                  title="普通提示的文案" class="mrz-alert-2">
                </el-alert>

                <el-alert
                  title="成功提示的文案" class="mrz-alert-2 mrz-success" type="success">
                </el-alert>

                <el-alert
                  title="消息提示的文案" class="mrz-alert-2 mrz-info" type="info">
                </el-alert>

                <el-alert
                  title="警告提示的文案" class="mrz-alert-2 mrz-warning" type="warning">
                </el-alert>

                <el-alert
                  title="错误提示的文案" class="mrz-alert-2 mrz-danger" type="error">
                </el-alert>
              </div>
            </el-card>
          </el-col>

          <!-- 带图标警告风格1 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">带图标警告风格1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-alert
                  title="普通提示的文案" class="mrz-alert-1" show-icon>
                </el-alert>

                <el-alert
                  title="成功提示的文案" class="mrz-alert-1 mrz-success" type="success" show-icon>
                </el-alert>

                <el-alert
                  title="消息提示的文案" class="mrz-alert-1 mrz-info" type="info" show-icon>
                </el-alert>

                <el-alert
                  title="警告提示的文案" class="mrz-alert-1 mrz-warning" type="warning" show-icon>
                </el-alert>

                <el-alert
                  title="错误提示的文案" class="mrz-alert-1 mrz-danger" type="error" show-icon>
                </el-alert>
              </div>
            </el-card>
          </el-col>

          <!-- 带图标警告风格2 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">带图标警告风格2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-alert
                  title="普通提示的文案" class="mrz-alert-2" show-icon>
                </el-alert>

                <el-alert
                  title="成功提示的文案" class="mrz-alert-2 mrz-success" type="success" show-icon>
                </el-alert>

                <el-alert
                  title="消息提示的文案" class="mrz-alert-2 mrz-info" type="info" show-icon>
                </el-alert>

                <el-alert
                  title="警告提示的文案" class="mrz-alert-2 mrz-warning" type="warning" show-icon>
                </el-alert>

                <el-alert
                  title="错误提示的文案" class="mrz-alert-2 mrz-danger" type="error" show-icon>
                </el-alert>
              </div>
            </el-card>
          </el-col>

          <!-- 辅助性文字警告风格1 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">辅助性文字警告风格1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-alert
                  title="普通提示的文案" class="mrz-alert-1" description="这是辅助性文字说明">
                </el-alert>

                <el-alert
                  title="成功提示的文案" class="mrz-alert-1 mrz-success" type="success" description="这是辅助性文字说明">
                </el-alert>

                <el-alert
                  title="消息提示的文案" class="mrz-alert-1 mrz-info" type="info" description="这是辅助性文字说明">
                </el-alert>

                <el-alert
                  title="警告提示的文案" class="mrz-alert-1 mrz-warning" type="warning" description="这是辅助性文字说明">
                </el-alert>

                <el-alert
                  title="错误提示的文案" class="mrz-alert-1 mrz-danger" type="error" description="这是辅助性文字说明">
                </el-alert>
              </div>
            </el-card>
          </el-col>

          <!-- 辅助性文字警告风格2 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">辅助性文字警告风格2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-alert
                  title="普通提示的文案" class="mrz-alert-2" description="这是辅助性文字说明">
                </el-alert>

                <el-alert
                  title="成功提示的文案" class="mrz-alert-2 mrz-success" type="success" description="这是辅助性文字说明">
                </el-alert>

                <el-alert
                  title="消息提示的文案" class="mrz-alert-2 mrz-info" type="info" description="这是辅助性文字说明">
                </el-alert>

                <el-alert
                  title="警告提示的文案" class="mrz-alert-2 mrz-warning" type="warning" description="这是辅助性文字说明">
                </el-alert>

                <el-alert
                  title="错误提示的文案" class="mrz-alert-2 mrz-danger" type="error" description="这是辅助性文字说明">
                </el-alert>
              </div>
            </el-card>
          </el-col>

          <!-- 综合文字警告风格1 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">综合文字警告风格1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-alert
                  title="普通提示的文案" class="mrz-alert-1" description="这是辅助性文字说明" show-icon>
                </el-alert>

                <el-alert
                  title="成功提示的文案" class="mrz-alert-1 mrz-success" type="success" description="这是辅助性文字说明"
                  show-icon>
                </el-alert>

                <el-alert
                  title="消息提示的文案" class="mrz-alert-1 mrz-info" type="info" description="这是辅助性文字说明"
                  show-icon>
                </el-alert>

                <el-alert
                  title="警告提示的文案" class="mrz-alert-1 mrz-warning" type="warning" description="这是辅助性文字说明"
                  show-icon>
                </el-alert>

                <el-alert
                  title="错误提示的文案" class="mrz-alert-1 mrz-danger" type="error" description="这是辅助性文字说明"
                  show-icon>
                </el-alert>
              </div>
            </el-card>
          </el-col>

          <!-- 综合文字警告风格2 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">综合文字警告风格2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-alert
                  title="普通提示的文案" class="mrz-alert-2" description="这是辅助性文字说明" show-icon>
                </el-alert>

                <el-alert
                  title="成功提示的文案" class="mrz-alert-2 mrz-success" type="success" description="这是辅助性文字说明"
                  show-icon>
                </el-alert>

                <el-alert
                  title="消息提示的文案" class="mrz-alert-2 mrz-info" type="info" description="这是辅助性文字说明"
                  show-icon>
                </el-alert>

                <el-alert
                  title="警告提示的文案" class="mrz-alert-2 mrz-warning" type="warning" description="这是辅助性文字说明"
                  show-icon>
                </el-alert>

                <el-alert
                  title="错误提示的文案" class="mrz-alert-2 mrz-danger" type="error" description="这是辅助性文字说明"
                  show-icon>
                </el-alert>
              </div>
            </el-card>
          </el-col>

          <!-- 消息提示风格1 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">消息提示风格1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn" @click="open1()">普通</el-button>
                  <el-button class="mrz-btn" @click="open2()">成功</el-button>
                  <el-button class="mrz-btn" @click="open3()">消息</el-button>
                  <el-button class="mrz-btn" @click="open4()">警告</el-button>
                  <el-button class="mrz-btn" @click="open5()">错误</el-button>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 消息提示风格2 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">消息提示风格2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn" @click="open6()">普通</el-button>
                  <el-button class="mrz-btn" @click="open7()">成功</el-button>
                  <el-button class="mrz-btn" @click="open8()">消息</el-button>
                  <el-button class="mrz-btn" @click="open9()">警告</el-button>
                  <el-button class="mrz-btn" @click="open10()">错误</el-button>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 通知风格1 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">通知风格1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn" @click="open11()">普通默认位置</el-button>
                  <el-button class="mrz-btn" @click="open12()">成功左上角</el-button>
                  <el-button class="mrz-btn" @click="open13()">消息右上角</el-button>
                  <el-button class="mrz-btn" @click="open14()">警告左下角</el-button>
                  <el-button class="mrz-btn" @click="open15()">错误右下角</el-button>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 通知风格2 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">通知风格2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn" @click="open16()">普通默认位置</el-button>
                  <el-button class="mrz-btn" @click="open17()">成功左上角</el-button>
                  <el-button class="mrz-btn" @click="open18()">消息右上角</el-button>
                  <el-button class="mrz-btn" @click="open19()">警告左下角</el-button>
                  <el-button class="mrz-btn" @click="open20()">错误右下角</el-button>
                </div>
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
  name: 'NoticeIndex',
  methods: {
    open1 () {
      this.$message({
        message: '这是一条普通风格消息提示',
        customClass: 'mrz-message-1',
        showClose: true
      })
    },
    open2 () {
      this.$message({
        message: '这是一条成功风格消息提示',
        type: 'success',
        customClass: 'mrz-message-1 mrz-success',
        showClose: true
      })
    },
    open3 () {
      this.$message({
        message: '这是一条消息风格消息提示',
        type: 'info',
        customClass: 'mrz-message-1 mrz-info',
        showClose: true
      })
    },
    open4 () {
      this.$message({
        message: '这是一条警告风格消息提示',
        type: 'warning',
        customClass: 'mrz-message-1 mrz-warning',
        showClose: true
      })
    },
    open5 () {
      this.$message({
        message: '这是一条错误消息提示',
        type: 'error',
        customClass: 'mrz-message-1 mrz-danger',
        showClose: true
      })
    },
    open6 () {
      this.$message({
        message: '这是一条普通风格消息提示',
        customClass: 'mrz-message-2',
        showClose: true
      })
    },
    open7 () {
      this.$message({
        message: '这是一条成功风格消息提示',
        type: 'success',
        customClass: 'mrz-message-2 mrz-success',
        showClose: true
      })
    },
    open8 () {
      this.$message({
        message: '这是一条消息风格消息提示',
        type: 'info',
        customClass: 'mrz-message-2 mrz-info',
        showClose: true
      })
    },
    open9 () {
      this.$message({
        message: '这是一条警告风格消息提示',
        type: 'warning',
        customClass: 'mrz-message-2 mrz-warning',
        showClose: true
      })
    },
    open10 () {
      this.$message({
        message: '这是一条错误消息提示',
        type: 'error',
        customClass: 'mrz-message-2 mrz-danger',
        showClose: true
      })
    },
    open11 () {
      this.$notify.info({
        title: '基础',
        message: '这是一条基础通知',
        customClass: 'mrz-notify-1'
      })
    },
    open12 () {
      this.$notify({
        title: '成功',
        message: '这是一条成功通知',
        type: 'success',
        customClass: 'mrz-notify-1 mrz-success',
        position: 'top-left'
      })
    },
    open13 () {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息通知',
        customClass: 'mrz-notify-1 mrz-info',
        position: 'top-right'
      })
    },
    open14 () {
      this.$notify({
        title: '警告',
        message: '这是一条警告通知',
        type: 'warning',
        customClass: 'mrz-notify-1 mrz-warning',
        position: 'bottom-left'
      })
    },
    open15 () {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误通知',
        customClass: 'mrz-notify-1 mrz-danger',
        position: 'bottom-right'
      })
    },
    open16 () {
      this.$notify.info({
        title: '基础',
        message: '这是一条基础通知',
        customClass: 'mrz-notify-2'
      })
    },
    open17 () {
      this.$notify({
        title: '成功',
        message: '这是一条成功通知',
        type: 'success',
        customClass: 'mrz-notify-2 mrz-success',
        position: 'top-left'
      })
    },
    open18 () {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息通知',
        customClass: 'mrz-notify-2 mrz-info',
        position: 'top-right'
      })
    },
    open19 () {
      this.$notify({
        title: '警告',
        message: '这是一条警告通知',
        type: 'warning',
        customClass: 'mrz-notify-2 mrz-warning',
        position: 'bottom-left'
      })
    },
    open20 () {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误通知',
        customClass: 'mrz-notify-2 mrz-danger',
        position: 'bottom-right'
      })
    }
  }
}
</script>
