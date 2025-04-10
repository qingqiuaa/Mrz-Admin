// 基础折线图
export const lineChartDraw1 = function () {
  if (!this.$refs.lineChart1) return

  const chart = this.$echarts.init(this.$refs.lineChart1)

  const option = {
    color: ['#4A90E2'],
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据值'] },
    xAxis: {
      type: 'category',
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      axisLabel: { interval: 0, rotate: 45 }
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '数据值',
        type: 'line',
        data: [100, 80, 90, 120, 130, 70, 150],
        smooth: false,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 }
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance1 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 监听窗口大小变化以调整图表尺寸
  window.addEventListener('resize', this.resizeChart)
}

// 平滑折线图
export const lineChartDraw2 = function () {
  if (!this.$refs.lineChart2) return

  const chart = this.$echarts.init(this.$refs.lineChart2)

  const option = {
    color: ['#56CFE1'],
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据值'] },
    xAxis: {
      type: 'category',
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      axisLabel: { interval: 0, rotate: 45 }
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '数据值',
        type: 'line',
        data: [100, 80, 90, 120, 130, 70, 150],
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 }
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance2 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 监听窗口大小变化以调整图表尺寸
  window.addEventListener('resize', this.resizeChart)
}

// 基础堆叠折线图
export const lineChartDraw3 = function () {
  if (!this.$refs.lineChart3) return

  const chart = this.$echarts.init(this.$refs.lineChart3)

  const option = {
    color: ['#4A90E2', '#56CFE1'],
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据值1', '数据值2'] },
    xAxis: {
      type: 'category',
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      axisLabel: { interval: 0, rotate: 45 }
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '数据值1',
        type: 'line',
        data: [100, 80, 90, 120, 130, 70, 150],
        smooth: false,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 }
      },
      {
        name: '数据值2',
        type: 'line',
        data: [120, 60, 110, 100, 150, 50, 180],
        smooth: false,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 }
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance3 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 监听窗口大小变化以调整图表尺寸
  window.addEventListener('resize', this.resizeChart)
}

// 平滑堆叠折线图
export const lineChartDraw4 = function () {
  if (!this.$refs.lineChart4) return

  const chart = this.$echarts.init(this.$refs.lineChart4)

  const option = {
    color: ['#4A90E2', '#56CFE1'],
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据值1', '数据值2'] },
    xAxis: {
      type: 'category',
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      axisLabel: { interval: 0, rotate: 45 }
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '数据值1',
        type: 'line',
        data: [100, 80, 90, 120, 130, 70, 150],
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 }
      },
      {
        name: '数据值2',
        type: 'line',
        data: [120, 60, 110, 100, 150, 50, 180],
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 }
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance4 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 监听窗口大小变化以调整图表尺寸
  window.addEventListener('resize', this.resizeChart)
}

// 基础面积折线图
export const lineChartDraw5 = function () {
  if (!this.$refs.lineChart5) return

  const chart = this.$echarts.init(this.$refs.lineChart5)

  const option = {
    color: ['#4A90E2'],
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据值'] },
    xAxis: {
      type: 'category',
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      axisLabel: { interval: 0, rotate: 45 }
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '数据值',
        type: 'line',
        data: [100, 80, 90, 120, 130, 70, 150],
        smooth: false,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 },
        areaStyle: {}
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance5 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 监听窗口大小变化以调整图表尺寸
  window.addEventListener('resize', this.resizeChart)
}

// 堆叠面积折线图
export const lineChartDraw6 = function () {
  if (!this.$refs.lineChart6) return

  const chart = this.$echarts.init(this.$refs.lineChart6)

  const option = {
    color: ['#4A90E2', '#56CFE1'],
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据值1', '数据值2'] },
    xAxis: {
      type: 'category',
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      axisLabel: { interval: 0, rotate: 45 }
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '数据值1',
        type: 'line',
        data: [100, 80, 90, 120, 130, 70, 150],
        smooth: false,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 },
        areaStyle: {}
      },
      {
        name: '数据值2',
        type: 'line',
        data: [120, 60, 110, 100, 150, 50, 180],
        smooth: false,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 },
        areaStyle: {}
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance6 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 监听窗口大小变化以调整图表尺寸
  window.addEventListener('resize', this.resizeChart)
}

export const destroyChart = function () {
  if (this.chartInstance1) {
    this.chartInstance1.dispose()
    this.chartInstance1 = null
  }

  if (this.chartInstance2) {
    this.chartInstance2.dispose()
    this.chartInstance2 = null
  }

  if (this.chartInstance3) {
    this.chartInstance3.dispose()
    this.chartInstance3 = null
  }

  if (this.chartInstance4) {
    this.chartInstance4.dispose()
    this.chartInstance4 = null
  }

  if (this.chartInstance5) {
    this.chartInstance5.dispose()
    this.chartInstance5 = null
  }

  if (this.chartInstance6) {
    this.chartInstance6.dispose()
    this.chartInstance6 = null
  }
}
