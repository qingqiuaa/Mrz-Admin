<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 基础分页 -->
        <el-col :span="12" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">基础分页</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-pagination
                :current-page="currentPage1"
                :page-size="pageSize"
                :total="total"
                background
                class="mrz-paging"
                layout="prev, pager, next"
              >
              </el-pagination>
            </div>
          </el-card>
        </el-col>

        <!-- 无边框分页 -->
        <el-col :span="12" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">无边框分页</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-pagination
                :current-page="currentPage2"
                :page-size="pageSize"
                :total="total"
                background
                class="mrz-paging-noborder"
                layout="prev, pager, next"
              >
              </el-pagination>
            </div>
          </el-card>
        </el-col>

        <!-- 圆形分页 -->
        <el-col :span="12" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">圆形分页</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-pagination
                :current-page="currentPage3"
                :page-size="pageSize"
                :total="total"
                background
                class="mrz-paging-circle"
                layout="prev, pager, next"
              >
              </el-pagination>
            </div>
          </el-card>
        </el-col>

        <!-- 圆形无边框分页 -->
        <el-col :span="12" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">圆形无边框分页</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-pagination
                :current-page="currentPage4"
                :page-size="pageSize"
                :total="total"
                background
                class="mrz-paging-circle-noborder"
                layout="prev, pager, next"
              >
              </el-pagination>
            </div>
          </el-card>
        </el-col>

        <!-- 无间距分页 -->
        <el-col :span="12" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">无间距分页</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-pagination
                :current-page="currentPage5"
                :page-size="pageSize"
                :total="total"
                background
                class="mrz-paging-nogap"
                layout="prev, pager, next"
              >
              </el-pagination>
            </div>
          </el-card>
        </el-col>

        <!-- 圆形无间距分页 -->
        <el-col :span="12" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">圆形无间距分页</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-pagination
                :current-page="currentPage6"
                :page-size="pageSize"
                :total="total"
                background
                class="mrz-paging-circle-nogap"
                layout="prev, pager, next"
              >
              </el-pagination>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'PagingIndex',
  data () {
    return {
      total: 100,
      pageSize: 10,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
      currentPage5: 1,
      currentPage6: 1
    }
  }
}
</script>
