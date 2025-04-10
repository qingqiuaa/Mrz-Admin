<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <!-- 基础按钮 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础按钮</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn">普通按钮</el-button>
                  <el-button class="mrz-btn-primary">主要按钮</el-button>
                  <el-button class="mrz-btn-success">成功按钮</el-button>
                  <el-button class="mrz-btn-info">信息按钮</el-button>
                  <el-button class="mrz-btn-warning">警告按钮</el-button>
                  <el-button class="mrz-btn-danger">危险按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 基础禁用按钮 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础禁用按钮</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn mrz-disabled">普通按钮</el-button>
                  <el-button class="mrz-btn-primary mrz-disabled">主要按钮</el-button>
                  <el-button class="mrz-btn-success mrz-disabled">成功按钮</el-button>
                  <el-button class="mrz-btn-info mrz-disabled">信息按钮</el-button>
                  <el-button class="mrz-btn-warning mrz-disabled">警告按钮</el-button>
                  <el-button class="mrz-btn-danger mrz-disabled">危险按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 朴素按钮 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">朴素按钮</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn mrz-plain">普通按钮</el-button>
                  <el-button class="mrz-btn-primary mrz-plain">主要按钮</el-button>
                  <el-button class="mrz-btn-success mrz-plain">成功按钮</el-button>
                  <el-button class="mrz-btn-info mrz-plain">信息按钮</el-button>
                  <el-button class="mrz-btn-warning mrz-plain">警告按钮</el-button>
                  <el-button class="mrz-btn-danger mrz-plain">危险按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 朴素禁用按钮 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">朴素禁用按钮</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn mrz-plain mrz-disabled">普通按钮</el-button>
                  <el-button class="mrz-btn-primary mrz-plain mrz-disabled">主要按钮</el-button>
                  <el-button class="mrz-btn-success mrz-plain mrz-disabled">成功按钮</el-button>
                  <el-button class="mrz-btn-info mrz-plain mrz-disabled">信息按钮</el-button>
                  <el-button class="mrz-btn-warning mrz-plain mrz-disabled">警告按钮</el-button>
                  <el-button class="mrz-btn-danger mrz-plain mrz-disabled">危险按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 基础圆角按钮 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础圆角按钮</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn mrz-rounded">普通按钮</el-button>
                  <el-button class="mrz-btn-primary mrz-rounded">主要按钮</el-button>
                  <el-button class="mrz-btn-success mrz-rounded">成功按钮</el-button>
                  <el-button class="mrz-btn-info mrz-rounded">信息按钮</el-button>
                  <el-button class="mrz-btn-warning mrz-rounded">警告按钮</el-button>
                  <el-button class="mrz-btn-danger mrz-rounded">危险按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 禁用圆角按钮 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">禁用圆角按钮</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn mrz-rounded mrz-disabled">普通按钮</el-button>
                  <el-button class="mrz-btn-primary mrz-rounded mrz-disabled">主要按钮</el-button>
                  <el-button class="mrz-btn-success mrz-rounded mrz-disabled">成功按钮</el-button>
                  <el-button class="mrz-btn-info mrz-rounded">信息按钮</el-button>
                  <el-button class="mrz-btn-warning mrz-rounded mrz-disabled">警告按钮</el-button>
                  <el-button class="mrz-btn-danger mrz-rounded mrz-disabled">危险按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 朴素圆角按钮 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">朴素圆角按钮</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn mrz-rounded mrz-plain">普通按钮</el-button>
                  <el-button class="mrz-btn-primary mrz-rounded mrz-plain">主要按钮</el-button>
                  <el-button class="mrz-btn-success mrz-rounded mrz-plain">成功按钮</el-button>
                  <el-button class="mrz-btn-info mrz-rounded mrz-plain">信息按钮</el-button>
                  <el-button class="mrz-btn-warning mrz-rounded mrz-plain">警告按钮</el-button>
                  <el-button class="mrz-btn-danger mrz-rounded mrz-plain">危险按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 朴素禁用圆角按钮 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">朴素禁用圆角按钮</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-button class="mrz-btn mrz-rounded mrz-plain mrz-disabled">普通按钮</el-button>
                  <el-button class="mrz-btn-primary mrz-rounded mrz-plain mrz-disabled">主要按钮</el-button>
                  <el-button class="mrz-btn-success mrz-rounded mrz-plain mrz-disabled">成功按钮</el-button>
                  <el-button class="mrz-btn-info mrz-rounded mrz-plain mrz-disabled">信息按钮</el-button>
                  <el-button class="mrz-btn-warning mrz-rounded mrz-plain mrz-disabled">警告按钮</el-button>
                  <el-button class="mrz-btn-danger mrz-rounded mrz-plain mrz-disabled">危险按钮</el-button>
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
  name: 'ButtonIndex'
}
</script>
