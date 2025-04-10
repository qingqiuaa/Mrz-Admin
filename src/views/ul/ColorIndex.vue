<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <!-- 基础色调 -->
          <el-col :span="24" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础色调</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-color-palette">
                  <!-- 纯白 -->
                  <div class="mrz-color-item mrz-bg-white">
                    <span class="mrz-color-name mrz-text-black">纯白</span>
                    <span class="mrz-color-value mrz-text-black">#FFFFFF</span>
                  </div>
                  <!-- 灰色 -->
                  <div class="mrz-color-item mrz-bg-gray">
                    <span class="mrz-color-name mrz-text-black">灰色</span>
                    <span class="mrz-color-value mrz-text-black">#DDEEEE</span>
                  </div>
                  <!-- 纯黑 -->
                  <div class="mrz-color-item mrz-bg-black">
                    <span class="mrz-color-name mrz-text-white">纯黑</span>
                    <span class="mrz-color-value mrz-text-white">#000000</span>
                  </div>
                  <!-- 主要色 -->
                  <div class="mrz-color-item mrz-bg-primary">
                    <span class="mrz-color-name mrz-text-white">主要色</span>
                    <span class="mrz-color-value mrz-text-white">#4A90E2</span>
                  </div>
                  <!-- 成功色 -->
                  <div class="mrz-color-item mrz-bg-success">
                    <span class="mrz-color-name mrz-text-white">成功色</span>
                    <span class="mrz-color-value mrz-text-white">#5DBD84</span>
                  </div>
                  <!-- 信息色 -->
                  <div class="mrz-color-item mrz-bg-info">
                    <span class="mrz-color-name mrz-text-white">信息色</span>
                    <span class="mrz-color-value mrz-text-white">#56CFE1</span>
                  </div>
                  <!-- 警告色 -->
                  <div class="mrz-color-item mrz-bg-warning">
                    <span class="mrz-color-name mrz-text-white">警告色</span>
                    <span class="mrz-color-value mrz-text-white">#FFAA4C</span>
                  </div>
                  <!-- 危险色 -->
                  <div class="mrz-color-item mrz-bg-danger">
                    <span class="mrz-color-name mrz-text-white">危险色</span>
                    <span class="mrz-color-value mrz-text-white">#FF6B6B</span>
                  </div>
                  <!-- 次主要色1 -->
                  <div class="mrz-color-item mrz-bg-primary-light-1">
                    <span class="mrz-color-name mrz-text-primary-light-2">次主要色1</span>
                    <span class="mrz-color-value mrz-text-primary-light-2">#ECF5FF</span>
                  </div>
                  <!-- 次主要色2 -->
                  <div class="mrz-color-item mrz-bg-primary-light-2">
                    <span class="mrz-color-name mrz-text-primary-light-1">次主要色2</span>
                    <span class="mrz-color-value mrz-text-primary-light-1">#A0CFFF</span>
                  </div>
                  <!-- 次成功色1 -->
                  <div class="mrz-color-item mrz-bg-success-light-1">
                    <span class="mrz-color-name mrz-text-success-light-2">次成功色1</span>
                    <span class="mrz-color-value mrz-text-success-light-2">#F0F9EB</span>
                  </div>
                  <!-- 次成功色2 -->
                  <div class="mrz-color-item mrz-bg-success-light-2">
                    <span class="mrz-color-name mrz-text-success-light-1">次成功色2</span>
                    <span class="mrz-color-value mrz-text-success-light-1">#B3E19D</span>
                  </div>
                  <!-- 次信息色1 -->
                  <div class="mrz-color-item mrz-bg-info-light-1">
                    <span class="mrz-color-name mrz-text-info-light-2">次信息色1</span>
                    <span class="mrz-color-value mrz-text-info-light-2">#56CFE1</span>
                  </div>
                  <!-- 次信息色2 -->
                  <div class="mrz-color-item mrz-bg-info-light-2">
                    <span class="mrz-color-name mrz-text-info-light-1">次信息色2</span>
                    <span class="mrz-color-value mrz-text-info-light-1">#F4F4F5</span>
                  </div>
                  <!-- 次警告色1 -->
                  <div class="mrz-color-item mrz-bg-warning-light-1">
                    <span class="mrz-color-name mrz-text-warning-light-2">次警告色1</span>
                    <span class="mrz-color-value mrz-text-warning-light-2">#FEF6EC</span>
                  </div>
                  <!-- 次警告色2 -->
                  <div class="mrz-color-item mrz-bg-warning-light-2">
                    <span class="mrz-color-name mrz-text-warning-light-1">次警告色2</span>
                    <span class="mrz-color-value mrz-text-warning-light-1">#F0C78A</span>
                  </div>
                  <!-- 次危险色1 -->
                  <div class="mrz-color-item mrz-bg-danger-light-1">
                    <span class="mrz-color-name mrz-text-danger-light-2">次危险色1</span>
                    <span class="mrz-color-value mrz-text-danger-light-2">#FEF0F0</span>
                  </div>
                  <!-- 次危险色2 -->
                  <div class="mrz-color-item mrz-bg-danger-light-2">
                    <span class="mrz-color-name mrz-text-danger-light-1">次危险色2</span>
                    <span class="mrz-color-value mrz-text-danger-light-1">#FAB6B6</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 红色调 -->
          <el-col :span="24" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">红色调</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-color-palette">
                  <!-- 浅红 -->
                  <div class="mrz-color-item mrz-bg-light-red">
                    <span class="mrz-color-name mrz-text-black">浅红</span>
                    <span class="mrz-color-value mrz-text-black">#FFB5B5</span>
                  </div>
                  <!-- 较浅红 -->
                  <div class="mrz-color-item mrz-bg-lighter-red">
                    <span class="mrz-color-name mrz-text-black">较浅红</span>
                    <span class="mrz-color-value mrz-text-black">#FF8888</span>
                  </div>
                  <!-- 普通红 -->
                  <div class="mrz-color-item mrz-bg-normal-red">
                    <span class="mrz-color-name mrz-text-white">普通红</span>
                    <span class="mrz-color-value mrz-text-white">#F56C6C</span>
                  </div>
                  <!-- 较深红 -->
                  <div class="mrz-color-item mrz-bg-darker-red">
                    <span class="mrz-color-name mrz-text-white">较深红</span>
                    <span class="mrz-color-value mrz-text-white">#C45656</span>
                  </div>
                  <!-- 深红 -->
                  <div class="mrz-color-item mrz-bg-dark-red">
                    <span class="mrz-color-name mrz-text-white">深红</span>
                    <span class="mrz-color-value mrz-text-white">#933F3F</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 橙色调 -->
          <el-col :span="24" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">橙色调</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-color-palette">
                  <!-- 浅橙 -->
                  <div class="mrz-color-item mrz-bg-light-orange">
                    <span class="mrz-color-name mrz-text-black">浅橙</span>
                    <span class="mrz-color-value mrz-text-black">#FFD4A5</span>
                  </div>
                  <!-- 较浅橙 -->
                  <div class="mrz-color-item mrz-bg-lighter-orange">
                    <span class="mrz-color-name mrz-text-black">较浅橙</span>
                    <span class="mrz-color-value mrz-text-black">#FFAA4C</span>
                  </div>
                  <!-- 普通橙 -->
                  <div class="mrz-color-item mrz-bg-normal-orange">
                    <span class="mrz-color-name mrz-text-white">普通橙</span>
                    <span class="mrz-color-value mrz-text-white">#E6A23C</span>
                  </div>
                  <!-- 较深橙 -->
                  <div class="mrz-color-item mrz-bg-darker-orange">
                    <span class="mrz-color-name mrz-text-white">较深橙</span>
                    <span class="mrz-color-value mrz-text-white">#B88230</span>
                  </div>
                  <!-- 深橙 -->
                  <div class="mrz-color-item mrz-bg-dark-orange">
                    <span class="mrz-color-name mrz-text-white">深橙</span>
                    <span class="mrz-color-value mrz-text-white">#8A6224</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 黄色调 -->
          <el-col :span="24" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">黄色调</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-color-palette">
                  <!-- 浅黄 -->
                  <div class="mrz-color-item mrz-bg-light-yellow">
                    <span class="mrz-color-name mrz-text-black">浅黄</span>
                    <span class="mrz-color-value mrz-text-black">#FFF2B5</span>
                  </div>
                  <!-- 较浅黄 -->
                  <div class="mrz-color-item mrz-bg-lighter-yellow">
                    <span class="mrz-color-name mrz-text-black">较浅黄</span>
                    <span class="mrz-color-value mrz-text-black">#FFE888</span>
                  </div>
                  <!-- 普通黄 -->
                  <div class="mrz-color-item mrz-bg-normal-yellow">
                    <span class="mrz-color-name mrz-text-black">普通黄</span>
                    <span class="mrz-color-value mrz-text-black">#FFD700</span>
                  </div>
                  <!-- 较深黄 -->
                  <div class="mrz-color-item mrz-bg-darker-yellow">
                    <span class="mrz-color-name mrz-text-white">较深黄</span>
                    <span class="mrz-color-value mrz-text-white">#CCB000</span>
                  </div>
                  <!-- 深黄 -->
                  <div class="mrz-color-item mrz-bg-dark-yellow">
                    <span class="mrz-color-name mrz-text-white">深黄</span>
                    <span class="mrz-color-value mrz-text-white">#997A00</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 绿色调 -->
          <el-col :span="24" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">绿色调</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-color-palette">
                  <!-- 浅绿 -->
                  <div class="mrz-color-item mrz-bg-light-green">
                    <span class="mrz-color-name mrz-text-black">浅绿</span>
                    <span class="mrz-color-value mrz-text-black">#B3E19D</span>
                  </div>
                  <!-- 较浅绿 -->
                  <div class="mrz-color-item mrz-bg-lighter-green">
                    <span class="mrz-color-name mrz-text-black">较浅绿</span>
                    <span class="mrz-color-value mrz-text-black">#95D475</span>
                  </div>
                  <!-- 普通绿 -->
                  <div class="mrz-color-item mrz-bg-normal-green">
                    <span class="mrz-color-name mrz-text-white">普通绿</span>
                    <span class="mrz-color-value mrz-text-white">#67C23A</span>
                  </div>
                  <!-- 较深绿 -->
                  <div class="mrz-color-item mrz-bg-darker-green">
                    <span class="mrz-color-name mrz-text-white">较深绿</span>
                    <span class="mrz-color-value mrz-text-white">#529B2E</span>
                  </div>
                  <!-- 深绿 -->
                  <div class="mrz-color-item mrz-bg-dark-green">
                    <span class="mrz-color-name mrz-text-white">深绿</span>
                    <span class="mrz-color-value mrz-text-white">#3D7422</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 青色调 -->
          <el-col :span="24" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">青色调</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-color-palette">
                  <!-- 浅青 -->
                  <div class="mrz-color-item mrz-bg-light-cyan">
                    <span class="mrz-color-name mrz-text-black">浅青</span>
                    <span class="mrz-color-value mrz-text-black">#A6E6E6</span>
                  </div>
                  <!-- 较浅青 -->
                  <div class="mrz-color-item mrz-bg-lighter-cyan">
                    <span class="mrz-color-name mrz-text-black">较浅青</span>
                    <span class="mrz-color-value mrz-text-black">#79D5D5</span>
                  </div>
                  <!-- 普通青 -->
                  <div class="mrz-color-item mrz-bg-normal-cyan">
                    <span class="mrz-color-name mrz-text-white">普通青</span>
                    <span class="mrz-color-value mrz-text-white">#4AC3C3</span>
                  </div>
                  <!-- 较深青 -->
                  <div class="mrz-color-item mrz-bg-darker-cyan">
                    <span class="mrz-color-name mrz-text-white">较深青</span>
                    <span class="mrz-color-value mrz-text-white">#3A9B9B</span>
                  </div>
                  <!-- 深青 -->
                  <div class="mrz-color-item mrz-bg-dark-cyan">
                    <span class="mrz-color-name mrz-text-white">深青</span>
                    <span class="mrz-color-value mrz-text-white">#2A7474</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 蓝色调 -->
          <el-col :span="24" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">蓝色调</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-color-palette">
                  <!-- 浅蓝 -->
                  <div class="mrz-color-item mrz-bg-light-blue">
                    <span class="mrz-color-name mrz-text-black">浅蓝</span>
                    <span class="mrz-color-value mrz-text-black">#A6D5FF</span>
                  </div>
                  <!-- 较浅蓝 -->
                  <div class="mrz-color-item mrz-bg-lighter-blue">
                    <span class="mrz-color-name mrz-text-black">较浅蓝</span>
                    <span class="mrz-color-value mrz-text-black">#79BBFF</span>
                  </div>
                  <!-- 普通蓝 -->
                  <div class="mrz-color-item mrz-bg-normal-blue">
                    <span class="mrz-color-name mrz-text-white">普通蓝</span>
                    <span class="mrz-color-value mrz-text-white">#409EFF</span>
                  </div>
                  <!-- 较深蓝 -->
                  <div class="mrz-color-item mrz-bg-darker-blue">
                    <span class="mrz-color-name mrz-text-white">较深蓝</span>
                    <span class="mrz-color-value mrz-text-white">#337ECC</span>
                  </div>
                  <!-- 深蓝 -->
                  <div class="mrz-color-item mrz-bg-dark-blue">
                    <span class="mrz-color-name mrz-text-white">深蓝</span>
                    <span class="mrz-color-value mrz-text-white">#1E63B3</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 紫色调 -->
          <el-col :span="24" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">紫色调</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-color-palette">
                  <!-- 浅紫 -->
                  <div class="mrz-color-item mrz-bg-light-purple">
                    <span class="mrz-color-name mrz-text-black">浅紫</span>
                    <span class="mrz-color-value mrz-text-black">#D9B3FF</span>
                  </div>
                  <!-- 较浅紫 -->
                  <div class="mrz-color-item mrz-bg-lighter-purple">
                    <span class="mrz-color-name mrz-text-black">较浅紫</span>
                    <span class="mrz-color-value mrz-text-black">#B388FF</span>
                  </div>
                  <!-- 普通紫 -->
                  <div class="mrz-color-item mrz-bg-normal-purple">
                    <span class="mrz-color-name mrz-text-white">普通紫</span>
                    <span class="mrz-color-value mrz-text-white">#8A2BE2</span>
                  </div>
                  <!-- 较深紫 -->
                  <div class="mrz-color-item mrz-bg-darker-purple">
                    <span class="mrz-color-name mrz-text-white">较深紫</span>
                    <span class="mrz-color-value mrz-text-white">#6A1B9A</span>
                  </div>
                  <!-- 深紫 -->
                  <div class="mrz-color-item mrz-bg-dark-purple">
                    <span class="mrz-color-name mrz-text-white">深紫</span>
                    <span class="mrz-color-value mrz-text-white">#4A148C</span>
                  </div>
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
  name: 'ColorIndex'
}
</script>
