<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 空白页 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">空白页</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body"></div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'StarterIndex'
}
</script>

<style></style>
