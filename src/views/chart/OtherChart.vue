<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <!-- 散点图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">散点图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="otherChart1" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 雷达图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">雷达图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="otherChart2" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 仪表盘 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">仪表盘</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="otherChart3" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 漏斗图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">漏斗图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="otherChart4" class="mrz-chart-container"></div>
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
  otherChartDraw1,
  otherChartDraw2,
  otherChartDraw3,
  otherChartDraw4,
  destroyChart
} from '@/assets/js/charts/other-charts.js'

export default {
  name: 'OtherChart',
  mounted () {
    // 绘制图表
    otherChartDraw1.call(this)
    otherChartDraw2.call(this)
    otherChartDraw3.call(this)
    otherChartDraw4.call(this)
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
