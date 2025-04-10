// 基础饼图
export const pieChartDraw1 = function () {
  if (!this.$refs.pieChart1) return

  const chart = this.$echarts.init(this.$refs.pieChart1)

  const option = {
    color: ['#4A90E2', '#56CFE1', '#63D7E4', '#79BBFF', '#8FCFFF', '#A6D5FF', '#CCE8FF'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: '0%',
      left: 'center',
      textStyle: {
        fontSize: 10
      }
    },
    series: [
      {
        name: '数据值',
        type: 'pie',
        radius: '70%',
        center: ['50%', '40%'],
        data: [
          { value: 100, name: '时间1' },
          { value: 80, name: '时间2' },
          { value: 90, name: '时间3' },
          { value: 120, name: '时间4' },
          { value: 130, name: '时间5' },
          { value: 70, name: '时间6' },
          { value: 150, name: '时间7' }
        ],
        label: {
          show: false
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
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
  window.addEventListener('resize', () => {
    chart.resize()
  })
}

// 环形饼图
export const pieChartDraw2 = function () {
  if (!this.$refs.pieChart2) return

  const chart = this.$echarts.init(this.$refs.pieChart2)

  const option = {
    color: ['#4A90E2', '#56CFE1', '#63D7E4', '#79BBFF', '#8FCFFF', '#A6D5FF', '#CCE8FF'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: '0%',
      left: 'center',
      textStyle: {
        fontSize: 10
      }
    },
    series: [
      {
        name: '数据值',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '40%'],
        data: [
          { value: 100, name: '时间1' },
          { value: 80, name: '时间2' },
          { value: 90, name: '时间3' },
          { value: 120, name: '时间4' },
          { value: 130, name: '时间5' },
          { value: 70, name: '时间6' },
          { value: 150, name: '时间7' }
        ],
        label: {
          show: false
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
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
  window.addEventListener('resize', () => {
    chart.resize()
  })
}

// 半环形饼图
export const pieChartDraw3 = function () {
  if (!this.$refs.pieChart3) return

  const chart = this.$echarts.init(this.$refs.pieChart3)

  const option = {
    color: ['#4A90E2', '#56CFE1', '#63D7E4', '#79BBFF', '#8FCFFF', '#A6D5FF', '#CCE8FF'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: '0%',
      left: 'center',
      textStyle: {
        fontSize: 10
      }
    },
    series: [
      {
        name: '数据值',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '60%'],
        data: [
          { value: 100, name: '时间1' },
          { value: 80, name: '时间2' },
          { value: 90, name: '时间3' },
          { value: 120, name: '时间4' },
          { value: 130, name: '时间5' },
          { value: 70, name: '时间6' },
          { value: 150, name: '时间7' }
        ],
        label: {
          show: false
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        startAngle: 180,
        endAngle: 0,
        roundCap: true
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
  window.addEventListener('resize', () => {
    chart.resize()
  })
}

// 南丁格尔玫瑰图
export const pieChartDraw4 = function () {
  if (!this.$refs.pieChart4) return

  const chart = this.$echarts.init(this.$refs.pieChart4)

  const option = {
    color: ['#4A90E2', '#56CFE1', '#63D7E4', '#79BBFF', '#8FCFFF', '#A6D5FF', '#CCE8FF'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: '0%',
      left: 'center',
      textStyle: {
        fontSize: 10
      }
    },
    series: [
      {
        name: '数据值',
        type: 'pie',
        radius: ['20%', '70%'],
        center: ['50%', '40%'],
        roseType: 'radius',
        data: [
          { value: 100, name: '时间1' },
          { value: 80, name: '时间2' },
          { value: 90, name: '时间3' },
          { value: 120, name: '时间4' },
          { value: 130, name: '时间5' },
          { value: 70, name: '时间6' },
          { value: 150, name: '时间7' }
        ],
        label: {
          show: false
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
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
  window.addEventListener('resize', () => {
    chart.resize()
  })
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
