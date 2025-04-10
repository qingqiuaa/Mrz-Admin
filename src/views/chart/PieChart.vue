<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <!-- 基础饼图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础饼图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="pieChart1" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 环形饼图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">环形饼图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="pieChart2" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 半环形饼图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">半环形饼图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="pieChart3" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 南丁格尔玫瑰图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">南丁格尔玫瑰图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="pieChart4" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { debounce } from 'lodash'
import {
  pieChartDraw1,
  pieChartDraw2,
  pieChartDraw3,
  pieChartDraw4,
  destroyChart
} from '@/assets/js/charts/pie-charts.js'

export default {
  name: 'PieChart',
  mounted () {
    // 绘制图表
    pieChartDraw1.call(this)
    pieChartDraw2.call(this)
    pieChartDraw3.call(this)
    pieChartDraw4.call(this)
    this.$nextTick(() => {
      window.dispatchEvent(new Event('resize'))
    })

    // 绑定窗口大小变化事件
    window.addEventListener('resize', this.resizeChart)
  },
  // 在 beforeDestroy 中销毁
  beforeDestroy () {
    destroyChart.call(this)
    if (this.chartInstance1) {
      this.chartInstance1.dispose()
    }
    if (this.chartInstance2) {
      this.chartInstance2.dispose()
    }
    if (this.chartInstance3) {
      this.chartInstance3.dispose()
    }
    if (this.chartInstance4) {
      this.chartInstance4.dispose()
    }
    // 移除窗口大小变化事件
    window.removeEventListener('resize', this.resizeChart)
  },
  methods: {
    // 防抖处理窗口大小变化
    resizeChart: debounce(function () {
      if (this.chartInstance1) {
        this.chartInstance1.resize()
      }
      if (this.chartInstance2) {
        this.chartInstance2.resize()
      }
      if (this.chartInstance3) {
        this.chartInstance3.resize()
      }
      if (this.chartInstance4) {
        this.chartInstance4.resize()
      }
    }, 200, {
      leading: false,
      trailing: true
    })
  }
}
</script>
