<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <!-- 基础柱状图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础柱状图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="barChart1" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 背景色柱状图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">背景色柱状图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="barChart2" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 排序柱状图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">排序柱状图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="barChart3" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 横线柱状图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">横线柱状图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="barChart4" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 分组柱状图 -->
          <el-col :span="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">分组柱状图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="barChart5" class="mrz-chart-container"></div>
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
  barChartDraw1,
  barChartDraw2,
  barChartDraw3,
  barChartDraw4,
  barChartDraw5,
  destroyChart
} from '@/assets/js/charts/bar-charts.js'

export default {
  name: 'BarChart',
  mounted () {
    // 绘制图表
    barChartDraw1.call(this)
    barChartDraw2.call(this)
    barChartDraw3.call(this)
    barChartDraw4.call(this)
    barChartDraw5.call(this)
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
    if (this.chartInstance5) {
      this.chartInstance5.dispose()
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
      if (this.chartInstance5) {
        this.chartInstance5.resize()
      }
    }, 200, {
      leading: false,
      trailing: true
    })
  }
}
</script>
