// 散点图
export const otherChartDraw1 = function () {
  if (!this.$refs.otherChart1) return

  const chart = this.$echarts.init(this.$refs.otherChart1)

  const option = {
    color: ['#4A90E2'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['数据值']
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
        name: '数据值',
        type: 'scatter',
        data: [
          ['时间1', 100],
          ['时间2', 80],
          ['时间3', 90],
          ['时间4', 120],
          ['时间5', 130],
          ['时间6', 70],
          ['时间7', 150]
        ],
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
          borderWidth: 2,
          borderColor: '#FFFFFF'
        }
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

// 雷达图
export const otherChartDraw2 = function () {
  if (!this.$refs.otherChart2) return

  const chart = this.$echarts.init(this.$refs.otherChart2)

  const option = {
    color: ['#4A90E2'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['数据值']
    },
    radar: {
      indicator: [
        { name: '时间1', max: 150 },
        { name: '时间2', max: 150 },
        { name: '时间3', max: 150 },
        { name: '时间4', max: 150 },
        { name: '时间5', max: 150 },
        { name: '时间6', max: 150 },
        { name: '时间7', max: 150 }
      ],
      radius: '70%',
      center: ['50%', '50%'],
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#FAFCFF', '#F5F9FF', '#E6F2FF', '#CCE8FF']
        }
      }
    },
    series: [
      {
        name: '数据值',
        type: 'radar',
        data: [
          {
            value: [100, 80, 90, 120, 130, 70, 150],
            name: '数据值'
          }
        ],
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          borderWidth: 2,
          borderColor: '#FFFFFF'
        },
        lineStyle: {
          width: 2
        },
        areaStyle: {
          color: 'rgba(74, 144, 226, 0.3)'
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

// 仪表盘
export const otherChartDraw3 = function () {
  if (!this.$refs.otherChart3) return

  const chart = this.$echarts.init(this.$refs.otherChart3)

  const option = {
    color: ['#4A90E2'],
    tooltip: {
      formatter: '{a} <br/>{b}: {c}%'
    },
    series: [
      {
        name: '数据值',
        type: 'gauge',
        min: 0,
        max: 150,
        splitNumber: 5,
        radius: '80%',
        center: ['50%', '50%'],
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.3, '#a6d5ff'],
              [0.7, '#409eff'],
              [1, '#1e63b3']
            ]
          }
        },
        pointer: {
          length: '70%',
          width: 5
        },
        detail: {
          valueAnimation: true,
          fontSize: 20,
          color: '#4A90E2',
          formatter: '{value}'
        },
        data: [{ value: 120, name: '数据值' }]
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

// 漏斗图
export const otherChartDraw4 = function () {
  if (!this.$refs.otherChart4) return

  const chart = this.$echarts.init(this.$refs.otherChart4)

  const option = {
    color: ['#4A90E2', '#56CFE1', '#63D7E4', '#79BBFF', '#8FCFFF', '#A6D5FF', '#AAAAFF'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}' // 提示框格式
    },
    legend: {
      data: ['时间1', '时间2', '时间3', '时间4', '时间5', '时间6', '时间7'],
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '数据值',
        type: 'funnel',
        min: 0,
        max: 150,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
          formatter: '{b}\n{c}',
          color: '#FFFFFF'
        },
        itemStyle: {
          borderColor: '#FFFFFF',
          borderWidth: 1
        },
        data: [
          { value: 150, name: '时间1' },
          { value: 130, name: '时间2' },
          { value: 120, name: '时间3' },
          { value: 90, name: '时间4' },
          { value: 80, name: '时间5' },
          { value: 70, name: '时间6' },
          { value: 100, name: '时间7' }
        ]
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
}
