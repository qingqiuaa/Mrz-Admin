// 基础柱状图
export const barChartDraw1 = function () {
  if (!this.$refs.barChart1) return

  const chart = this.$echarts.init(this.$refs.barChart1)

  const option = {
    color: ['#4A90E2'],
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据值'] },
    xAxis: {
      type: 'category',
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      axisLabel: { interval: 0, rotate: 45, fontSize: 12 }
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '数据值',
        type: 'bar',
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

// 背景色柱状图
export const barChartDraw2 = function () {
  if (!this.$refs.barChart2) return

  const chart = this.$echarts.init(this.$refs.barChart2)

  // 配置项
  const option = {
    color: ['#4A90E2'],
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据值'] },
    xAxis: {
      type: 'category',
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      axisLabel: {
        rotate: 45,
        fontSize: 12
      }
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '数据值',
        type: 'bar',
        data: [100, 80, 90, 120, 130, 70, 150],
        smooth: false,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 },
        showBackground: true,
        backgroundStyle: {
          color: '#DDEEEE'
        }
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

// 排序柱状图
export const barChartDraw3 = function () {
  if (!this.$refs.barChart3) return

  const chart = this.$echarts.init(this.$refs.barChart3)

  // 原始数据
  const categories = ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7']
  const data = [100, 80, 90, 120, 130, 70, 150]

  const option = {
    color: ['#4A90E2'],
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据值'] },
    xAxis: {
      type: 'category',
      data: categories,
      axisLabel: {
        rotate: 45,
        fontSize: 12
      }
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '数据值',
        type: 'bar',
        data: data,
        smooth: false,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 }
      }
    ]
  }

  chart.setOption(option)

  const sortData = (ascending = false) => {
    const sortedData = [...data]
      .map((value, index) => ({ value, category: categories[index] }))
      .sort((a, b) => ascending ? a.value - b.value : b.value - a.value)

    const sortedCategories = sortedData.map(item => item.category)
    const sortedValues = sortedData.map(item => item.value)

    chart.setOption({
      xAxis: {
        data: sortedCategories
      },
      series: [
        {
          data: sortedValues
        }
      ]
    })
  }
  sortData(false)

  this.chartInstance3 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 监听窗口大小变化以调整图表尺寸
  window.addEventListener('resize', this.resizeChart)
}

// 横线柱状图
export const barChartDraw4 = function () {
  if (!this.$refs.barChart4) return

  const chart = this.$echarts.init(this.$refs.barChart4)

  const option = {
    color: ['#4A90E2'],
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据值'] },
    yAxis: {
      type: 'category',
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      axisLabel: { interval: 0, rotate: 45 }
    },
    xAxis: {
      type: 'value'
    },
    series: [
      {
        name: '数据值',
        type: 'bar',
        data: [100, 80, 90, 120, 130, 70, 150],
        smooth: false,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 }
      }
    ],
    grid: {
      left: '2%',
      containLabel: true
    }
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

// 分组柱状图
export const barChartDraw5 = function () {
  if (!this.$refs.barChart5) return

  const chart = this.$echarts.init(this.$refs.barChart5)

  const option = {
    color: ['#4A90E2', '#56CFE1'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: {
      data: ['数据值1', '数据值2']
    },
    xAxis: {
      type: 'category',
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      axisLabel: { interval: 0, rotate: 45, fontSize: 12 }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '数据值1',
        type: 'bar',
        barWidth: '30%',
        data: [100, 80, 90, 120, 130, 70, 150]
      },
      {
        name: '数据值2',
        type: 'bar',
        barWidth: '30%',
        data: [120, 60, 110, 100, 150, 50, 180]
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
}
