<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 字体大小 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">字体大小</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-font-group">
                <span class="mrz-size-1">mrz-size-1</span>
                <span class="mrz-size-2">mrz-size-2</span>
                <span class="mrz-size-3">mrz-size-3</span>
                <span class="mrz-size-4">mrz-size-4</span>
                <span class="mrz-size-5">mrz-size-5</span>
                <span class="mrz-size-6">mrz-size-6</span>
                <span class="mrz-size-7">mrz-size-7</span>
                <span class="mrz-size-8">mrz-size-8</span>
                <span class="mrz-size-9">mrz-size-9</span>
                <span class="mrz-size-10">mrz-size-10</span>
                <span class="mrz-size-11">mrz-size-11</span>
                <span class="mrz-size-12">mrz-size-12</span>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 基础链接文字 -->
        <el-col :span="6" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">基础链接文字</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-link-group">
                <a class="mrz-link" href="#">默认链接</a>
                <a class="mrz-link mrz-success" href="#">成功链接</a>
                <a class="mrz-link mrz-info" href="#">信息链接</a>
                <a class="mrz-link mrz-warning" href="#">警告链接</a>
                <a class="mrz-link mrz-danger" href="#">危险链接</a>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 下划线文字链接 -->
        <el-col :span="6" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">下划线文字链接</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-link-group">
                <a class="mrz-link mrz-underline" href="#">默认链接</a>
                <a class="mrz-link mrz-underline mrz-success" href="#"
                  >成功链接</a
                >
                <a class="mrz-link mrz-underline mrz-info" href="#">信息链接</a>
                <a class="mrz-link mrz-underline mrz-warning" href="#"
                  >警告链接</a
                >
                <a class="mrz-link mrz-underline mrz-danger" href="#"
                  >危险链接</a
                >
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 禁用链接文字 -->
        <el-col :span="6" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">禁用链接文字</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-link-group">
                <a class="mrz-link mrz-disabled" href="#">默认链接</a>
                <a class="mrz-link mrz-disabled mrz-success" href="#"
                  >成功链接</a
                >
                <a class="mrz-link mrz-disabled mrz-info" href="#">信息链接</a>
                <a class="mrz-link mrz-disabled mrz-warning" href="#"
                  >警告链接</a
                >
                <a class="mrz-link mrz-disabled mrz-danger" href="#"
                  >危险链接</a
                >
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 内联文字 -->
        <el-col :span="6" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">内联文字</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-font-group">
                <span class="mrz-overline">上划线文字</span>
                <span class="mrz-underline">下划线文字</span>
                <span class="mrz-double">双下划线文字</span>
                <span class="mrz-dashed">虚下划线文字</span>
                <span class="mrz-strike">删除线文字</span>
                <span class="mrz-sub">下标<sub>文字</sub></span>
                <span class="mrz-sup">上标<sup>文字</sup></span>
                <span class="mrz-wavy">波浪线文字</span>
                <span class="mrz-italic">斜体文字</span>
                <span class="mrz-bold">粗体文字</span>
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
  name: 'TextIndex'
}
</script>
