<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <!-- 基础折线图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础折线图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="lineChart1" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 平滑折线图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">平滑折线图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="lineChart2" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 基础堆叠折线图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础堆叠折线图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="lineChart3" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 平滑堆叠折线图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">平滑堆叠折线图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="lineChart4" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 基础面积折线图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础面积折线图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="lineChart5" class="mrz-chart-container"></div>
              </div>
            </el-card>
          </el-col>

          <!-- 堆叠面积折线图 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">堆叠面积折线图</span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div ref="lineChart6" class="mrz-chart-container"></div>
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
  lineChartDraw1,
  lineChartDraw2,
  lineChartDraw3,
  lineChartDraw4,
  lineChartDraw5,
  lineChartDraw6,
  destroyChart
} from '@/assets/js/charts/line-charts.js'

export default {
  name: 'LineChart',
  mounted () {
    // 绘制图表
    lineChartDraw1.call(this)
    lineChartDraw2.call(this)
    lineChartDraw3.call(this)
    lineChartDraw4.call(this)
    lineChartDraw5.call(this)
    lineChartDraw6.call(this)
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
    if (this.chartInstanc6) {
      this.chartInstance6.dispose()
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
      if (this.chartInstance6) {
        this.chartInstance6.resize()
      }
    }, 200, {
      leading: false,
      trailing: true
    })
  }
}
</script>
